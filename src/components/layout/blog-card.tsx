// components/blog/BlogCard.tsx
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/helpers/date-format";
import { WordPressPost } from "@/api/posts";
import { cn } from "@/lib/utils";

type BlogCardProps = {
  post: WordPressPost;
  className?: string;
  fromDetail?: boolean;
};

const BlogCard = ({ post, className, fromDetail = false }: BlogCardProps) => {
  return (
    <Link
      href={cn(fromDetail ? `${post.ID}` : `blog/${post.ID}`)}
      className={`flex flex-col gap-4 rounded-lg cursor-pointer relative group transition-transform duration-200 hover:-translate-y-1 ${className}`}
    >
      {/* Tags */}
      <div className="flex gap-2 absolute top-0 m-3 z-10 flex-wrap">
        {Object.values(post.tags).map((tag, index) => (
          <Badge
            key={tag.ID || index}
            className="bg-zinc-800 font-bold hover:bg-zinc-700 transition-colors"
          >
            {tag.name.toUpperCase()}
          </Badge>
        ))}
      </div>

      {/* Image Container */}
      <div className="relative overflow-hidden rounded-md">
        <Image
          alt={post.title}
          src={post.featured_image}
          width={1920}
          height={1080}
          priority
          className="w-full object-fill h-60 rounded-md transition-transform duration-300 group-hover:scale-105"
        />
        {/* Optional overlay */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2">
        {/* Date */}
        <time className="text-gray-400 text-sm">
          {formatDate(post.date, "DD MMM YYYY")}
        </time>

        {/* Title */}
        <h2 className="font-bold text-xl line-clamp-2 group-hover:text-primary transition-colors">
          {post.title}
        </h2>

        {/* Excerpt */}
        <div
          className="line-clamp-3 text-justify"
          dangerouslySetInnerHTML={{ __html: post.excerpt }}
        />
      </div>
    </Link>
  );
};

export default BlogCard;
