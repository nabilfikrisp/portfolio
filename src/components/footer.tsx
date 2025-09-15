import { EMAIL, EXTERNAL_LINKS } from "@/lib/consts";
import { cn } from "@/lib/utils";
import { HeartIcon } from "lucide-react";
import Link from "next/link";
import { Separator } from "./ui/separator";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t-my-accent-green from-background to-muted/20 border-t py-6">
      <address className="motion-safe:animate-spring-right max-width-app flex w-full flex-row flex-wrap gap-4 not-italic">
        <div>
          <h3 className="text-my-accent-green font-heading text-xl font-semibold transition-transform lg:text-start">
            nabilfikrisp
          </h3>
          <p className="text-sm font-medium">Full Stack Developer</p>
          <p className="text-sm font-medium">
            <Link
              href="mailto:your.email@example.com"
              className="hover:underline"
            >
              {EMAIL}
            </Link>
          </p>
        </div>
        <ul className="mt-auto ml-auto flex justify-center gap-2 sm:justify-start">
          {Object.values(EXTERNAL_LINKS).map((link, index) => (
            <li
              key={`${link.imgAlt}-${index}`}
              className={cn(
                "h-8 w-8 transition-transform duration-500 motion-safe:hover:-rotate-12",
                "dark:bg-my-paragraph-secondary dark:rounded-lg dark:p-1",
              )}
            >
              <Link
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={link.imgSrc}
                  alt={link.imgAlt}
                  title={link.imgAlt}
                />
              </Link>
            </li>
          ))}
        </ul>
      </address>

      <div className="text-my-paragraph max-width-app mb-4 px-5 text-center text-sm">
        <Separator className="bg-muted-foreground my-4" />
        <p className="motion-safe:animate-spring-left">
          © <time dateTime={currentYear.toString()}>{currentYear}</time>{" "}
          nabilfikrisp. All rights reserved.
        </p>
        <p className="motion-safe:animate-spring-right flex items-center justify-center gap-1">
          Developed & Built with{" "}
          <HeartIcon
            size={16}
            className="text-red-500"
          />
        </p>
      </div>
    </footer>
  );
}
