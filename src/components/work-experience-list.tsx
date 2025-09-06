import { WORKS } from "@/lib/consts";
import { cn } from "@/lib/utils";
import { WorkExperienceCard } from "./work-experience-card";

type WorkExperienceListProps = {
  className?: string;
};
export function WorkExperienceList({ className }: WorkExperienceListProps) {
  return (
    <div
      className={cn(
        "border-my-accent-green flex flex-col overflow-hidden rounded-lg border px-2 lg:px-5",
        className,
      )}
    >
      {WORKS.map((work, index) => (
        <WorkExperienceCard
          key={index}
          work={work}
        />
      ))}
    </div>
  );
}
