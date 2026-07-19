import type { JSX } from "react";
import {
  RobotIllustration,
  ChalkboardIllustration,
  LaptopIllustration,
  ShieldIllustration,
} from "@/components/icons/ExperienceIllustrations";

export type ExperienceItem = {
  period: string;
  /* Drives the year/dot/illustration/role color classes */
  accent: "pink" | "cyan";
  role: string;
  company: string;
  description: string;
  Illustration: () => JSX.Element;
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    period: "APR 2026 – PRESENT",
    accent: "pink",
    role: "Next Chapter Coding Bootcamp",
    company: "Student Developer",
    description:
      "AI-driven fullstack bootcamp. Building with React, Python, Node.js, and PostgreSQL while integrating prompt engineering concepts.",
    Illustration: RobotIllustration,
  },
  {
    period: "JUL 2025 – FEB 2026",
    accent: "cyan",
    role: "Teaching Assistant",
    company: "Persevere",
    description:
      "Supported 20 students with debugging, pair programming, and Git setup. Created curriculum wiki content and configured Ollama models for the classroom.",
    Illustration: ChalkboardIllustration,
  },
  {
    period: "JUL 2024 – JUL 2025",
    accent: "pink",
    role: "Fullstack Developer",
    company: "Persevere",
    description:
      "Built MERN stack apps with AI chatbot integration, including a dog training tracker. Collaborated on a donor database using Agile/Git. Earned Full Stack Certification July 2025.",
    Illustration: LaptopIllustration,
  },
  {
    period: "MAY 2014",
    accent: "cyan",
    role: "A.A.S. Cyber Security",
    company: "Cochise College",
    description:
      "Associates in Cyber Security. Member of Phi Theta Kappa Honor Society. Built foundational knowledge in networking, security, and systems.",
    Illustration: ShieldIllustration,
  },
];
