import { ThemeProvider } from "@/components/theme-provider";
import { HOSTING_URL, PROFILE_PICTURE_URL } from "@/lib/consts";
import type { Metadata } from "next";
import {
  JetBrains_Mono,
  Noto_Serif_Georgian,
  Outfit,
  Plus_Jakarta_Sans,
} from "next/font/google";
import "./globals.css";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
});

const serif = Noto_Serif_Georgian({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "nabilfikrisp - Fullstack Developer",
  description:
    "nabilfikrisp's portfolio showcases frontend expertise in React, Next.js, and TypeScript, with dynamic projects and growing full-stack skills.",
  openGraph: {
    title: "nabilfikrisp - Fullstack Developer",
    description:
      "nabilfikrisp's portfolio showcases frontend expertise in React, Next.js, and TypeScript, with dynamic projects and growing full-stack skills.",
    type: "website",
    url: HOSTING_URL,
    images: `${HOSTING_URL}${PROFILE_PICTURE_URL}`,
  },
  twitter: {
    card: "summary_large_image",
    title: "nabilfikrisp - Fullstack Developer",
    description:
      "nabilfikrisp's portfolio showcases frontend expertise in React, Next.js, and TypeScript, with dynamic projects and growing full-stack skills.",
    images: `${HOSTING_URL}${PROFILE_PICTURE_URL}`,
    site: "@nabilfikrisp",
  },
  alternates: {
    canonical: HOSTING_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "X6_NL2Lyr2W5newcTslUX_5i02rqC_7vLw6hsxe57o8",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body
        className={`${outfit.variable} ${jakartaSans.variable} ${serif.variable} ${jetBrainsMono.variable}`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
