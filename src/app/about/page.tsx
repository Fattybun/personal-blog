import Resume from "@/components/layout/resume";
import Landing from "@/components/layout/landing";

const About = () => {
  return (
    <>
      <Landing
        backgroundImage="/about.png"
        heading="A Journey in Design and Innovation"
        description="Welcome to my story! I'm a digital creator passionate about merging creativity with functionality. With a dedication to user-centered design and innovative problem-solving, I strive to make a positive impact through my work. Discover more about my background, values, and the journey that fuels my vision in the digital world."
      />
      <Resume />
    </>
  );
};

export default About;
