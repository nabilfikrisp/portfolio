import { HOSTING_URL, PROFILE_PICTURE_URL } from "@/lib/consts";
import { getAllPosts } from "@/lib/post-api";
import { Metadata } from "next";
import { HeroPost } from "./_components/hero-post";
import { MoreStories } from "./_components/more-stories";

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
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <div className="max-width-app flex w-full flex-1 flex-col items-center justify-center py-8">
      <HeroPost
        title={heroPost.title}
        coverImage={heroPost.coverImage}
        date={heroPost.date}
        author={heroPost.author}
        slug={heroPost.slug}
        excerpt={heroPost.excerpt}
      />
      {morePosts.length > 0 && <MoreStories posts={morePosts} />}
    </div>
  );
}
