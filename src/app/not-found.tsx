import { cn } from "@/lib/utils";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <section
        className={cn(
          "max-width-app mx-auto flex w-full flex-col items-center gap-6 rounded-lg text-center",
        )}
      >
        <div className="flex flex-col items-center gap-4">
          <div className="relative">
            <h1 className="text-my-headline text-8xl font-bold tracking-tight sm:text-9xl">
              404
            </h1>
            <div className="bg-my-accent-green absolute -top-2 -right-2 h-6 w-6 animate-pulse rounded-full"></div>
          </div>

          <h2 className="text-my-headline text-2xl font-semibold tracking-tight sm:text-3xl">
            Page Not Found
          </h2>

          <p className="font-heading max-w-md text-lg text-balance">
            Looks like you've ventured into uncharted territory. The page you're
            looking for doesn't exist in my{" "}
            <strong className="text-my-accent-green font-semibold">
              digital space
            </strong>
            .
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="bg-my-accent-green text-my-primary-foreground flex h-10 items-center rounded-sm px-6 text-lg font-medium transition-transform duration-500 motion-safe:hover:-rotate-2"
          >
            <img
              src="/assets/icons/resume.svg"
              alt="home-icon"
              title="Go Home"
              className="mr-2 object-cover"
              width={20}
              height={20}
            />
            Back to Home
          </Link>

          <div className="flex items-center">
            <div className="bg-my-accent-green mr-2 rounded-sm p-1">
              <img
                className="h-4 w-6 rounded-sm"
                src="/assets/icons/flag.webp"
                alt="indonesian-flag"
                title="Indonesian Flag"
                width={16}
                height={24}
              />
            </div>
            <p className="text-base font-medium">Still in Bandung, West Java</p>
          </div>
        </div>

        <div className="mt-4 opacity-60">
          <p className="text-sm">
            Error 404 | nabilfikrisp | Full Stack Developer
          </p>
        </div>
      </section>
    </main>
  );
}
