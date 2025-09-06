import { EDUCATIONS } from "@/lib/consts";
import { EducationHistoryCard } from "./education-history-card";

export function EducationHistoryList() {
  return (
    <div className="border-my-accent-green flex flex-col overflow-hidden rounded-lg border px-2 lg:px-5">
      {EDUCATIONS.map((education, index) => (
        <EducationHistoryCard
          key={index}
          education={education}
        />
      ))}
    </div>
  );
}
