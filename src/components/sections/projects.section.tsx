import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { EXTERNAL_LINKS, PROJECTS } from "@/lib/consts";
import { cn } from "@/lib/utils";
import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";

type ProjectsSectionProps = {
  className?: string;
};

export function ProjectsSection({ className }: ProjectsSectionProps) {
  return (
    <section
      id="projects-section"
      className={cn("max-width-app w-full space-y-4", className)}
    >
      <h2 className="text-my-headline text-2xl font-semibold sm:text-3xl">
        Projects
      </h2>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>

      {/* See other projects section */}
      <div className="border-my-accent-green flex flex-col items-center justify-center space-y-2 rounded-lg border py-4">
        <div className="space-y-2 text-center">
          <h3 className="text-my-headline text-xl font-medium">
            Check out my other projects on GitHub
          </h3>
        </div>
        <Button
          asChild
          variant="brand-green"
          className="duration-500 hover:-rotate-2"
        >
          <Link
            href={EXTERNAL_LINKS.GITHUB.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLinkIcon size={16} />
            View on GitHub
          </Link>
        </Button>
      </div>
    </section>
  );
}
