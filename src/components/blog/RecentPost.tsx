import React, { FC, useMemo } from 'react';
import { WordPressPost } from "@/api/posts";
import BlogCard from "./BlogCard";

interface RecentPostsProps {
  posts: WordPressPost[];
  currentPostId: number;
}

const RecentPosts: FC<RecentPostsProps> = ({ posts, currentPostId }) => {
  const recentPosts = useMemo(
    () => posts.filter((blog) => blog.ID !== currentPostId).slice(0, 3),
    [posts, currentPostId]
  );

  return (
    <aside className="w-full lg:w-1/4 px-0 lg:px-5">
      <div className="flex flex-col gap-4 lg:sticky lg:top-24">
        <h6 className="font-bold text-lg">Recent Posts</h6>
        {recentPosts.map((blog) => (
          <BlogCard key={blog.ID} post={blog} fromDetail />
        ))}
      </div>
    </aside>
  );
};

export default RecentPosts;
