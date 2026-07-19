import { EXPERIENCE } from "@/data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="section experience-section"
      aria-labelledby="exp-heading"
    >
      <div className="section-card">
        <h2 id="exp-heading" className="section-title glow-pink">
          EXPERIENCE
        </h2>
        <div className="timeline">
          {EXPERIENCE.map(
            ({ period, accent, role, company, description, Illustration }) => (
              <div className="timeline-item" key={`${role}-${period}`}>
                <div className={`timeline-year ${accent}`}>{period}</div>
                <div
                  className={`timeline-dot${accent === "pink" ? " dot-pink" : ""}`}
                ></div>
                <div className="timeline-content">
                  <div className={`timeline-illus ${accent}`} aria-hidden="true">
                    <Illustration />
                  </div>
                  <div className="timeline-body">
                    <h3
                      className={`timeline-role${accent === "cyan" ? " cyan" : ""}`}
                    >
                      {role}
                    </h3>
                    <p className="timeline-company">{company}</p>
                    <p className="timeline-desc">{description}</p>
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
