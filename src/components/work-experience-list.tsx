import { WORKS } from "@/lib/consts";
import { WorkExperienceCard } from "./work-experience-card";

export function WorkExperienceList() {
  return (
    <div className="border-my-accent-green flex flex-col overflow-hidden rounded-lg border px-2 lg:px-5">
      {WORKS.map((work, index) => (
        <WorkExperienceCard
          key={index}
          work={work}
        />
      ))}
    </div>
  );
}
