import type { Metadata } from "next";
import Link from "next/link";
import StarField from "@/components/StarField";
import {
  RESUME_SUMMARY,
  RESUME_LINKS,
  RESUME_SKILL_GROUPS,
  RESUME_EXPERIENCE,
  RESUME_EDUCATION,
} from "@/data/resume";

export const metadata: Metadata = {
  title: "Resume — KT",
  description:
    "Katherine Tensfeldt — Fullstack Developer. Experience, skills, and education.",
};

export default function ResumePage() {
  return (
    <div className="resume-page">
      {/* Fixed star backdrop, behind everything */}
      <div className="resume-stars" aria-hidden="true">
        <StarField yMax={100} />
      </div>

      <header className="resume-topbar">
        <Link href="/" className="resume-back">
          ← BACK TO HOME
        </Link>
        <a
          href="/assets/docs/Tensfeldt_Resume_Public.pdf"
          className="btn btn-solid"
          download
        >
          DOWNLOAD RESUME &nbsp;↓
        </a>
      </header>

      <main className="resume-main">
        <section className="section-card resume-header" aria-label="Contact">
          <h1 className="resume-name glow-pink">KATHERINE TENSFELDT</h1>
          <p className="resume-tagline">
            FULLSTACK DEVELOPER ✦ GREATER PHOENIX AREA
          </p>
          <ul className="resume-links" role="list">
            {RESUME_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <p className="resume-summary">{RESUME_SUMMARY}</p>
        </section>

        <section className="section-card" aria-labelledby="resume-skills">
          <h2 id="resume-skills" className="section-title glow-pink">
            SKILLS
          </h2>
          <div className="resume-skill-groups">
            {RESUME_SKILL_GROUPS.map(({ category, skills }) => (
              <div className="resume-skill-group" key={category}>
                <h3>{category}</h3>
                <div className="resume-skill-tags">
                  {skills.map((skill) => (
                    <span className="tag cyan" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section-card" aria-labelledby="resume-experience">
          <h2 id="resume-experience" className="section-title glow-pink">
            EXPERIENCE
          </h2>
          <div className="resume-entries">
            {RESUME_EXPERIENCE.map(
              ({ period, accent, role, org, bullets, Illustration }) => (
                <article className="resume-entry" key={`${role}-${period}`}>
                  <div
                    className={`timeline-illus ${accent}`}
                    aria-hidden="true"
                  >
                    <Illustration />
                  </div>
                  <div className="resume-entry-body">
                    <p className={`resume-period ${accent}`}>{period}</p>
                    <h3 className="resume-role">{role}</h3>
                    <p className="resume-org">{org}</p>
                    <ul className="resume-bullets" role="list">
                      {bullets.map((bullet) => (
                        <li key={bullet.slice(0, 32)}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ),
            )}
          </div>
        </section>

        <section className="section-card" aria-labelledby="resume-education">
          <h2 id="resume-education" className="section-title glow-pink">
            EDUCATION
          </h2>
          <div className="resume-entries">
            {RESUME_EDUCATION.map(
              ({ period, accent, credential, school, note }) => (
                <article
                  className="resume-entry resume-entry-education"
                  key={credential}
                >
                  <div className="resume-entry-body">
                    <p className={`resume-period ${accent}`}>{period}</p>
                    <h3 className="resume-role">{credential}</h3>
                    <p className="resume-org">{school}</p>
                    {note && <p className="resume-note">{note}</p>}
                  </div>
                </article>
              ),
            )}
          </div>
        </section>

        <footer className="resume-footer" aria-hidden="true">
          <p className="footer-tagline">✦ CODE. CREATE. INSPIRE. REPEAT. ✦</p>
        </footer>
      </main>
    </div>
  );
}
