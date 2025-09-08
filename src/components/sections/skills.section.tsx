import { SKILLS } from "@/lib/consts";
import { cn } from "@/lib/utils";

type SkillsSectionProps = {
  className?: string;
};

export function SkillsSection({ className }: SkillsSectionProps) {
  return (
    <section
      id="skills-section"
      className={cn("max-width-app w-full space-y-4", className)}
    >
      <h2 className="text-my-headline text-2xl font-semibold sm:text-3xl">
        Skills
      </h2>

      <div className="flex flex-wrap gap-4">
        {SKILLS.map((skill) => (
          <div
            key={skill.slug}
            className="bg-my-background border-my-accent-green flex items-center gap-2 rounded-md border px-3 py-2"
          >
            <img
              src={skill.iconUrl}
              alt={`${skill.name} icon`}
              title={skill.name}
              className="h-5 w-5 object-contain"
              width={20}
              height={20}
            />
            <span className="text-my-paragraph text-sm font-medium">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
