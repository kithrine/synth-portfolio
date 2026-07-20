import { SKILLS } from "@/data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="section skills-section"
      aria-labelledby="skills-heading"
    >
      <div className="section-card">
        <h2 id="skills-heading" className="section-title glow-pink">
          SKILLS
        </h2>
        <div className="skills-grid" role="list">
          {SKILLS.map(({ name, deviconClass, Icon, color }) => (
            <div className="skill-item" role="listitem" key={name}>
              <div className={`skill-icon ${color}`}>
                {Icon ? <Icon /> : <i className={deviconClass}></i>}
              </div>
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
