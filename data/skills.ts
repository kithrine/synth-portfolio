export type Skill = {
  name: string;
  deviconClass: string;
  /* Matches a .skill-icon color class in globals.css */
  color:
    | "cyan"
    | "blue"
    | "yellow"
    | "lemon"
    | "green"
    | "pink"
    | "orange"
    | "purple"
    | "vivid-purple"
    | "lavender";
};

export const SKILLS: Skill[] = [
  { name: "JavaScript", deviconClass: "devicon-javascript-plain", color: "yellow" },
  { name: "React", deviconClass: "devicon-react-original", color: "cyan" },
  { name: "Redux Toolkit", deviconClass: "devicon-redux-original", color: "vivid-purple" },
  { name: "Tailwind", deviconClass: "devicon-tailwindcss-original", color: "lavender" },
  { name: "Node.js", deviconClass: "devicon-nodejs-plain", color: "lemon" },
  { name: "MongoDB", deviconClass: "devicon-mongodb-plain", color: "green" },
  { name: "PostgreSQL", deviconClass: "devicon-postgresql-plain", color: "blue" },
  { name: "Socket.io", deviconClass: "devicon-socketio-original", color: "pink" },
  { name: "Git", deviconClass: "devicon-git-plain", color: "orange" },
  { name: "TypeScript", deviconClass: "devicon-typescript-plain", color: "blue" },
  { name: "Next.js", deviconClass: "devicon-nextjs-plain", color: "purple" },
  { name: "Python", deviconClass: "devicon-python-plain", color: "green" },
  { name: "Prisma", deviconClass: "devicon-prisma-original", color: "cyan" },
];
