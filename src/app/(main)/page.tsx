import { AboutSection } from "@/components/sections/about.section";
import { ExperienceSection } from "@/components/sections/experience.section";
import { MainSection } from "@/components/sections/main.section";
import { ProjectsSection } from "@/components/sections/projects.section";
import { SkillsSection } from "@/components/sections/skills.section";

export default function Home() {
  return (
    <div className="space-y-8 py-8">
      <MainSection className="motion-safe:animate-spring-left" />
      <AboutSection className="motion-safe:animate-spring-right" />
      <ExperienceSection className="motion-safe:animate-spring-left" />
      <SkillsSection className="motion-safe:animate-spring-right" />
      <ProjectsSection className="motion-safe:animate-spring-left" />
    </div>
  );
}
