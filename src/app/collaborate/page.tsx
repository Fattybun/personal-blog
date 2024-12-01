import Landing from "@/components/layout/landing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Collaborate with a Frontend Developer | Innovative Projects & Partnerships",
  description:
    "Partner with a passionate frontend developer to create impactful digital solutions. Let's collaborate to bring unique visions to life through creativity, strategy, and innovation",
  keywords: [
    "collaboration",
    "frontend developer projects",
    "creative partnerships",
    "digital solutions",
    "innovative teamwork",
    "build unique projects",
    "creative brainstorming",
    "impactful solutions",
  ],
};

const Collaborate = () => {
  return (
    <Landing
      backgroundImage="/collaborate.png"
      heading="Let's Create Together"
      description="Collaboration lies at the heart of innovation, transforming ideas into reality. Whether you seek to create something extraordinary, explore fresh perspectives, or conquer a challenging project, I’m here to join forces. Together, we’ll blend our expertise, imagination, and aspirations to shape meaningful solutions and forge enduring connections. Let’s build something remarkable—one idea, one line of code, one shared vision at a time."
    />
  );
};

export default Collaborate;
