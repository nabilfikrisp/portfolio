import { ExpereienceTabs } from "../experience-tabs";

export function ExperienceSection() {
  return (
    <section
      id="experience-section"
      className="my-max-width w-full space-y-4"
    >
      <h1 className="text-my-headline text-3xl font-semibold">Experience</h1>
      <ExpereienceTabs />
    </section>
  );
}
