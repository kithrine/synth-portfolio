import type { StaticImageData } from "next/image";
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
  image: StaticImageData;
  imageAlt: string;
  tags: { label: string; color: TagColor }[];
};

export const PROJECTS: Project[] = [
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
