import { WordPressPost } from "@/api/posts";
import DynamicBreadcrumb from "./dynamic-breadcrumb";
import ContentRenderer from "./wp-content";
import BlogCard from "./blog-card";

type Post = {
  ID: number;
  title: string;
  content: string;
};

type BlogDetailProps = {
  post: Post | null;
  posts: WordPressPost[] | null;
};

const BlogDetail = ({ post, posts }: BlogDetailProps) => {
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
    <div className="h-screen px-10 py-24 flex flex-col gap-5 ">
      <DynamicBreadcrumb homeLabel="Home" items={breadcrumbItems} />
      <div className="flex gap-5 relative">
        <div className="flex flex-col gap-5 w-3/4">
          <h2 className="font-bold text-4xl">{post.title}</h2>

          <ContentRenderer content={post.content}></ContentRenderer>
        </div>

        <div className="w-1/4 px-5">
          <div className="flex flex-col gap-4 sticky top-24">
            <h6 className="font-bold">Recent Posts</h6>

            {/* Limit the posts to a maximum of 3 */}
            {posts
              .filter((blog) => blog.ID !== post.ID)
              .slice(0, 3)
              .map((blog) => (
                <BlogCard key={blog.ID} post={blog} fromDetail />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
