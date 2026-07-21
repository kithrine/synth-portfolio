import type { JSX } from "react";
import {
  RobotIllustration,
  ChalkboardIllustration,
  LaptopIllustration,
} from "@/components/icons/ExperienceIllustrations";

/* Content is the union of the public PDF resume
   (public/assets/docs/Tensfeldt_Resume_Public.pdf) and the site's
   experience timeline, so the styled page is at least as current as
   the download. */

export const RESUME_SUMMARY =
  "Fullstack developer that is truly driven by creating interactive, user-centered digital experiences. I love blending beautiful design with a solid back-end structure, while always keeping state management in mind. Seeking a challenging role where I can deepen my knowledge, expand my skills, and learn new technologies while contributing to a team.";

/* No email here on purpose — the public PDF resume doesn't list one
   either; people reach Kit through the site's contact form. */
export const RESUME_LINKS = [
  { label: "github.com/kithrine", href: "https://github.com/kithrine" },
  {
    label: "linkedin.com/in/kithrine",
    href: "https://www.linkedin.com/in/kithrine",
  },
  { label: "kithrine.vercel.app", href: "https://kithrine.vercel.app" },
] as const;

export const RESUME_LOCATION = "Greater Denver Area";

export type SkillGroup = { category: string; skills: string[] };

export const RESUME_SKILL_GROUPS: SkillGroup[] = [
  {
    category: "FRONTEND",
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Redux Toolkit",
      "Next.js",
      "Vite",
      "Three.js",
      "Recharts",
      "Phaser",
    ],
  },
  {
    category: "BACKEND",
    skills: [
      "Node.js",
      "Express",
      "Python",
      "Prisma",
      "PostgreSQL",
      "Mongoose",
      "MongoDB",
      "SQLite",
      "Zod",
      "Passport",
      "Socket.io",
      "Faker.js",
    ],
  },
  {
    category: "STYLING",
    skills: ["Tailwind", "DaisyUI", "Framer Motion", "Bootstrap", "React Bits"],
  },
  {
    category: "AI",
    skills: [
      "Claude Code",
      "Codex",
      "Prompt Engineering",
      "RAG",
      "Groq",
      "Ollama",
      "HuggingFace",
      "MstyStudio",
    ],
  },
  {
    category: "TESTING",
    skills: [
      "Vitest",
      "Playwright",
      "Jest",
      "React Testing Library",
      "TDD",
    ],
  },
  {
    category: "AUTH & PLATFORM",
    skills: [
      "Clerk",
      "NextAuth",
      "Neon",
      "Vercel",
      "Vercel Blob",
      "GitHub Actions",
    ],
  },
  { category: "VERSION CONTROL", skills: ["Git", "GitLab", "GitHub"] },
  { category: "WORKFLOW", skills: ["Agile", "Scrum", "CI/CD", "GitLab Issues"] },
];

export type ResumeEntry = {
  period: string;
  accent: "pink" | "cyan";
  role: string;
  org: string;
  bullets: string[];
  Illustration: () => JSX.Element;
};

export const RESUME_EXPERIENCE: ResumeEntry[] = [
  {
    period: "APR 2026 – PRESENT",
    accent: "pink",
    role: "Student Developer",
    org: "Next Chapter Coding Bootcamp",
    bullets: [
      "Building production applications in an AI-driven fullstack bootcamp centered on modern, AI-assisted engineering workflows.",
      "Shipped Nuzzle (nuzzledogadoption.us) — dog-adoption compatibility platform with a deterministic 100-point matching engine, confidence scoring, and AI-written explanations. Next.js, TypeScript, Prisma, Neon PostgreSQL, Clerk, Groq; tested with Vitest and Playwright.",
      "Shipped Project Nova (project-nova.app) — workflow-driven case-management platform for grant-funded transitional employment, with four role-scoped experiences, 800+ tests, automated WCAG AA contrast gates, and CI quality gates with auto-merge.",
      "Co-built DreamNet on a two-person team — social dream journal with a star economy, Bayesian leaderboard, and a Three.js 3D world; built the full main app (NextAuth, Prisma 7, PostgreSQL) against an API contract agreed up front.",
      "Built AOG Necrology — AI-assisted transcription pipeline (Python + Claude Code agents) that turned 70 years of scanned USMA memorial reports into a searchable database and static Next.js site.",
    ],
    Illustration: RobotIllustration,
  },
  {
    period: "JUL 2025 – FEB 2026",
    accent: "cyan",
    role: "Teaching Assistant",
    org: "Persevere",
    bullets: [
      "Supported a classroom of 20 students with debugging, pair programming, and technical questions.",
      "Built fullstack side projects: a todo & notes app with priority sorting and dynamic search, an AI chatbot interface inspired by MstyStudio, and a real-time Discord-style chat app with servers, channels, and messages.",
      "Created classroom wiki content (git and GitLab setup, curriculum references), configured student machines with local Ollama models, and helped organize code-a-thon teams.",
    ],
    Illustration: ChalkboardIllustration,
  },
  {
    period: "JUL 2024 – JUL 2025",
    accent: "pink",
    role: "Fullstack Developer",
    org: "Persevere",
    bullets: [
      "Leash & Learn Dog Training — fullstack project tracker with login and sign-up, dynamic services, 8-week training sessions by class type, an AI chatbot that maintains per-user history, class enrollment, and CRUD for services, roles, trainers, users, dogs, classes, and blogs.",
      "Donor Database — collaborated with a small development team on a donor-tracking database proof of concept; created the application's Style Guide.",
      "Practiced team git workflow end-to-end: issue tickets, branches, merge requests, and manual conflict resolution.",
      "Prompt engineering for text and image generation — crafting and iterating precise prompts to eliminate artifacts and get the desired output.",
    ],
    Illustration: LaptopIllustration,
  },
];

export type EducationEntry = {
  period: string;
  accent: "pink" | "cyan";
  credential: string;
  school: string;
  note?: string;
};

export const RESUME_EDUCATION: EducationEntry[] = [
  {
    period: "JUL 2025",
    accent: "pink",
    credential: "Persevere Full Stack Certification",
    school: "ASPC Perryville — Goodyear, AZ",
  },
  {
    period: "MAY 2014",
    accent: "cyan",
    credential: "A.A.S. Cyber Security",
    school: "Cochise College — Sierra Vista, AZ",
    note: "Member of Phi Theta Kappa Honor Society",
  },
  {
    period: "MAY 2012",
    accent: "pink",
    credential: "A.A.S. Network Technology",
    school: "Cochise College — Sierra Vista, AZ",
    note: "Member of Phi Theta Kappa Honor Society",
  },
];
