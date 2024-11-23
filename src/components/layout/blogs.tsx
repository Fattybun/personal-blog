import fetchAllPosts from "@/api/posts";
import BlogCard from "./blog-card";
import DynamicBreadcrumb from "./dynamic-breadcrumb";

const Blogs = async () => {
  const posts = await fetchAllPosts();

  if (!Array.isArray(posts)) {
    return <div>No posts found</div>;
  }

  return (
    <div className="h-screen p-10">
      <DynamicBreadcrumb
        homeLabel="Home"
        items={[{ label: "Blog", href: "/blog" }]}
      />

      <div className="grid grid-cols-3 gap-8 py-12">
        {posts.map((post) => (
          <BlogCard key={post.ID} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
