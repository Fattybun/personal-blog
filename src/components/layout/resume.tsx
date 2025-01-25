"use client";

import { motion } from "framer-motion";
import { Separator } from "../ui/separator";
import { ReactNode } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { experiences } from "@/configs/experience";
import { technical_skills } from "@/configs/skills";
import { achievements } from "@/configs/achievement";

const Section = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => (
  <section className="mb-2">
    <h6 className="text-lg text-center font-semibold text-gray-700">{title}</h6>
    <div className="flex">
      <Separator className="h-[3px] w-1/4 bg-gray-200 my-2" />
      <Separator className="h-[3px] w-3/4 bg-primary my-2" />
    </div>
    <div className="mt-4">{children}</div>
  </section>
);

const Resume = () => {
  const experience = Object.values(experiences);
  const skills = Object.values(technical_skills);
  const achievement = Object.values(achievements);

  return (
    <div className="flex flex-col gap-4 items-end w-full relative text-sm">
      <Button className="w-fit text-xs md:text-base">
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
        className="container mx-auto my-10 p-4 md:p-8 max-w-[21cm] bg-white shadow-lg border border-gray-300"
      >
        <h1 className="mt-8 font-extrabold text-xl md:text-3xl text-center text-gray-800">
          Jacky Lau Chong Bao
        </h1>
        <div className="text-lg md:text-xl text-center text-gray-600">
          Frontend Developer
        </div>
        <div className="text-md md:text-md text-center text-gray-600 mb-6">
          +60 11-1056 1128 • jackylau001128@gmail.com • Kuala Lumpur
        </div>

        <Section title="Summary">
          <p className="text-justify text-gray-600">
            Adept Frontend Developer with expertise in Next.js, Angular, and
            Tailwind CSS. Skilled in optimizing frontend performance, crafting
            user-centricinterfaces, and collaborating effectively on team
            projects to deliver high-quality results.
          </p>
        </Section>

        <Section title="Key Achievements">
          <ul className="text-justify list-disc ms-4 text-gray-600">
            {achievement.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Section>

        <Section title="Experiences">
          {experience.map(
            ({ date, title, company, location, tasks }, index) => (
              <div key={index} className="w-full mb-2">
                <div className="grid grid-cols-2">
                  <div className="flex flex-col">
                    <h6 className="font-semibold text-gray-800">{company}</h6>
                    <span className="text-gray-600">{title}</span>
                  </div>

                  <div className="flex flex-col text-end">
                    <span className="text-gray-600">{location}</span>
                    <span className="text-gray-600">{date}</span>
                  </div>
                </div>

                <ul className="list-disc ms-4 text-gray-600 mt-2 text-justify">
                  {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                  ))}
                </ul>
              </div>
            )
          )}
        </Section>

        <Section title="Skills">
          <div className="flex flex-col text-gray-600">
            {skills.map((uiux, index) => (
              <ul key={index} className="list-disc ms-4">
                <li>{uiux}</li>
              </ul>
            ))}
          </div>
        </Section>

        <Section title="Education">
          <div className="grid grid-cols-2">
            <div className="flex flex-col">
              <h6 className="font-semibold text-gray-800">
                Multimedia University (MMU)
              </h6>
              <span className="text-gray-600">
                Bachelor of Computer Science in Artificial Intelligence
              </span>
            </div>

            <div className="flex flex-col text-end text-gray-600">
              <span>Melaka</span>
              <span>July 2019 - July 2023</span>
            </div>
          </div>
        </Section>
      </motion.div>
    </div>
  );
};

export default Resume;
