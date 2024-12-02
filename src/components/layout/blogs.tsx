import fetchAllPosts from "@/api/posts";
import BlogCard from "./blog-card";
import DynamicBreadcrumb from "./dynamic-breadcrumb";

const Blogs = async () => {
  const posts = await fetchAllPosts();

  if (!Array.isArray(posts)) {
    return <div>No posts found</div>;
  }

  return (
    <div className="min-h-screen p-4 md:p-10">
      {/* Breadcrumb Section */}
      <DynamicBreadcrumb
        homeLabel="Home"
        items={[{ label: "Blog", href: "/blog" }]}
      />

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 py-8 md:py-12">
        {posts.map((post) => (
          <BlogCard key={post.ID} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
