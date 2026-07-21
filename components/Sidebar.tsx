import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_ITEMS, type SectionId } from "@/data/navigation";
import { NAV_ICONS, ResumeIcon } from "./icons/NavIcons";
import { GitHubIcon, LinkedInIcon } from "./icons/SocialIcons";
import NowPlaying from "./NowPlaying";
import logoImg from "@/public/assets/images/sidenav-kit.png";

type SidebarProps = {
  open: boolean;
  activeSection: SectionId;
  onNavClick: () => void;
};

export default function Sidebar({
  open,
  activeSection,
  onNavClick,
}: SidebarProps) {
  return (
    <aside
      className={`sidebar${open ? " open" : ""}`}
      id="sidebar"
      aria-label="Site navigation"
    >
      {/* Logo */}
      <div className="sidebar-logo" aria-label="KT logo">
        <Image src={logoImg} alt="KIT" className="logo-img" sizes="80px" />
        <p className="logo-sub">FULLSTACK DEVELOPER</p>
      </div>

      {/* Primary nav */}
      <nav className="sidebar-nav" aria-label="Primary navigation">
        <ul role="list">
          {NAV_ITEMS.map(({ id, label }) => {
            const Icon = NAV_ICONS[id];
            return (
              <Fragment key={id}>
                <li>
                  <a
                    href={`#${id}`}
                    className={`nav-link${activeSection === id ? " active" : ""}`}
                    data-section={id}
                    onClick={onNavClick}
                  >
                    <span className="nav-icon" aria-hidden="true">
                      <Icon />
                    </span>
                    {label}
                  </a>
                </li>
                {/* RESUME routes to its own page, so it lives outside the
                    scroll-spy sections — pinned at the very bottom. */}
                {id === "contact" && (
                  <li>
                    <Link
                      href="/resume"
                      className="nav-link"
                      onClick={onNavClick}
                    >
                      <span className="nav-icon" aria-hidden="true">
                        <ResumeIcon />
                      </span>
                      RESUME
                    </Link>
                  </li>
                )}
              </Fragment>
            );
          })}
        </ul>
      </nav>

      {/* Now Playing cassette widget */}
      <NowPlaying activeSection={activeSection} />

      {/* Social icons */}
      <div className="sidebar-socials" aria-label="Social links">
        <a
          href="https://github.com/kithrine"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="social-github"
        >
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/kithrine"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="social-linkedin"
        >
          <LinkedInIcon />
        </a>
        {/* Instagram hidden for now — uncomment to bring it back.
        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="social-instagram"
        >
          <InstagramIcon />
        </a>
        */}
        {/* Email hidden — visitors reach Kit through the contact form
            instead (keeps the address out of the page source). To bring
            the icon back, fill in the mailto address and uncomment.
        <a
          href="mailto:"
          aria-label="Email"
          className="social-email"
        >
          <EmailIcon />
        </a>
        */}
      </div>

      {/* Animated status block */}
      <div className="sidebar-status" aria-label="Current status">
        <p className="status-text">
          &gt; STATUS:
          <br />
          BUILDING THE
          <br />
          FUTURE_
        </p>
      </div>
    </aside>
  );
}
