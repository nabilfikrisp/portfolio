import { EXTERNAL_LINKS, RESUME_LINK } from "@/lib/consts";
import Link from "next/link";

export function MainSection() {
  return (
    <section
      id="header-section"
      className="my-max-width mx-auto flex w-full flex-col-reverse gap-3 rounded-lg sm:flex-row sm:gap-5"
    >
      <div className="flex w-full flex-1 flex-col gap-2">
        <h1 className="text-my-headline text-center text-3xl leading-tight font-semibold tracking-tight text-balance sm:text-start sm:text-[44px]">
          Muhammad Nabil Fikri Sudjarpadi Putra
        </h1>

        <h2 className="text-center text-2xl text-balance sm:text-start">
          Full Stack Developer
        </h2>
        <div className="flex items-center justify-center sm:justify-start">
          <div className="bg-my-accent-green mr-2 rounded-sm p-1">
            <img
              className="h-4 w-6 rounded-sm"
              src="/assets/icons/flag.webp"
              alt="indonesian-flag"
            />
          </div>
          <p className="text-base font-medium sm:text-lg">
            Bandung, West Java, Indonesia
          </p>
        </div>

        <ul className="mt-2 flex justify-center gap-2 sm:justify-start">
          <li className="bg-my-accent-green text-my-white flex h-8 items-center rounded-sm text-lg font-medium transition-transform duration-500 hover:-rotate-2">
            <Link
              href={RESUME_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-fit items-center gap-2 ps-2 pe-3"
            >
              <img
                src="/assets/icons/resume.svg"
                alt="resume-icon"
                className="text mr-1 h-6 w-6 object-cover"
              />
              Resume
            </Link>
          </li>

          {EXTERNAL_LINKS.map((link, index) => (
            <li
              key={`${link.imgAlt}-${index}`}
              className="h-8 w-8 transition-transform duration-500 hover:-rotate-12"
            >
              <Link
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={link.imgSrc}
                  alt={link.imgAlt}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-my-accent-green flex h-fit w-fit items-center justify-center place-self-center overflow-hidden rounded-full border-2 p-1 sm:place-self-auto">
        <img
          className="h-40 w-40 rounded-full object-cover"
          src="/assets/profile.png"
        />
      </div>
    </section>
  );
}
