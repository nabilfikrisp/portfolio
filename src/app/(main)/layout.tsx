import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import {
  EMAIL,
  EXTERNAL_LINKS,
  HOSTING_URL,
  PROFILE_PICTURE_URL,
} from "@/lib/consts";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "nabilfikrisp",
    alternateName: [
      "Muhammad Nabil Fikri Sudjarpadi Putra",
      "Muhammad Nabil Fikri",
      "Nabil Fikri",
      "micanskuy",
    ],
    jobTitle: "Frontend Developer",
    email: EMAIL,
    url: HOSTING_URL,
    sameAs: [EXTERNAL_LINKS.GITHUB.href, EXTERNAL_LINKS.LINKED_IN.href],
    description:
      "nabilfikrisp is a Frontend Developer specializing in TypeScript, React, and Next.js, with growing expertise in full-stack development, building modern web applications.",
    image: `${HOSTING_URL}${PROFILE_PICTURE_URL}`,
    knowsAbout: [
      "TypeScript",
      "React",
      "Next.js",
      "Express.js",
      "NestJS",
      "Frontend Development",
      "Full Stack Development",
    ],
  };

  return (
    <div className="bg-my-background flex min-h-screen flex-col subpixel-antialiased">
      <Navbar />
      <main className="flex flex-1 flex-col">{children}</main>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </div>
  );
}
