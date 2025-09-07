import { EducationHistory, Project, WorkExperience } from "./type";

export const PROFILE_PICTURE_URL = "/assets/profile.png";

export const EXTERNAL_LINKS = [
  {
    href: "https://www.linkedin.com/in/mnabilfikrisp/",
    imgSrc: "/assets/icons/linkedin.svg",
    imgAlt: "linkedin-icon",
  },
  {
    href: "https://github.com/nabilfikrisp",
    imgSrc: "/assets/icons/github-light.svg",
    imgAlt: "github-icon",
  },
] as const;

export const RESUME_LINK = "/assets/resume.pdf";

export const WORKS: WorkExperience[] = [
  {
    imageUrl: "/assets/experiences/works/octoscript.png",
    title: "Frontend Developer",
    company: "Octoscript",
    employmentType: "Freelance",
    date: "Oct 2024 - Feb 2025",
    description: "Built the frontend of Twostrap.id using Next.js",
    descriptionList: [
      "Delivered features on time with tight deadlines.",
      "Worked with the backend lead on API design, enabling seamless frontend integration.",
      "Created and documented complex React components, improving maintainability and team collaboration.",
    ],
  },
  {
    imageUrl: "/assets/experiences/works/dicoding.png",
    title: "React Mentor",
    company: "Dicoding Indonesia",
    employmentType: "Part-time",
    date: "Feb 2024 - Aug 2024",
    description: "Mentored a class of 23 React.JS students",
    descriptionList: [
      "Achieved an average student satisfaction rate of **4.8/5**.",
      "Awarded **Best Mentor** for **2** consecutive months, achieving one of the highest student satisfaction ratings among 20 mentors.",
      "Supported **3** students in achieving **Best Capstone Project** awards through consistent feedback.",
    ],
  },
  {
    imageUrl: "/assets/experiences/works/neospectra.png",
    title: "Full Stack Developer",
    company: "LKP Neo Spectra English",
    employmentType: "Freelance",
    date: "Dec 2023 - Aug 2024",
    description: "Built app.toeps.id using Next.js, NestJS, and PostgreSQL",
    descriptionList: [
      "Scaled to **22,000+ users**, averaging **1,500+** new sign-ups per month.",
      "Integrated in-app payments through Duitku, which automated **87%** of over **20,000** transactions.",
      "Automated certificate generation, saving **2+ hours** of manual work daily, enabling instant PDF access.",
      "Built a Safari-specific listening flow, bypassing audio autoplay restrictions for seamless tests across all users.",
    ],
  },
  {
    imageUrl: "/assets/experiences/works/wool.png",
    title: "Frontend Developer",
    company: "PT Docheck Bagi Indonesia",
    employmentType: "Intern",
    date: "Aug 2023 - Nov 2023",
    description:
      "Contributed to the development of the wool.id project using Next.js",
    descriptionList: [
      "Delivered tasks on time consistently.",
      "Participated in agile meetings such as sprint planning, standups, and retrospectives, following team workflows.",
      "Worked closely with backend and QA teams to resolve data issues and ensure bug-free releases.",
    ],
  },
  {
    imageUrl: "/assets/experiences/works/prabu2023.jpeg",
    title: "Full Stack Developer",
    company: "Universitas Padjadjaran",
    employmentType: "Contract",
    date: "Jul 2023 - Sep 2023",
    description:
      "Worked on Prabu 2023, an annual new student admission event at Padjadjaran University, using Laravel.",
    descriptionList: [
      "Built the client-side mini exam feature, reducing server load by offloading processing to the client-side.",
      "Collaborated with UNPAD devops to stress test the app, ensuring it could handle thousands concurrent users during peak times.",
    ],
  },
  {
    imageUrl: "/assets/experiences/works/neospectra.png",
    title: "Full Stack Developer",
    company: "LKP Neo Spectra English",
    employmentType: "Freelance",
    date: "Feb 2023 - May 2023",
    description: "Built v1 of toeps.id using Laravel and Firebase",
    descriptionList: [
      "Handled the frontend and backend of the app independently.",
      "Served **20,000+ users**. (Separately from the current version)",
    ],
  },
  {
    imageUrl: "/assets/experiences/works/febunpad.jpeg",
    title: "Full Stack Developer",
    company: "BEM Kema FEB Unpad",
    employmentType: "Freelance",
    date: "Jun 2022 - Sep 2022",
    description: "Developed a voting app for their award event.",
    descriptionList: ["Used by around 200 total users."],
  },
];

export const EDUCATIONS: EducationHistory[] = [
  {
    imageUrl: "/assets/experiences/educations/unpad.png",
    title: "Bachelor of Computer Science",
    institute: "Universitas Padjadjaran",
    date: "2020 - 2024",
  },
  {
    imageUrl: "/assets/experiences/educations/kampus-merdeka.jpeg",
    title: "Front-End Web and Back-End Developer at Dicoding",
    institute: "MSIB Kampus Merdeka",
    date: "2023",
  },
  {
    imageUrl: "/assets/experiences/educations/sman5.png",
    title: "High School Graduate",
    institute: "SMAN 5 Bandung",
    date: "2017 - 2020",
  },
];

export const SKILLS = [
  // Languages
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

  // Frontend
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

  // Backend
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

  // Database
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

  // Testing
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

  // Tools
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
