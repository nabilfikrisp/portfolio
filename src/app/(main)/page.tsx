import { AboutSection } from "@/components/sections/about.section";
import { ExperienceSection } from "@/components/sections/experience.section";
import { MainSection } from "@/components/sections/main.section";

export default function Home() {
  return (
    <div className="space-y-4 py-6 sm:py-8">
      <MainSection />
      <AboutSection />
      <ExperienceSection />
    </div>
  );
}
