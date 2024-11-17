import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import Digital from "./digital";

import Resume from "./resume";

const AboutMe = () => {
  return (
    <Tabs defaultValue="aboutme" className="p-10 h-screen">
      <TabsList>
        <TabsTrigger value="aboutme">About Me</TabsTrigger>
        <TabsTrigger value="resume">Resume</TabsTrigger>
      </TabsList>

      <TabsContent
        value="aboutme"
        className="flex flex-col justify-center items-center gap-10"
      >
        <Digital />
      </TabsContent>

      <TabsContent value="resume">
        <Resume />
      </TabsContent>
    </Tabs>
  );
};

export default AboutMe;
