import BlogDetail from "@/components/layout/detail";
import fetchPost from "@/api/post_detail";
import fetchAllPosts from "@/api/posts";

// Next.js 15^
type Params = Promise<{ id: string }>;

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
