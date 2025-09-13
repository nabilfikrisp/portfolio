import { SKILLS } from "./consts";

export type WorkExperience = {
  imageUrl: string;
  title: string;
  company: string;
  employmentType: string;
  date: string;
  description: string;
  workLink?: string;
  companyLink?: string;
  descriptionList: string[];
};

export type EducationHistory = {
  imageUrl: string;
  title: string;
  institute: string;
  date: string;
};

export type Skill = (typeof SKILLS)[number];
export type SkillId = Skill["slug"] | "more";
export type SkillCategory = Skill["category"];

export type Project = {
  id: string;
  title: string;
  skills: SkillId[];
  description: string;
  imageUrl?: string;
  liveUrl?: string;
  sourceCodeUrl?: string;
};

export type Author = {
  name: string;
  picture: string;
};

export type Post = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  author: Author;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
  preview?: boolean;
};
