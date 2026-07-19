import Image from "next/image";
import chibiImg from "@/public/assets/images/chibi-pixel.png";
import gameboyImg from "@/public/assets/images/gameboy.png";

export default function About() {
  return (
    <section
      id="about"
      className="section about-section"
      aria-labelledby="about-heading"
    >
      <div className="section-card">
        <div className="about-img-wrap">
          <Image
            src={chibiImg}
            alt="Pixel art chibi of Kit at a computer"
            className="about-img"
            sizes="250px"
          />
        </div>
        <div className="about-text">
          <h2 id="about-heading" className="section-title glow-pink">
            ABOUT ME
          </h2>
          <p>
            I’m a developer who loves combining creativity and code to build
            interactive experiences that feel both functional and visually
            engaging. When I’m not coding, I’m usually experimenting with new
            UI ideas or learning new technologies.
          </p>
          <a href="#contact" className="btn btn-outline">
            MORE ABOUT ME &nbsp;→
          </a>
        </div>
        {/* Gameboy decoration */}
        <div className="gameboy-deco" aria-hidden="true">
          <Image
            src={gameboyImg}
            alt=""
            className="gameboy-img"
            sizes="350px"
          />
        </div>
      </div>
    </section>
  );
}
