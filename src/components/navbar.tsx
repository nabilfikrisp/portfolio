import { cn } from "@/lib/utils";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="border-b-my-accent-green sticky top-0 z-50 border-b py-3 backdrop-blur-sm">
      <nav
        className={cn(
          "max-width-app flex items-center gap-4",
          "motion-safe:animate-spring-down",
        )}
      >
        <Link
          href="/"
          className={cn(
            "text-my-accent-green font-heading hover:text-my-accent-green/70 mr-auto text-3xl font-semibold tracking-tighter hover:cursor-pointer",
            "duration-500 motion-safe:hover:rotate-2",
            "not-motion-safe:hover:underline",
          )}
        >
          nabilfikrisp
        </Link>

        <ul className="ml-auto w-fit text-xl font-medium">
          <li
            className={cn(
              "text-my-accent-green font-heading hover:text-my-accent-green/70",
              "duration-500 motion-safe:hover:rotate-2",
              "not-motion-safe:hover:underline",
            )}
          >
            <Link href="/blogs">Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
