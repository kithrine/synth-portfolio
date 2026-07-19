import SiteShell from "@/components/SiteShell";

/* Placeholder sections — replaced by the real section components
   as they are ported. Ids must exist for the scroll-spy to work. */
export default function Home() {
  return (
    <SiteShell>
      <section id="home" className="section" aria-labelledby="hero-heading">
        <h1 id="hero-heading" className="section-title">
          HOME
        </h1>
      </section>
      <section id="about" className="section">
        <h2 className="section-title">ABOUT</h2>
      </section>
      <section id="skills" className="section">
        <h2 className="section-title">SKILLS</h2>
      </section>
      <section id="experience" className="section">
        <h2 className="section-title">EXPERIENCE</h2>
      </section>
      <section id="projects" className="section">
        <h2 className="section-title">PROJECTS</h2>
      </section>
      <footer id="contact" className="section">
        <h2 className="section-title">CONTACT</h2>
      </footer>
    </SiteShell>
  );
}
