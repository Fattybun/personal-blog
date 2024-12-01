import BlogDetail from "@/components/layout/detail";
import fetchPost from "@/api/post_detail";
import fetchAllPosts from "@/api/posts";
import { Metadata } from "next";

// Next.js 15^
type Params = Promise<{ id: string }>;

export const generateMetadata = async (props: {
  params: Params;
}): Promise<Metadata> => {
  const param = await props.params;
  const post = await fetchPost(Number(param.id));

  if (!post) {
    return {
      title: "Post Not Found | Insights on Creativity, Tech, and Growth",
      description:
        "The post you are looking for does not exist. Explore more articles on creativity, technology, and personal growth.",
      keywords: [
        "post not found",
        "blog detail",
        "creativity in tech",
        "frontend development",
        "digital innovation",
        "user experience",
        "404 page",
      ],
    };
  }

  return {
    title: `${post.title} | Insights on Creativity, Tech, and Growth`,
    description: `Discover in-depth insights and reflections in ${post.title}. Explore the journey of creativity, challenges in development, and stories shaping the digital landscape.`,
    keywords: [
      "blog detail",
      "creativity in tech",
      "in-depth reflections",
      "frontend development stories",
      "user experience insights",
      "digital innovation",
      "personal growth",
      "design challenges",
    ],
  };
};

const PostDetailPage = async (props: { params: Params }) => {
  // Extract the ID directly from params
  const param = await props.params;

  // Fetch the post and related posts
  const post = await fetchPost(Number(param.id));
  const posts = await fetchAllPosts();

  return (
    <>
      <BlogDetail post={post} posts={posts} />
    </>
  );
};

export default PostDetailPage;
