"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import about_me from "../../public/images/about-me.png";

const TAB_DATA = [
  {
    title: "Experiences",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>Software Developer - Algorizin Inc. (Aug&apos;23 to Present)</li>
        <div className="mt-2">
            <p>- UX Design: Boosted the user experience overhaul of Algorizin&apos;s landing page, utilizing responsive design techniques to yield a 20% increase in user engagement.</p>
            <p>- Agile Project Management: Engineered project management with an agile Kanban-style dashboard in ClickUp that pioneered a two-way sync function, ensuring real-time data accuracy and fostering user confidence in instant information updates, leading to an increase in team productivity.
            </p>
            <p>- Achieved a cost-saving initiative resulting in a $150,000 reduction in annual expenditures through the successful transition to an internally developed platform.
            </p>
            <p>- Dockerizing the application: Implemented Dockerization for the Algorizin full-stack application using Docker Compose, enhancing portability and scalability, resulting in a reduction in deployment time and improved resource utilization.
            </p>
            <p>- Optimized Workflow: Established the CI/CD pipeline of Algorizin&apos;s full-stack application using GitHub Actions, achieving a reduction in deployment times through automated linting, building, testing, and enhanced processes for pull requests.</p>
        </div>



        <br></br>
        <li>Graduate Research Assistant - University of Louisiana at Lafayette (Aug&apos;19 to May&apos;23)</li>
        <div className="mt-2">
            <p>- Collaborated with a diverse team to enhance university printing station tech support, resulting in a 20% reduction in reported issues and ensuring uninterrupted operations for 10,000+ users.</p>
            <p>- Played a key role in the Waste Management Team, achieving an 8% waste reduction.</p>
            <p>- Achieved $20,000 in cost savings through the optimization of resource management, implementation of eco-friendly printing practices, and promotion of sustainability.</p>
        </div>        
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
        <Image 
          src={about_me}
          alt="about-me image" 
          width={800} 
          height={1200} 
          layout="responsive"
          placeholder="blur"
          />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="p-1 text-4xl text-center font-bold text-white mb-4 rounded-xl bg-gradient-to-br from-[#cb35cb]">About Me</h2>
          <p className="text-white texxt-base md:text-lg">
          I am Navid Yousuf, an accomplished software developer with a passion for creating dynamic and user-centric software applications. My journey in software development has equipped me with a robust skill set, including proficiency in JavaScript, TypeScript, React, Next.js, Node.js, HTML, CSS, Tailwind CSS, and Git. My relentless pursuit of knowledge drives my continuous growth in this ever-evolving field.
          </p>
          <br></br>
          <p className="text-white texxt-base md:text-lg">
          Collaboration is the cornerstone of my approach, and I thrive in team environments where diverse talents converge to conceive exceptional applications. I take pride in my adaptability, quick problem-solving skills, and commitment to delivering top-notch user experiences. My extensive skills include JavaScript, React, TypeScript, Next.js, Node.js, PostgreSQL, TailwindCSS, Docker, CI/CD, Figma, and Git.
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