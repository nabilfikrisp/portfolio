import { cn } from "@/lib/utils";

interface ExperienceImageProps {
  imageUrl: string;
  name: string;
  fallbackTitle: string;
}

export function ExperienceImage({
  imageUrl,
  name,
  fallbackTitle,
}: ExperienceImageProps) {
  return (
    <div className={cn("relative py-2", "group-first:pt-4", "group-last:pb-4")}>
      {/* Vertical timeline line */}
      <div
        className={cn(
          "bg-my-accent-green absolute inset-y-0 left-1/2 z-0 w-[2px] -translate-x-1/2",
          "group-first:top-1/2",
          "group-last:bottom-1/2",
        )}
      />

      {/* Logo image */}
      <img
        className={cn(
          "border-my-accent-green bg-my-background relative z-10 aspect-square h-16 w-16 overflow-hidden rounded border object-scale-down lg:h-20 lg:w-20",
          "dark:bg-my-paragraph-secondary",
        )}
        src={imageUrl}
        title={name}
        alt={name ? `${name} logo` : fallbackTitle}
      />
    </div>
  );
}
