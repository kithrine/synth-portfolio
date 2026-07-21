import type { Metadata } from "next";
import {
  RESUME_SUMMARY,
  RESUME_LINKS,
  RESUME_LOCATION,
  RESUME_SKILL_GROUPS,
  RESUME_EXPERIENCE,
  RESUME_EDUCATION,
} from "@/data/resume";
import styles from "./print.module.css";

/* The plain-document source for the downloadable PDF. Regenerate after
   editing data/resume.ts — see README ("Regenerating the resume PDF").
   Not linked from anywhere and excluded from indexing. */

export const metadata: Metadata = {
  title: "Katherine Tensfeldt — Resume",
  robots: { index: false, follow: false },
};

const titleCase = (s: string) =>
  s
    .toLowerCase()
    .replace(/(^|[\s&])[a-z]/g, (c) => c.toUpperCase())
    .replace(/\bAi\b/, "AI");

export default function ResumePrintPage() {
  return (
    <div className={styles.doc}>
      {/* The global theme paints body near-black; without this the PDF
          gets a dark band after the content ends on the last page. */}
      <style>{`body { background: #fff !important; }`}</style>
      <header className={styles.header}>
        <h1 className={styles.name}>Katherine Tensfeldt</h1>
        <p className={styles.contactLine}>{RESUME_LOCATION}</p>
        <p className={styles.contactLine}>
          {RESUME_LINKS.map((link, i) => (
            <span key={link.label}>
              {i > 0 && <span className={styles.contactSep}>•</span>}
              <a href={link.href}>{link.label}</a>
            </span>
          ))}
        </p>
      </header>

      <p className={styles.summary}>{RESUME_SUMMARY}</p>

      <section>
        <h2 className={styles.sectionTitle}>Skills</h2>
        {RESUME_SKILL_GROUPS.map(({ category, skills }) => (
          <p className={styles.skillRow} key={category}>
            <span className={styles.skillCategory}>
              {titleCase(category)}:
            </span>{" "}
            {skills.join(", ")}
          </p>
        ))}
      </section>

      <section>
        <h2 className={styles.sectionTitle}>Experience</h2>
        {RESUME_EXPERIENCE.map(({ period, role, org, bullets }) => (
          <div className={styles.entry} key={`${role}-${period}`}>
            <div className={styles.entryHeader}>
              <p className={styles.entryRole}>
                {role} <span className={styles.entryOrg}>— {org}</span>
              </p>
              <p className={styles.entryPeriod}>{period}</p>
            </div>
            <ul className={styles.bullets}>
              {bullets.map((bullet) => (
                <li key={bullet.slice(0, 32)}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section>
        <h2 className={styles.sectionTitle}>Education</h2>
        {RESUME_EDUCATION.map(({ period, credential, school, note }) => (
          <div className={styles.entry} key={credential}>
            <div className={styles.entryHeader}>
              <p className={styles.entryRole}>
                {credential}{" "}
                <span className={styles.entryOrg}>— {school}</span>
              </p>
              <p className={styles.entryPeriod}>{period}</p>
            </div>
            {note && <p className={styles.eduNote}>{note}</p>}
          </div>
        ))}
      </section>
    </div>
  );
}
