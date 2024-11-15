"use client";

import { motion } from "framer-motion";
import { Separator } from "../ui/separator";
import { Mail, Github } from "lucide-react";
import { ReactNode } from "react";
import { experiences, frameworks, languages, tools } from "@/configs/resume";
import { Button } from "../ui/button";
import Link from "next/link";

const ContactItem = ({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) => (
  <div className="flex items-center gap-3">
    <span className="text-gray-600">{icon}</span>
    <div>
      <span className="font-medium text-gray-700">{label}</span>
      <span className="block text-gray-600">{value}</span>
    </div>
  </div>
);

const Section = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => (
  <section className="mb-8">
    <h6 className="text-lg font-semibold text-gray-700">{title}</h6>
    <div className="flex">
      <Separator className="h-[3px] w-1/4 bg-gray-200 my-2" />
      <Separator className="h-[3px] w-3/4 bg-primary my-2" />
    </div>
    <div className="mt-4">{children}</div>
  </section>
);

const Resume = () => {
  const experience = Object.values(experiences);

  const skills = {
    Frameworks: Object.values(frameworks),
    Tools: Object.values(tools),
    Language: Object.values(languages),
  };

  return (
    <div className="px-10 py-10 flex flex-col gap-4 items-end w-full">
      <Button className="w-fit">
        <Link
          target="_blank"
          href="/assets/resume.pdf"
          rel="noopener noreferrer"
        >
          Download CV
        </Link>
      </Button>
      <motion.div
        onClick={() => window.print()}
        initial={{
          opacity: 0,
          y: 50,
          boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
        }}
        animate={{
          opacity: 1,
          y: 0,
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="container mx-auto my-10 p-8 max-w-[21cm] bg-white shadow-lg border border-gray-300"
      >
        <h1 className="mt-8 font-extrabold text-4xl text-gray-800">
          Jacky Lau Chong Bao
        </h1>
        <div className="text-xl text-gray-600 mb-6">Frontend Developer</div>

        <div className="mb-8">
          <div className="flex">
            <Separator className="h-[3px] w-1/4 bg-gray-200 my-2" />
            <Separator className="h-[3px] w-3/4 bg-primary my-2" />
          </div>
          <div className="flex gap-5 pt-2">
            <ContactItem
              icon={<Mail size={24} />}
              label="Email"
              value="jackylau001128@gmail.com"
            />
            <ContactItem
              icon={<Github size={24} />}
              label="GitHub"
              value="github.com/Fattybun"
            />
          </div>
        </div>

        <div className="flex gap-5 mb-8">
          <div className="w-1/4">
            <h6 className="text-lg font-semibold text-gray-700">Address</h6>
            <span className="text-gray-600">Kuala Lumpur</span>
          </div>
          <div className="w-3/4">
            <h6 className="text-lg font-semibold text-gray-700">Profile</h6>
            <p className="text-gray-600 leading-relaxed">
              Passionate and detail-oriented Frontend Developer with over a year
              of experience building responsive web applications. Skilled in
              Next.js, Angular, and Ionic, with expertise in modular design and
              maintainability. Known for delivering polished UI/UX and
              leveraging structured approaches to solve complex challenges.
            </p>
          </div>
        </div>

        <Section title="Work Experience">
          {experience.map(({ date, title, company, tasks }, index) => (
            <div key={index} className="flex items-start gap-4 mb-6">
              <span className="font-semibold text-gray-700 w-1/4">{date}</span>
              <div className="w-3/4">
                <h6 className="font-semibold text-gray-800">{title}</h6>
                <span className="text-gray-600">{company}</span>
                <ul className="list-disc list-inside text-gray-600 mt-2 space-y-2">
                  {tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </Section>

        <Section title="Education">
          <div className="flex flex-col">
            <h6 className="font-semibold text-gray-800">
              Multimedia University (MMU)
            </h6>
            <span className="text-gray-600">
              Bachelor of Computer Science in Artificial Intelligence, 2021 -
              2023
            </span>
            <span className="text-gray-600">CGPA: 3.74</span>
          </div>
        </Section>

        <Section title="Skills">
          <div className="grid grid-cols-3 gap-4">
            {Object.entries(skills).map(([category, items], index) => (
              <div key={index}>
                <h6 className="font-semibold text-gray-800">{category}</h6>
                <ul className="text-gray-600 space-y-1">
                  {items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>
      </motion.div>
    </div>
  );
};

export default Resume;
