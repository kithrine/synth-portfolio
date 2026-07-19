"use client";

import { useState } from "react";
import { SECTION_IDS, type SectionId } from "@/data/navigation";
import { useScrollSpy } from "@/lib/hooks/useScrollSpy";
import { useScrollReveal } from "@/lib/hooks/useScrollReveal";
import Sidebar from "./Sidebar";
import MobileMenuButton from "./MobileMenuButton";

/**
 * Client orchestrator for the whole page. Owns the two pieces of UI state
 * (mobile drawer open/closed, active section from scroll position); the
 * sections themselves pass through as server-rendered children.
 */
export default function SiteShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useScrollSpy(SECTION_IDS) as SectionId;
  useScrollReveal();

  // window is only touched inside event handlers, so SSR never sees it.
  const closeOnMobile = () => {
    if (window.innerWidth <= 768) setMenuOpen(false);
  };

  return (
    <>
      <Sidebar
        open={menuOpen}
        activeSection={activeSection}
        onNavClick={closeOnMobile}
      />
      <MobileMenuButton
        open={menuOpen}
        onToggle={() => setMenuOpen((o) => !o)}
      />
      <main
        className="main-content"
        id="main-content"
        onClick={() => {
          if (menuOpen) closeOnMobile();
        }}
      >
        {children}
      </main>
    </>
  );
}
