import Landing from "@/components/layout/landing";
import AboutMe from "@/components/layout/about";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frontend Developer | Creative Digital Solutions & Innovative Design",
  description:
    "Discover the story of a passionate frontend developer crafting seamless, user-focused web experiences. Blending creativity and technology to bring ideas to life with innovation and precision",
  keywords: [
    "frontend developer",
    "web design",
    "user-centric solutions",
    "creative coding",
    "seamless digital experiences",
    "innovative technology",
    "responsive design",
    "interactive interfaces",
  ],
};

const About = () => {
  return (
    <>
      <Landing
        backgroundImage="/about.png"
        heading="About Me: A Journey in Frontend Development"
        description="Step into a realm where design meets technology and creativity shapes the web. As a frontend developer, I merge artistry with code to create digital experiences that captivate and empower. Guided by a vision to craft intuitive, user-centric solutions, I transform concepts into seamless, interactive realities. Join me on this journey of innovation, where every line of code tells a story, and every interface reflects a dream brought to life."
      />
      <AboutMe />
    </>
  );
};

export default About;
