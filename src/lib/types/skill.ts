export type SkillCategory =
  | "language"
  | "frontend"
  | "backend"
  | "database"
  | "testing"
  | "tool";

export type Skill = {
  slug: string;
  name: string;
  iconUrl: string;
  category: SkillCategory;
};

export type SkillId = Skill["slug"] | "more";
