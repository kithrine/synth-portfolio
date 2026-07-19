import Image from "next/image";
import { PROJECTS } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="section projects-section"
      aria-labelledby="proj-heading"
    >
      <div className="section-card">
        <div className="projects-header">
          <h2 id="proj-heading" className="section-title glow-pink">
            PROJECTS
          </h2>
          <a
            href="https://github.com/kithrine"
            target="_blank"
            rel="noopener noreferrer"
            className="view-all-link"
          >
            VIEW ALL PROJECTS &nbsp;→
          </a>
        </div>
        <div className="projects-grid">
          {PROJECTS.map(
            ({
              title,
              description,
              href,
              ariaLabel,
              image,
              imageAlt,
              placeholderEmoji,
              tags,
            }) => (
              <a
                className="project-card"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={ariaLabel}
                key={title}
              >
                <div
                  className={`project-img-wrap${image ? "" : " img-placeholder"}`}
                >
                  {image ? (
                    <Image
                      src={image}
                      alt={imageAlt ?? ""}
                      sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
                    />
                  ) : (
                    <span className="proj-placeholder-emoji" aria-hidden="true">
                      {placeholderEmoji}
                    </span>
                  )}
                </div>
                <div className="project-info">
                  <h3 className="project-title">{title}</h3>
                  <p className="project-desc">{description}</p>
                  <div className="project-tags">
                    {tags.map(({ label, color }) => (
                      <span className={`tag ${color}`} key={label}>
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
