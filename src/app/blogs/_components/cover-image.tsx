import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type CoverImageProps = {
  title: string;
  src: string;
  slug?: string;
};

export function CoverImage({ title, src, slug }: CoverImageProps) {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn("aspect-video w-full rounded-lg shadow-sm", {
        "transition-shadow duration-200 hover:shadow-lg": slug,
      })}
      width={1300}
      height={630}
    />
  );

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link
          href={`/posts/${slug}`}
          aria-label={title}
        >
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
