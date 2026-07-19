/* Real tracks for the Now Playing widget. All by Nihilore (Matt Harris),
   nihilore.com, licensed CC BY 4.0 — attribution is rendered permanently
   in the widget's credit line. Files re-encoded to 128kbps for the web
   (adaptation permitted by the license). */

export type Track = { title: string; src: string };

export const ARTIST = {
  name: "NIHILORE",
  url: "http://www.nihilore.com/synthwave",
  license: "CC BY 4.0",
  licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
};

export const PLAYLIST: Track[] = [
  { title: "Dream Sunlight", src: "/assets/audio/Dream-Sunlight.mp3" },
  { title: "Magenta", src: "/assets/audio/Magenta.mp3" },
  { title: "Motion Blur", src: "/assets/audio/Motion-Blur.mp3" },
  { title: "Noctivagant", src: "/assets/audio/Noctivagant.mp3" },
];
