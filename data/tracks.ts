import type { SectionId } from "./navigation";

/* Fake "Now Playing" track per section, shown in the sidebar cassette widget. */
export const TRACK_MAP: Record<SectionId, string> = {
  home: "Midnight Drive",
  about: "Neon Daydream",
  skills: "Synthwave Grid",
  experience: "Retrograde",
  projects: "Build Mode",
  contact: "Outrun Tonight",
};
