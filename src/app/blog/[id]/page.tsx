"use client";

// import BlogDetail from "@/components/layout/detail";
import Landing from "@/components/layout/landing";
// import { useParams } from "next/navigation";

const PostDetailPage = () => {
  // const param = useParams<{ id: string }>();

  return (
    <>
      <Landing
        backgroundImage="/blog.png"
        heading="Insights and Reflections"
        description="Dive into my world of thoughts and perspectives, where I share experiences, insights, and discoveries from my journey through tech, design, and beyond. Here, I explore the trends, innovations, and stories that shape my work and inspire creativity. Join me in this ongoing conversation as we reflect on the digital landscape and personal growth."
      />
      {/* <BlogDetail blog={param.id} /> */}
    </>
  );
};

export default PostDetailPage;
