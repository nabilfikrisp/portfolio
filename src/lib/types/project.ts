import type { SkillId } from "./skill";

export type Project = {
  id: string;
  title: string;
  skills: SkillId[];
  description: string;
  imageUrl?: string;
  liveUrl?: string;
  sourceCodeUrl?: string;
};
