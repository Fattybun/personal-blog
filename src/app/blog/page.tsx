import Blogs from "@/components/blog/Blogs";
import Landing from "@/components/landing/Landing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tech & Design Insights | Reflections on Creativity and Growth",
  description:
    "Explore the blog of a frontend developer sharing thoughts on tech, design, and creativity. Discover trends, innovations, and personal stories shaping the digital landscape and beyond",
  keywords: [
    "tech blog",
    "design trends",
    "innovation insights",
    "personal growth, creativity in tech",
    "frontend development stories",
    "digital landscape reflections",
    "creative exploration",
  ],
};

const Blog = () => {
  return (
    <>
      <Landing
        backgroundImage='/blog.png'
        heading='Insights and Reflections'
        description="Immerse yourself in a tapestry of ideas and insights, where I share the essence of my journey through technology, design, and life's broader horizons. Here, I delve into the trends and innovations that redefine creativity and offer reflections that inspire and provoke thought. Join me in exploring the stories that shape the digital world and the personal growth that fuels every step forward."
      />

      <Blogs />
    </>
  );
};

export default Blog;
