import { HOSTING_URL, PROFILE_PICTURE_URL } from "@/lib/consts";
import { getAllPosts } from "@/lib/post-api";
import { Metadata } from "next";
import { PostList } from "./_components/post-list";

export const metadata: Metadata = {
  title: "nabilfikrisp | blogs",
  description:
    "nabilfikrisp's learning journey, coding experiments, and lessons learned as a fullstack developer",
  openGraph: {
    title: "nabilfikrisp | blogs",
    description:
      "nabilfikrisp's learning journey, coding experiments, and lessons learned as a fullstack developer",
    type: "website",
    url: `${HOSTING_URL}/blogs`,
    images: `${HOSTING_URL}${PROFILE_PICTURE_URL}`,
  },
  alternates: {
    canonical: `${HOSTING_URL}/blogs`,
  },
};

export default function BlogPage() {
  const allPosts = getAllPosts();

  return (
    <div className="max-width-app mx-auto flex w-full flex-1 flex-col items-center justify-center py-8">
      <header className="mb-6 flex w-full flex-col items-center gap-4 md:flex-row">
        <div className="border-my-accent-green flex h-fit w-fit items-center justify-center place-self-center overflow-hidden rounded-full border-2 p-1 sm:place-self-auto">
          <img
            className="h-40 w-40 rounded-full object-cover"
            src={PROFILE_PICTURE_URL}
            alt="profile-picture"
            title="Profile Picture"
            width={160}
            height={160}
          />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-my-headline mb-2 text-3xl font-semibold tracking-tight md:text-4xl">
            nabilfikrisp
          </h1>
          <p className="font-heading text-lg md:text-xl">
            Learning journey, coding experiments, and lessons learned
          </p>
        </div>
      </header>

      <div className="flex w-full flex-col gap-4">
        <h2 className="text-center text-2xl font-bold md:text-left md:text-4xl">
          Blog Posts
        </h2>
        <PostList posts={allPosts} />
      </div>
    </div>
  );
}
