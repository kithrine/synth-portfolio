import SiteShell from "@/components/SiteShell";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";

/* Remaining placeholder sections are replaced as they are ported. */
export default function Home() {
  return (
    <SiteShell>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <footer id="contact" className="section">
        <h2 className="section-title">CONTACT</h2>
      </footer>
    </SiteShell>
  );
}
