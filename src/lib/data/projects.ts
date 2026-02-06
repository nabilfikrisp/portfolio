import type { Project } from "../types/project";

export const PROJECTS: Project[] = [
  {
    id: "toeps",
    title: "toeps.id",
    description: "My Work for LKP Neo Spectra English",
    imageUrl: "/assets/projects/toeps.png",
    liveUrl: "https://app.toeps.id",
    skills: ["react", "typescript", "tailwindcss", "nestjs", "postgresql"],
  },
  {
    id: "twostrap",
    title: "Twostrap.id",
    description: "My Work for Octoscript",
    imageUrl: "/assets/projects/twostrap.png",
    liveUrl: "https://twostrap.id",
    skills: ["react", "typescript", "tailwindcss", "nextjs"],
  },
  {
    id: "fullstack-open",
    title: "Fullstack Open Course",
    description:
      "My repository for the exercises from the Fullstack Open course by University of Helsinki",
    sourceCodeUrl: "https://github.com/nabilfikrisp/fullstackopen-helinski",
    skills: [
      "react",
      "typescript",
      "tailwindcss",
      "expressjs",
      "mongodb",
      "jest",
      "playwright",
      "vitest",
      "cypress",
      "more",
    ],
  },
  {
    id: "yoga-gnn",
    title: "Yoga GNN",
    description:
      "Graph Neural Network for Yoga Image Classification. This project is a part of my thesis in University",
    imageUrl: "/assets/projects/yoga-gnn.png",

    liveUrl: "https://yoga-gnn-nabilfikrisp.vercel.app/",
    sourceCodeUrl: "https://github.com/nabilfikrisp/yoga-gnn-app",
    skills: ["react", "typescript", "tailwindcss", "python"],
  },
  {
    id: "tripl",
    title: "Tripl",
    description:
      "Travel destination and planner app for Bandung City. This project is a part of my final project in University.",
    imageUrl: "/assets/projects/tripl.png",
    liveUrl: "https://tripl.vercel.app/",
    sourceCodeUrl: "https://github.com/nabilfikrisp/ppl2-tripl",
    skills: ["react", "javascript", "expressjs", "jest", "mongodb"],
  },
  {
    id: "dicoding-forum",
    title: "Dicoding Forum",
    description:
      "A forum app built with React and TypeScript. This project is part of the React Developer Expert path in Dicoding.",
    imageUrl: "/assets/projects/dicoding-forum.png",
    liveUrl: "https://forum-micanskuy.vercel.app/",
    sourceCodeUrl: "https://github.com/nabilfikrisp/dicoding-forum-app",
    skills: ["react", "typescript", "tailwindcss", "cypress"],
  },
];
