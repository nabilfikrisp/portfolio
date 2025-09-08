import { HOSTING_URL, PROFILE_PICTURE_URL } from "@/lib/consts";
import type { Metadata } from "next";
import {
  Geist_Mono,
  Noto_Serif_Georgian,
  Outfit,
  Plus_Jakarta_Sans,
} from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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

const notoSerifGeorgian = Noto_Serif_Georgian({
  variable: "--font-noto-serif-georgian",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "nabilfikrisp - Fullstack Developer",
  description:
    "nabilfikrisp's portfolio showcases expertise in frontend development with TypeScript, React, and Next.js, featuring dynamic projects and growing full-stack experience.",
  openGraph: {
    title: "nabilfikrisp - Fullstack Developer",
    description:
      "Explore nabilfikrisp's portfolio, highlighting TypeScript, React, and Next.js projects with a focus on frontend excellence and emerging full-stack skills.",
    url: HOSTING_URL,
    images: `${HOSTING_URL}${PROFILE_PICTURE_URL}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${jakartaSans.variable} ${notoSerifGeorgian.variable} ${geistMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
