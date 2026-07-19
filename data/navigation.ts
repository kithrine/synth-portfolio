export const NAV_ITEMS = [
  { id: "home", label: "HOME" },
  { id: "about", label: "ABOUT" },
  { id: "skills", label: "SKILLS" },
  { id: "experience", label: "RESUME" },
  { id: "projects", label: "PROJECTS" },
  { id: "contact", label: "CONTACT" },
] as const;

export type SectionId = (typeof NAV_ITEMS)[number]["id"];

/* Module-level constant so effects depending on it never re-run. */
export const SECTION_IDS: readonly SectionId[] = NAV_ITEMS.map(
  (item) => item.id,
);
