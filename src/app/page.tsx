import Landing from "@/components/landing/Landing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Digital Journey | Where Creativity Meets Technology",
  description:
    "Welcome to my personal blog! Dive into stories of creativity and technology, from design to development, inspiration to realization. Explore the limitless possibilities of the digital world with me",
  keywords: [
    "personal blog",
    "creativity and technology",
    "digital journey",
    "frontend development",
    "user experience",
    "innovative design",
    "reflections and growth",
    "exploring the digital world",
  ],
};

const Home = () => {
  return (
    <Landing
      backgroundImage="/landing.png"
      heading="Welcome to Bunventures"
      description="Embark on a journey through the digital realm, where creativity and functionality converge. Here, I share my work, stories, and experiences, each crafted with a passion for impactful design and seamless, user-centered solutions. Step into a world of innovation and let's shape the future of the web—together."
    />
  );
};

export default Home;
