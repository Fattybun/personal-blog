import React, { FC } from 'react';
import { WordPressPost } from "@/api/posts";
import DynamicBreadcrumb from "../navigation/DynamicBreadcrumb";
import ContentRenderer from "./WPContent";
import RecentPosts from './RecentPost';

interface Post {
  ID: number;
  title: string;
  content: string;
}

interface BlogDetailProps {
  post: Post | null;
  posts: WordPressPost[] | null;
}

const BlogDetail: FC<BlogDetailProps> = ({ post, posts }) => {
  if (!post || !posts) {
    return <div>No posts found</div>;
  }

  const breadcrumbItems = [
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: post.title,
      href: `/blog/${post.ID}`,
    },
  ];

  return (
    <div className="min-h-screen px-4 md:px-10 py-12 pt-24 md:py-24 flex flex-col gap-5">
      {/* Breadcrumb */}
      <DynamicBreadcrumb homeLabel="Home" items={breadcrumbItems} />

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-5">
        {/* Blog Post Content */}
        <article className="flex flex-col gap-5 w-full lg:w-3/4">
          <h2 className="font-bold text-2xl md:text-4xl">{post.title}</h2>
          <ContentRenderer content={post.content} />
        </article>

        {/* Recent Posts Sidebar */}
        <RecentPosts posts={posts} currentPostId={post.ID} />
      </div>
    </div>
  );
};

export default BlogDetail;
