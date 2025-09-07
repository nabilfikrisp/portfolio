import { AboutSection } from "@/components/sections/about.section";
import { ExperienceSection } from "@/components/sections/experience.section";
import { MainSection } from "@/components/sections/main.section";
import { ProjectsSection } from "@/components/sections/projects.section";
import { SkillsSection } from "@/components/sections/skills.section";

export default function Home() {
  return (
    <div className="space-y-8 py-8">
      <MainSection className="animate-spring-left" />
      <AboutSection className="animate-spring-right" />
      <ExperienceSection className="animate-spring-left" />
      <SkillsSection className="animate-spring-right" />
      <ProjectsSection className="animate-spring-left" />
    </div>
  );
}
