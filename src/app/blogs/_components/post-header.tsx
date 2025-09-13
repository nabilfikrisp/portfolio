import { Author } from "@/lib/type";
import { Avatar } from "./avatar";
import { CoverImage } from "./cover-image";
import { DateFormatter } from "./date-formatter";
import { PostTitle } from "./post-title";

type PostHeaderProps = {
  title: string;
  date: string;
  author: Author;
  coverImage: string;
};

export function PostHeader({
  title,
  author,
  coverImage,
  date,
}: PostHeaderProps) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-8 sm:mx-0 md:mb-16">
        <CoverImage
          title={title}
          src={coverImage}
        />
      </div>
      <div className="b mb-6">
        <Avatar
          name={author.name}
          picture={author.picture}
        />
      </div>
      <div className="font-heading mb-6 text-lg font-semibold">
        <DateFormatter dateString={date} />
      </div>
    </>
  );
}
