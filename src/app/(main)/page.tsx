import { AboutSection } from "@/components/sections/about.section";
import { MainSection } from "@/components/sections/main.section";

export default function Home() {
  return (
    <div className="my-max-width w-full space-y-4 py-6 sm:py-8">
      <MainSection />
      <AboutSection />
    </div>
  );
}
