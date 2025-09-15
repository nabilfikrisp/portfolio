import { Post } from "@/lib/type";
import Link from "next/link";
import { Avatar } from "./avatar";
import { CoverImage } from "./cover-image";
import { DateFormatter } from "./date-formatter";

type Props = {
  title: Post["title"];
  coverImage: Post["coverImage"];
  date: Post["date"];
  excerpt: Post["excerpt"];
  author: Post["author"];
  slug: Post["slug"];
};

export function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <section>
      <div className="mb-8">
        <CoverImage
          title={title}
          src={coverImage}
          slug={slug}
        />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8">
        <div>
          <h3 className="mb-4 text-4xl leading-none font-medium text-balance lg:text-5xl">
            <Link
              href={`/blogs/${slug}`}
              className="hover:underline"
            >
              {title}
            </Link>
          </h3>
          <div className="mb-4 text-lg md:mb-0">
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div>
          <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
          <Avatar
            name={author.name}
            picture={author.picture}
          />
        </div>
      </div>
    </section>
  );
}
