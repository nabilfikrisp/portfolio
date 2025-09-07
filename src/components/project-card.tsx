import { Project } from "@/lib/type";
import { cn } from "@/lib/utils";
import { CodeIcon, ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

// Constant for skills icon path to avoid repetition and ease updates
const SKILLS_ICON_PATH = "/assets/icons/skills";
type ProjectCardProps = {
  project: Project;
};

/**
 * ProjectCard component displays a project with an image, title, description, skills, and action buttons.
 * @param project - The project data to display.
 */
export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="border-my-accent-green group/card overflow-hidden rounded-lg border shadow-md">
      {/* Hero Image Section */}
      <div
        className={cn(
          "from-my-accent-green to-my-accent-orange border-b-my-accent-green flex aspect-video w-full items-center justify-center border-b bg-gradient-to-br",
          "transition-all duration-500 group-hover/card:scale-105",
        )}
      >
        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={project.title}
            className="h-full w-full object-cover"
          />
        ) : (
          // Fallback to title text if no image URL is provided
          <div className="text-lg font-medium text-white">{project.title}</div>
        )}
      </div>

      {/* Content Section */}
      <div className="flex flex-col gap-2 p-6">
        <h3 className="text-xl leading-[24px] font-semibold capitalize">
          {project.title}
        </h3>
        <p className="text-my-paragraph/75 text-sm">{project.description}</p>

        {/* Skills Section */}
        <div className="group/skills mb-2 flex flex-wrap gap-0 transition-all duration-500 hover:gap-2">
          {project.skills.map((skillSlug) => (
            <span
              key={`${skillSlug}-icon`}
              className={cn(
                "bg-my-background -ml-2 flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg border p-1 shadow-sm",
                "first:ml-0",
                "group-hover/skills:ml-0",
                "transition-all duration-500",
              )}
            >
              <img
                src={`${SKILLS_ICON_PATH}/${skillSlug}.svg`}
                alt={`${skillSlug}-icon`}
                className="h-full w-full rounded-sm"
              />
            </span>
          ))}
        </div>

        {/* Buttons Section */}
        <div className="flex gap-3">
          {project.liveUrl && (
            <Button
              asChild
              variant="brand-green"
              className="duration-500 hover:-rotate-2"
            >
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLinkIcon size={16} />
                View Live
              </Link>
            </Button>
          )}
          {project.sourceCodeUrl && (
            <Button
              asChild
              variant="brand-orange"
              className="duration-500 hover:-rotate-2"
            >
              <Link
                href={project.sourceCodeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <CodeIcon size={16} />
                Source Code
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
