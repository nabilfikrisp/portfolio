import { cn } from "@/lib/utils";

type AboutSectionProps = {
  className?: string;
};
export function AboutSection({ className }: AboutSectionProps) {
  return (
    <section
      id="about-me-section"
      className={cn("max-width-app w-full space-y-2", className)}
    >
      <h2 className="text-my-headline text-2xl font-semibold sm:text-3xl">
        About Me
      </h2>
      <p className="text-justify text-lg sm:text-xl">
        Hello, my name is Muhammad{" "}
        <strong className="text-my-accent-green">Nabil Fikri</strong> Sudjarpadi
        Putra. I&apos;m a fullstack developer with{" "}
        <strong className="text-my-accent-green">1+ years of experience</strong>{" "}
        building user-focused web applications with React, Next.js, and
        Express/Nest.js. While my strength is currently in frontend development,
        I&apos;m actively expanding my backend, database, and system design
        skills to create more complete and reliable systems.
      </p>
    </section>
  );
}
