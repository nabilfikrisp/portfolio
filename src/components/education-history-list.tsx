import { EDUCATIONS } from "@/lib/consts";
import { cn } from "@/lib/utils";
import { EducationHistoryCard } from "./education-history-card";

type EducationHistoryListProps = {
  className?: string;
};
export function EducationHistoryList({ className }: EducationHistoryListProps) {
  return (
    <div
      className={cn(
        "border-my-accent-green flex flex-col overflow-hidden rounded-lg border px-2 lg:px-5",
        className,
      )}
    >
      {EDUCATIONS.map((education, index) => (
        <EducationHistoryCard
          key={index}
          education={education}
        />
      ))}
    </div>
  );
}
