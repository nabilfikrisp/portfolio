import { renderStringWithBold } from "@/lib/render-utils";
import { WorkExperience } from "@/lib/type";
import { cn } from "@/lib/utils";

/**
 * WorkExperienceCard displays a single work experience entry.
 * Shows company logo, title, company, employment type, date, description, and bullet points.
 */
export function WorkExperienceCard({ work }: { work: WorkExperience }) {
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

        {/* Company logo image */}
        <img
          className="border-my-accent-green bg-my-background relative z-10 aspect-square h-16 w-16 overflow-hidden rounded border object-scale-down lg:h-20 lg:w-20"
          src={work.imageUrl}
          alt={work.company ? `${work.company} logo` : work.title}
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
          {work.title}
        </h2>

        {/* Company, Employment Type, Date */}
        <div className="text-my-paragraph/70 flex flex-col lg:flex-row lg:gap-2">
          <span>
            <span className="me-1 inline-block lg:hidden">-</span>
            {work.company}
          </span>
          <span className="hidden lg:block">|</span>
          <span>
            <span className="me-1 inline-block lg:hidden">-</span>
            {work.employmentType}
          </span>
          <span className="hidden lg:block">|</span>
          <span>
            <span className="me-1 inline-block lg:hidden">-</span>
            {work.date}
          </span>
        </div>

        {/* Description */}
        <p className="font-medium">{work.description}</p>

        {/* Bullet list of descriptions */}
        {work.descriptionList.length > 0 && (
          <ul className="text-my-paragraph/75 marker:text-my-accent-green list-outside list-disc space-y-1 pl-5 text-justify">
            {work.descriptionList.map((item, idx) => (
              <li key={idx}>
                {renderStringWithBold(item, {
                  className: "text-my-accent-orange",
                })}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
