import Landing from "@/components/layout/landing";
import AboutMe from "@/components/layout/about";

const About = () => {
  return (
    <>
      <Landing
        backgroundImage="/about.png"
        heading="About Me: A Journey in Frontend Development"
        description="Welcome to my world of code and creativity. As a frontend developer, I thrive at the intersection of design and technology, building user-focused experiences that are both functional and visually engaging. Driven by a passion for crafting seamless digital solutions, I embrace innovative problem-solving to bring ideas to life. Explore my story, values, and the vision that inspires me to shape the web, one line of code at a time."
      />
      <AboutMe />
    </>
  );
};

export default About;
