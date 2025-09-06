import { AboutSection } from "@/components/sections/about.section";
import { ExperienceSection } from "@/components/sections/experience.section";
import { MainSection } from "@/components/sections/main.section";
import { SkillsSection } from "@/components/sections/skills.section";

export default function Home() {
  return (
    <div className="space-y-4 py-6 sm:py-8">
      <MainSection className="animate-spring-left" />
      <AboutSection className="animate-spring-right" />
      <ExperienceSection className="animate-spring-left" />
      <SkillsSection className="animate-spring-right" />
    </div>
  );
}
