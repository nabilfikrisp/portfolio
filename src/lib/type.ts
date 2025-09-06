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
export type SkillId = Skill["slug"];
export type SkillCategory = Skill["category"];

export type Project = {
  id: string;
  name: string;
  skills: SkillId[];
};

export const prjc: Project[] = [
  {
    id: "toeps",
    name: "toeps.id",
    skills: ["react"],
  },
];
