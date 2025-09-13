import { renderStringWithBold } from "@/lib/render-utils";
import { WorkExperience } from "@/lib/type";
import { cn } from "@/lib/utils";
import { ExperienceImage } from "./experience-image";

/**
 * WorkExperienceCard displays a single work experience entry.
 * Shows company logo, title, company, employment type, date, description, and bullet points.
 */
export function WorkExperienceCard({ work }: { work: WorkExperience }) {
  return (
    <div className="group flex gap-5">
      {/* --- IMAGE & VERTICAL LINE SECTION --- */}
      <ExperienceImage
        imageUrl={work.imageUrl}
        name={work.company}
        fallbackTitle={work.title}
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
          {work.title}
        </h2>

        {/* Company, Employment Type, Date */}
        <div className="text-my-paragraph flex flex-col font-medium lg:flex-row lg:gap-2">
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
        <p className="text-my-paragraph-secondary font-medium">
          {work.description}
        </p>

        {/* Bullet list of descriptions */}
        {work.descriptionList.length > 0 && (
          <ul className="text-my-paragraph-secondary marker:text-my-accent-green list-outside list-disc space-y-1 pl-5 text-justify">
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
