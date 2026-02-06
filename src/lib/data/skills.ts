import type { Skill } from "../types/skill";

export const SKILLS: Skill[] = [
  {
    slug: "typescript",
    name: "TypeScript",
    iconUrl: "/assets/icons/skills/typescript.svg",
    category: "language",
  },
  {
    slug: "javascript",
    name: "JavaScript",
    iconUrl: "/assets/icons/skills/javascript.svg",
    category: "language",
  },
  {
    slug: "python",
    name: "Python",
    iconUrl: "/assets/icons/skills/python.svg",
    category: "language",
  },
  {
    slug: "react",
    name: "React",
    iconUrl: "/assets/icons/skills/react.svg",
    category: "frontend",
  },
  {
    slug: "nextjs",
    name: "Next.js",
    iconUrl: "/assets/icons/skills/nextjs.svg",
    category: "frontend",
  },
  {
    slug: "tailwindcss",
    name: "Tailwind CSS",
    iconUrl: "/assets/icons/skills/tailwindcss.svg",
    category: "frontend",
  },
  {
    slug: "tanstack-query",
    name: "TanStack Query",
    iconUrl: "/assets/icons/skills/tanstack.svg",
    category: "frontend",
  },
  {
    slug: "expressjs",
    name: "Express.js",
    iconUrl: "/assets/icons/skills/expressjs.svg",
    category: "backend",
  },
  {
    slug: "nestjs",
    name: "NestJS",
    iconUrl: "/assets/icons/skills/nestjs.svg",
    category: "backend",
  },
  {
    slug: "postgresql",
    name: "PostgreSQL",
    iconUrl: "/assets/icons/skills/postgresql.svg",
    category: "database",
  },
  {
    slug: "prisma",
    name: "Prisma",
    iconUrl: "/assets/icons/skills/prisma.svg",
    category: "database",
  },
  {
    slug: "mongodb",
    name: "MongoDB",
    iconUrl: "/assets/icons/skills/mongodb.svg",
    category: "database",
  },
  {
    slug: "jest",
    name: "Jest",
    iconUrl: "/assets/icons/skills/jest.svg",
    category: "testing",
  },
  {
    slug: "cypress",
    name: "Cypress",
    iconUrl: "/assets/icons/skills/cypress.svg",
    category: "testing",
  },
  {
    slug: "playwright",
    name: "Playwright",
    iconUrl: "/assets/icons/skills/playwright.svg",
    category: "testing",
  },
  {
    slug: "vitest",
    name: "Vitest",
    iconUrl: "/assets/icons/skills/vitest.svg",
    category: "testing",
  },
  {
    slug: "git",
    name: "Git",
    iconUrl: "/assets/icons/skills/git.svg",
    category: "tool",
  },
  {
    slug: "figma",
    name: "Figma",
    iconUrl: "/assets/icons/skills/figma.svg",
    category: "tool",
  },
] as const;
