import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import Digital from "./Digital";
import Resume from "./Resume";

const AboutMe = () => {
  return (
    // Tabs container with default value and layout styling
    <Tabs
      defaultValue="aboutme"
      className="px-6 py-10 min-h-screen place-items-center"
    >
      {/* Tabs list for navigation */}
      <TabsList>
        <TabsTrigger value="aboutme">About Me</TabsTrigger>
        <TabsTrigger value="resume">Resume</TabsTrigger>
      </TabsList>

      {/* Content for About Me Tab */}
      <TabsContent
        value="aboutme"
        className="flex flex-col justify-center items-center gap-10"
      >
        <Digital />
      </TabsContent>

      {/* Content for Resume Tab */}
      <TabsContent value="resume">
        <Resume />
      </TabsContent>
    </Tabs>
  );
};

export default AboutMe;