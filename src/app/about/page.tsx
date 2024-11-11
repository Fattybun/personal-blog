import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { frameworks, languages, skills, tools } from "@/configs/resume";
import { cn } from "@/lib/utils";

const BadgeList = ({
  title,
  list,
}: {
  title: string;
  list: { label: string }[];
}) => (
  <div className="flex flex-col gap-2">
    <h3 className="font-semibold text-lg text-primary">{title}</h3>
    <div className="flex gap-2 flex-wrap">
      {list.map((item, index) => (
        <Badge
          key={index}
          className="text-white bg-primary px-3 py-1 rounded-md hover:bg-primary-dark transition"
        >
          {item.label}
        </Badge>
      ))}
    </div>
  </div>
);

const About = () => {
  const toolist = Object.values(tools).map((tool) => ({ label: tool }));
  const languagelist = Object.values(languages).map((language) => ({
    label: language,
  }));
  const frameworklist = Object.values(frameworks).map((framework) => ({
    label: framework,
  }));
  const skillist = Object.values(skills).map((skill) => ({ label: skill }));

  return (
    <div
      className={cn(
        "flex flex-col mt-20 px-5 lg:px-40 py-10 gap-5 relative bg-slate-100"
      )}
    >
      <h2 className="font-bold text-3xl text-primary mb-4">
        Jacky Lau Chong Bao
      </h2>
      <Separator />

      {/* Working Experience Section */}
      <div className="flex flex-col gap-4">
        <h3 className="font-bold text-xl text-secondary">Working Experience</h3>

        <div className="flex flex-col gap-1">
          <h6 className="font-semibold text-lg text-primary">
            HiSeven Sdn Bhd
          </h6>
          <h6 className="font-semibold text-sm text-secondary">
            Executive Frontend Developer
          </h6>
          <h6 className="text-sm text-secondary">Full Time</h6>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              Engineered a headless CMS architecture using NextJS with Tailwind
              CSS for the frontend and WordPress as a backend via GraphQL,
              improving site performance.
            </li>
            <li>
              Extended Ant Design to build a custom UI component library,
              ensuring design consistency and speeding up development.
            </li>
            <li>
              Developed an automated web scraping platform to aggregate and
              centralize content from multiple websites.
            </li>
            <li>
              Implemented a monorepo development structure using Nx, improving
              code sharing between projects.
            </li>
            <li>
              Developed the company’s official website, translating designs into
              a fully responsive and user-friendly site, supporting multiple
              languages and regions.
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-1 mt-4">
          <h6 className="font-semibold text-lg text-primary">
            Avexis Solution Sdn Bhd
          </h6>
          <h6 className="font-semibold text-sm text-secondary">
            Frontend Developer (Internship)
          </h6>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              Applied the Angular Framework to migrate and improve the existing
              cryptocurrency system.
            </li>
            <li>
              Utilized a divide-and-conquer approach to create reusable
              components in the existing system.
            </li>
            <li>Prototyped a mobile UI design using Figma.</li>
            <li>
              Developed a mobile tracking application using the Ionic Framework.
            </li>
          </ul>
        </div>
      </div>

      <Separator />

      {/* Education Section */}
      <div className="flex flex-col gap-1">
        <h3 className="font-bold text-xl text-secondary">Education</h3>
        <h6 className="font-semibold text-lg text-primary">
          Bachelor of Computer Science
        </h6>
        <h6 className="text-sm text-secondary">
          Majoring in Artificial Intelligence
        </h6>
        <h6 className="text-sm text-secondary">
          Multimedia University (MMU) Melaka
        </h6>
        <span className="text-sm text-secondary">CGPA: 3.74</span>
      </div>

      <Separator />

      {/* Tools, Languages, Frameworks, and Skills Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <BadgeList title="Tools" list={toolist} />
        <BadgeList title="Languages" list={languagelist} />
        <BadgeList title="Frameworks" list={frameworklist} />
        <BadgeList title="Softskills" list={skillist} />
      </section>
    </div>
  );
};

export default About;
