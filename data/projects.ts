import type { StaticImageData } from "next/image";
import nuzzleImg from "@/public/assets/images/nuzzle-1.png";
import projectNovaImg from "@/public/assets/images/project-nova-1.png";
import dreamnetImg from "@/public/assets/images/dreamnet-2.png";
import aogImg from "@/public/assets/images/aog-1.png";
import leashAndLearnImg from "@/public/assets/images/leashandlearn-1.png";
import bubbleAiImg from "@/public/assets/images/BubbleAI-1.png";
import cookieImg from "@/public/assets/images/cookie-1.png";

export type TagColor =
  | "pink"
  | "blue"
  | "purple"
  | "cyan"
  | "green"
  | "orange"
  | "yellow"
  | "vivid-purple"
  | "lavender";

export type Project = {
  title: string;
  description: string;
  href: string;
  ariaLabel: string;
  /* Omit image (and set placeholderEmoji) to render a styled placeholder
     tile until a real screenshot is available. */
  image?: StaticImageData;
  imageAlt?: string;
  placeholderEmoji?: string;
  tags: { label: string; color: TagColor }[];
};

export const PROJECTS: Project[] = [
  {
    title: "Project Nova",
    description:
      "Workflow-driven case-management platform guiding people returning from incarceration through paid shelter-work placements — from application to permanent employment",
    href: "https://github.com/kithrine/project-nova",
    ariaLabel: "Project Nova — view on GitHub",
    image: projectNovaImg,
    imageAlt: "Project Nova homepage preview",
    tags: [
      { label: "Next.js 16", color: "pink" },
      { label: "TypeScript", color: "blue" },
      { label: "React", color: "cyan" },
      { label: "Prisma", color: "vivid-purple" },
      { label: "PostgreSQL", color: "green" },
      { label: "Clerk", color: "orange" },
      { label: "Tailwind 4", color: "lavender" },
      { label: "Zod", color: "yellow" },
      { label: "Vitest", color: "yellow" },
      { label: "Playwright", color: "purple" },
    ],
  },
  {
    title: "Nuzzle",
    description:
      "Dog-adoption compatibility platform that scores how well each adoptable dog fits your lifestyle, with confidence-aware matching and AI-written explanations",
    href: "https://github.com/kithrine/nuzzle",
    ariaLabel: "Nuzzle project — view on GitHub",
    image: nuzzleImg,
    imageAlt: "Nuzzle homepage preview",
    tags: [
      { label: "Next.js", color: "pink" },
      { label: "TypeScript", color: "blue" },
      { label: "Prisma", color: "vivid-purple" },
      { label: "PostgreSQL", color: "green" },
      { label: "Clerk", color: "orange" },
      { label: "Tailwind", color: "lavender" },
      { label: "Groq AI", color: "cyan" },
      { label: "Playwright", color: "yellow" },
    ],
  },
  {
    title: "DreamNet",
    description:
      "Social dream journal where dreams are shared, rated, and debated — with a star economy, Bayesian leaderboard, and a 3D dream world",
    href: "https://github.com/kithrine/dreamnet",
    ariaLabel: "DreamNet project — view on GitHub",
    image: dreamnetImg,
    imageAlt: "DreamNet dashboard preview",
    tags: [
      { label: "Next.js 16", color: "pink" },
      { label: "TypeScript", color: "blue" },
      { label: "React", color: "cyan" },
      { label: "Prisma 7", color: "vivid-purple" },
      { label: "PostgreSQL", color: "green" },
      { label: "NextAuth", color: "orange" },
      { label: "Tailwind", color: "lavender" },
      { label: "Three.js", color: "yellow" },
    ],
  },
  {
    title: "AOG Necrology",
    description:
      "Searchable memorial record of West Point graduates, 1870–1941 — an AI-assisted pipeline that transcribes the printed annual reports into a database, print-ready PDFs, and a static search site",
    href: "https://github.com/melonmelonz/aog-necrology",
    ariaLabel: "AOG Necrology project — view on GitHub",
    image: aogImg,
    imageAlt: "AOG Necrology memorial site preview",
    tags: [
      { label: "Next.js", color: "pink" },
      { label: "TypeScript", color: "blue" },
      { label: "Python", color: "green" },
      { label: "SQLite", color: "cyan" },
      { label: "Claude", color: "orange" },
      { label: "GitHub Pages", color: "lavender" },
    ],
  },
  {
    title: "Leash & Learn",
    description:
      "Full-stack dog training platform with role-based dashboards, class enrollment, blog, and Ollama AI chat",
    href: "https://github.com/kithrine/leash-and-learn",
    ariaLabel: "Leash and Learn project — view on GitHub",
    image: leashAndLearnImg,
    imageAlt: "Leash and Learn project preview",
    tags: [
      { label: "React", color: "pink" },
      { label: "Redux Toolkit", color: "vivid-purple" },
      { label: "Tailwind", color: "lavender" },
      { label: "MongoDB", color: "green" },
      { label: "Express", color: "orange" },
      { label: "Ollama AI", color: "cyan" },
      { label: "JWT Auth", color: "blue" },
      { label: "Framer Motion", color: "purple" },
    ],
  },
  {
    title: "Bubble AI",
    description:
      "Conversational AI app with multi-model support via Ollama, persistent chat history, custom titles, and configurable model instructions",
    href: "https://github.com/kithrine/bubble-ai",
    ariaLabel: "Bubble AI project — view on GitHub",
    image: bubbleAiImg,
    imageAlt: "Bubble AI project preview",
    tags: [
      { label: "React 19", color: "pink" },
      { label: "Redux Toolkit", color: "vivid-purple" },
      { label: "Tailwind", color: "lavender" },
      { label: "Node.js", color: "blue" },
      { label: "Express", color: "orange" },
      { label: "MongoDB", color: "green" },
      { label: "Ollama AI", color: "cyan" },
    ],
  },
  {
    title: "Cookie",
    description:
      "Full-stack task & notes app with priority levels, pinning, archiving, and category filtering",
    href: "https://github.com/kithrine/cookie",
    ariaLabel: "Cookie project — view on GitHub",
    image: cookieImg,
    imageAlt: "Cookie project preview",
    tags: [
      { label: "React 19", color: "pink" },
      { label: "Redux Toolkit", color: "vivid-purple" },
      { label: "Express", color: "orange" },
      { label: "MongoDB", color: "green" },
      { label: "Tailwind 4", color: "lavender" },
      { label: "DaisyUI", color: "purple" },
      { label: "Axios", color: "blue" },
      { label: "React Router", color: "cyan" },
    ],
  },
];
