import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import Digital from "./digital";

import Resume from "./resume";

const AboutMe = () => {
  return (
    <Tabs
      defaultValue="aboutme"
      className="px-6 py-10 min-h-screen place-items-center"
    >
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
