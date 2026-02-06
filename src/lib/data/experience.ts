import type { EducationHistory, WorkExperience } from "../types/experience";

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
