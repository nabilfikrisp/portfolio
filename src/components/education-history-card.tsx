import { EducationHistory } from "@/lib/types";
import { cn } from "@/lib/utils";
import { ExperienceImage } from "./experience-image";

export function EducationHistoryCard({
  education,
}: {
  education: EducationHistory;
}) {
  return (
    <div className="group flex gap-5">
      {/* --- IMAGE & VERTICAL LINE SECTION --- */}
      <ExperienceImage
        imageUrl={education.imageUrl}
        name={education.institute}
        fallbackTitle={education.title}
      />

      {/* --- DESCRIPTION SECTION --- */}
      <div
        className={cn(
          "gap flex flex-1 flex-col py-2",
          "group-first:pt-4",
          "group-last:pb-4",
        )}
      >
        {/* Title */}
        <h2 className="text-my-accent-green text-xl font-semibold">
          {education.title}
        </h2>

        {/* Institute, Date */}
        <div className="text-my-paragraph flex flex-col font-medium lg:flex-row lg:gap-2">
          <span>
            <span className="me-1 inline-block lg:hidden">-</span>
            {education.institute}
          </span>
          <span className="hidden lg:block">|</span>
          <span>
            <span className="me-1 inline-block lg:hidden">-</span>
            {education.date}
          </span>
        </div>
      </div>
    </div>
  );
}
