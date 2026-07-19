import SiteShell from "@/components/SiteShell";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";

/* Remaining placeholder sections are replaced as they are ported. */
export default function Home() {
  return (
    <SiteShell>
      <Hero />
      <About />
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
