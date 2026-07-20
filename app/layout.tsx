import type { Metadata } from "next";
import { Inter, Press_Start_2P, Share_Tech_Mono } from "next/font/google";
// devicon-base.css (not devicon.min.css): same @font-face + glyph classes,
// but without the UTF-8 BOM that Turbopack's CSS parser rejects.
import "devicon/devicon-base.css";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

/* adjustFontFallback: false on the two display fonts so glyphs they
   lack (→ ↓ ✦) fall through to the system monospace font, exactly as
   the vanilla font stacks did — the synthetic Arial-metric fallback
   would render those glyphs with different widths. */
const pressStart2P = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-press-start-2p",
  display: "swap",
  adjustFontFallback: false,
});

const shareTechMono = Share_Tech_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-share-tech-mono",
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "KIT — Developer & Designer",
  description:
    "Katherine Tensfeldt — AI Collaborator & Full Stack Developer. Retro-futuristic developer portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${pressStart2P.variable} ${shareTechMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
