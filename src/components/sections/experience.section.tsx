import { cn } from "@/lib/utils";
import { ExpereienceTabs } from "../experience-tabs";

type ExperienceSectionProps = {
  className?: string;
};
export function ExperienceSection({ className }: ExperienceSectionProps) {
  return (
    <section
      id="experience-section"
      className={cn("max-width-app w-full space-y-4", className)}
    >
      <h1 className="text-my-headline text-3xl font-semibold">Experience</h1>
      <ExpereienceTabs />
    </section>
  );
}
