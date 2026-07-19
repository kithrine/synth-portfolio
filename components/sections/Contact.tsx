import Image from "next/image";
import ContactForm from "./ContactForm";
import contactChibiImg from "@/public/assets/images/contact-chibi.png";

/* Twinkling background stars — static values from the vanilla markup. */
const CHIBI_STARS = [
  { x: "12%", y: "8%", s: "5px", c: "var(--pink)", dur: "2.1s", dl: "0s" },
  { x: "78%", y: "5%", s: "3px", c: "var(--cyan)", dur: "1.7s", dl: "0.4s" },
  { x: "88%", y: "22%", s: "7px", c: "var(--purple)", dur: "2.5s", dl: "0.9s" },
  { x: "5%", y: "35%", s: "4px", c: "var(--cyan)", dur: "1.9s", dl: "0.2s" },
  { x: "92%", y: "48%", s: "3px", c: "var(--pink)", dur: "2.3s", dl: "1.1s" },
  { x: "20%", y: "60%", s: "6px", c: "var(--purple)", dur: "2.0s", dl: "0.6s" },
  { x: "65%", y: "15%", s: "4px", c: "var(--yellow)", dur: "1.6s", dl: "0.3s" },
  { x: "40%", y: "5%", s: "3px", c: "var(--pink)", dur: "2.8s", dl: "0.8s" },
  { x: "8%", y: "72%", s: "5px", c: "var(--cyan)", dur: "2.2s", dl: "1.4s" },
  { x: "82%", y: "68%", s: "3px", c: "var(--yellow)", dur: "1.8s", dl: "0.5s" },
  { x: "50%", y: "12%", s: "6px", c: "var(--purple)", dur: "2.4s", dl: "1.0s" },
  { x: "30%", y: "80%", s: "4px", c: "var(--pink)", dur: "1.5s", dl: "0.7s" },
];

export default function Contact() {
  return (
    <footer
      id="contact"
      className="section contact-section"
      aria-labelledby="contact-heading"
    >
      <div className="contact-layout">
        <div className="section-card contact-card">
          <h2 id="contact-heading" className="section-title glow-pink">
            LET&apos;S CONNECT
          </h2>
          <p className="contact-sub">
            Have a project in mind or just want to say hi? Drop me a message.
          </p>
          <ContactForm />
        </div>

        <div className="contact-chibi-col" aria-hidden="true">
          {CHIBI_STARS.map((star, i) => (
            <span
              key={i}
              className="chibi-star"
              style={
                {
                  "--x": star.x,
                  "--y": star.y,
                  "--s": star.s,
                  "--c": star.c,
                  "--dur": star.dur,
                  "--dl": star.dl,
                } as React.CSSProperties
              }
            ></span>
          ))}
          <Image
            src={contactChibiImg}
            alt=""
            className="contact-chibi"
            sizes="(max-width: 768px) 160px, 420px"
          />
        </div>
      </div>

      <div className="footer-bar">
        <p className="footer-copy">© 2024 KT &nbsp;&nbsp; ALL RIGHTS RESERVED.</p>
        <p className="footer-tagline" aria-hidden="true">
          ✦ CODE. CREATE. INSPIRE. REPEAT. ✦
        </p>
      </div>
    </footer>
  );
}
