import { HOSTING_URL } from "@/lib/consts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - nabilfikrisp",
  description:
    "Stay tuned for insightful articles and updates on web development, programming, and technology from nabilfikrisp.",
  alternates: {
    canonical: `${HOSTING_URL}/blog`,
  },
};

export default function BlogPage() {
  return (
    <div className="flex min-h-screen items-center justify-center py-8">
      <div className="space-y-4 text-center">
        <h1 className="text-my-accent-green text-4xl font-bold">
          Under Construction
        </h1>
        <p className="text-lg">This page is coming soon!</p>
      </div>
    </div>
  );
}
