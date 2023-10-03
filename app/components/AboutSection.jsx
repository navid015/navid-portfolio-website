"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Experiences",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>Full Stack Developer - Algorizin Inc. (Aug&apos;23 to Present)</li>
        <div className="mt-2">
            <p>-Engineered production-ready web application using a technology stack that includes JavaScript, TypeScript, Tailwind CSS, React, and React Hooks.</p>
        </div>
        <br></br>
        <li>Graduate Research Assistant - University of Louisiana at Lafayette (Aug&apos;19 to May&apos;23)</li>        
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Master of Science in Informatics - University of Louisiana at Lafayette </li>
        <p>- CGPA: 4.00 (Spring&apos;23)</p>
        <br></br>
        <li>Master of Science in Petreoleum Engineering - University of Louisiana at Lafayette</li>
        <p>- CGPA: 3.92 (Spring&apos;21)</p>
        
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("experience");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 py-8 px-4 xl:gap-16 sm:py-16 xl:px-0">
        <Image src="/images/about-me.png" alt="about-me image" width={800} height={1200} layout="responsive"/>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="p-1 text-4xl text-center font-bold text-white mb-4 rounded-xl bg-gradient-to-br from-[#cb35cb]">About Me</h2>
          <p className="text-white texxt-base md:text-lg">
                I am Navid Yousuf, a dedicated full-stack web developer driven by a fervent enthusiasm for crafting engaging and adaptable web applications. My journey in web development has equipped me with a diverse skill set, encompassing JavaScript, TypeScript, React, Next.js. Node.js, Express,  HTML, CSS, Tailwind CSS, and Git. My insatiable appetite for learning fuels my growth in this ever-evolving field, pushing me to continually expand my knowledge and abilities.
          </p>
          <br></br>
          <p className="text-white texxt-base md:text-lg">
          Collaboration is at the heart of my approach, and I thrive in team settings, where diverse talents converge to conceive exceptional applications. I take pride in my adaptability, quick problem-solving skills, and commitment to delivering top-notch user experiences. Together with my passion for coding, I am eager to contribute to the creation of remarkable digital solutions.
          </p>
          <div className="flex flex-row text-xl font-extrabold justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experiences
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>

          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;