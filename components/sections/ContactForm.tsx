"use client";

import { useEffect, useRef, useState } from "react";

const FORMSPREE_ID = "xqenvlqr";

type Status = { message: string; color: string };

/**
 * Behavioral port of the vanilla contact form: same validation order and
 * messages, same Formspree JSON POST, same 5s status auto-clear. The form
 * keeps its action/method so it still submits without JavaScript.
 */
export default function ContactForm() {
  const [status, setStatus] = useState<Status | null>(null);
  const [sending, setSending] = useState(false);
  const clearTimer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (clearTimer.current !== null) window.clearTimeout(clearTimer.current);
    };
  }, []);

  const showStatus = (message: string, color: string) => {
    if (clearTimer.current !== null) window.clearTimeout(clearTimer.current);
    setStatus({ message, color });
    clearTimer.current = window.setTimeout(() => setStatus(null), 5000);
  };

  const isValidEmail = (val: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !message) {
      showStatus("Please fill in all fields.", "var(--pink)");
      return;
    }
    if (!isValidEmail(email)) {
      showStatus("Please enter a valid email address.", "var(--pink)");
      return;
    }

    setSending(true);
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });
      const result = await res.json();
      if (result.ok) {
        showStatus("Message sent! I'll get back to you soon ✦", "var(--cyan)");
        form.reset();
      } else {
        const err =
          (result.errors as { message: string }[] | undefined)
            ?.map((er) => er.message)
            .join(", ") || "Something went wrong.";
        showStatus(err, "var(--pink)");
      }
    } catch {
      showStatus("Network error — please try again.", "var(--pink)");
    } finally {
      setSending(false);
    }
  };

  return (
    <form
      action={`https://formspree.io/f/${FORMSPREE_ID}`}
      method="POST"
      className="contact-form"
      id="contact-form"
      noValidate
      onSubmit={handleSubmit}
    >
      <div className="form-row">
        <label htmlFor="name" className="sr-only">
          Your name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="YOUR NAME"
          required
          className="form-input"
        />

        <label htmlFor="email" className="sr-only">
          Your email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="YOUR EMAIL"
          required
          className="form-input"
        />
      </div>

      <label htmlFor="message" className="sr-only">
        Your message
      </label>
      <textarea
        id="message"
        name="message"
        placeholder="YOUR MESSAGE"
        required
        rows={5}
        className="form-input form-textarea"
      ></textarea>

      <button
        type="submit"
        className="btn btn-solid w-full"
        disabled={sending}
      >
        {sending ? "SENDING…" : "SEND MESSAGE ✦"}
      </button>
      <p
        className="form-status"
        id="form-status"
        aria-live="polite"
        style={status ? { color: status.color } : undefined}
      >
        {status?.message ?? ""}
      </p>
    </form>
  );
}
