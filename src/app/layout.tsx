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
    "Personal portfolio of nabilfikrisp, a Fullstack Developer specializing in TypeScript stacks. Showcasing projects, blog posts, and experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${jakartaSans.variable} ${notoSerifGeorgian.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
