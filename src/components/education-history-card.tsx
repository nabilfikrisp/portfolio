import { EducationHistory } from "@/lib/type";
import { cn } from "@/lib/utils";

export function EducationHistoryCard({
  education,
}: {
  education: EducationHistory;
}) {
  return (
    <div className="group flex gap-5">
      {/* --- IMAGE & VERTICAL LINE SECTION --- */}
      <div
        className={cn("relative py-2", "group-first:pt-4", "group-last:pb-4")}
      >
        {/* Vertical timeline line */}
        <div
          className={cn(
            "bg-my-accent-green absolute inset-y-0 left-1/2 z-0 w-[2px] -translate-x-1/2",
            "group-first:top-1/2",
            "group-last:bottom-1/2",
          )}
        />

        {/* Institute logo image */}
        <img
          className="border-my-accent-green bg-my-background relative z-10 aspect-square h-16 w-16 overflow-hidden rounded border object-scale-down lg:h-20 lg:w-20"
          src={education.imageUrl}
          title={education.institute}
          alt={
            education.institute
              ? `${education.institute} logo`
              : education.title
          }
        />
      </div>

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
        <div className="text-my-paragraph/70 flex flex-col lg:flex-row lg:gap-2">
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
