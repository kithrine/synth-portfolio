import Image from "next/image";
import StarField from "@/components/StarField";
import heroBg from "@/public/assets/images/kit-hero.png";
import heroName from "@/public/assets/images/hero-font-crop.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="section hero-section"
      aria-labelledby="hero-heading"
    >
      {/* Background: real synthwave image + gradient overlay for text legibility */}
      <div className="hero-bg" aria-hidden="true">
        <Image
          src={heroBg}
          alt=""
          fill
          priority
          className="hero-bg-img"
          sizes="100vw"
        />
        <div className="hero-overlay"></div>
        {/* Star field sits on top as an atmosphere layer */}
        <StarField />
      </div>

      {/* Hero content — prompt anchored top-left, main copy below */}
      <div className="hero-content">
        <p className="hero-prompt">C:\&gt; Hello, World!</p>

        <div className="hero-main">
          <p className="hero-hi">HI, I&apos;M</p>
          <h1 id="hero-heading" className="hero-name-wrap">
            <Image
              src={heroName}
              alt="KIT"
              priority
              className="hero-name-img"
            />
          </h1>
          <h2 className="hero-title glow-cyan">
            AI COLLABORATOR &amp;
            <br />
            FULL STACK DEVELOPER
          </h2>
          <p className="hero-desc">
            I build engaging digital experiences
            <br />
            with a love for code and design.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-outline">
              VIEW MY WORK &nbsp;→
            </a>
            <a
              href="/assets/docs/Tensfeldt_Resume_Public.pdf"
              className="btn btn-solid"
              download
            >
              DOWNLOAD RESUME &nbsp;↓
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
