import React from 'react';
import '../globals.css';
import Image from 'next/image';

const Skills = () => {
  return (
    <section className="mt-12 mb-20 py-16" id="skills">
      <div className="text-center mb-8">
        <h2 className="text-4xl w-full font-bold text-white rounded-xl bg-gradient-to-br from-[#cb35cb] inline-block p-1 mb-6">
          Tools I know...
        </h2>
      </div>
      <div className="flex flex-wrap justify-center items-center space-y-4 space-x-4 sm:space-y-6 sm:space-x-6 md:space-y-8 md:space-x-8 lg:space-y-4 lg:space-x-0">
        {/* JavaScript */}
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 flex items-center justify-center animate-bounce-delay-1"> {/* Updated */}
          <Image
            src="/images/javascript-js.svg"
            alt="JavaScript icon"
            width={140}
            height={140}
            style={{ transition: 'transform 0.3s ease' }}
            className="hover:scale-125"
          />
        </div>

        {/* HTML */}
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 flex items-center justify-center animate-bounce-delay-2"> {/* Updated */}
          <Image
            src="/images/html.svg"
            alt="HTML icon"
            width={150}
            height={150}
            style={{ transition: 'transform 0.3s ease' }}
            className="hover:scale-125"
          />
        </div>

        {/* CSS */}
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 flex items-center justify-center animate-bounce-delay-1"> {/* Updated */}
          <Image
            src="/images/css.svg"
            alt="CSS icon"
            width={140}
            height={140}
            style={{ transition: 'transform 0.3s ease' }}
            className="hover:scale-125"
          />
        </div>

        {/* React */}
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 flex items-center justify-center animate-bounce-delay-2"> {/* Updated */}
          <Image
            src="/images/react.svg"
            alt="React icon"
            width={140}
            height={140}
            style={{ transition: 'transform 0.3s ease' }}
            className="hover:scale-125"
          />
        </div>

        {/* TypeScript */}
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 flex items-center justify-center animate-bounce-delay-2"> {/* Updated */}
          <Image
            src="/images/typescript.svg"
            alt="TypeScript icon"
            width={140}
            height={140}
            style={{ transition: 'transform 0.3s ease' }}
            className="hover:scale-125"
          />
        </div>

        {/* Next.js */}
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 flex items-center justify-center animate-bounce-delay-1 icon-white"> {/* Updated */}
          <Image
            src="/images/nextjs.svg"
            alt="Next.js icon"
            width={140}
            height={140}
            style={{ transition: 'transform 0.3s ease' }}
            className="hover:scale-125"
          />
        </div>

        {/* Tailwind CSS */}
        <div className="w-full sm:w-/2 md:w-1/2 lg:w-1/4 flex items-center justify-center animate-bounce-delay-2"> {/* Updated */}
          <Image
            src="/images/tailwindcss.svg"
            alt="Tailwind CSS icon"
            width={140}
            height={140}
            style={{ transition: 'transform 0.3s ease' }}
            className="hover:scale-125"
          />
        </div>

        {/* Node.js */}
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 flex items-center justify-center animate-bounce-delay-1"> {/* Updated */}
          <Image
            src="/images/nodejs.svg"
            alt="Node.js icon"
            width={180}
            height={140}
            style={{ transition: 'transform 0.3s ease' }}
            className="hover:scale-125"
          />
        </div>

        {/* Express.js */}
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 flex items-center justify-center animate-bounce-delay-1 icon-white"> {/* Updated */}
          <Image
            src="/images/expressjs.svg"
            alt="Express.js icon"
            width={140}
            height={140}
            style={{ transition: 'transform 0.3s ease' }}
            className="hover:scale-125"
          />
        </div>

        {/* MySQL */}
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 flex items-center justify-center animate-bounce-delay-2"> {/* Updated */}
          <Image
            src="/images/mysql.svg"
            alt="MySQL icon"
            width={140}
            height={140}
            style={{ transition: 'transform 0.3s ease' }}
            className="hover:scale-125"
          />
        </div>

        {/* GitHub */}
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 flex items-center justify-center animate-bounce-delay-1 icon-white"> {/* Updated */}
          <Image
            src="/images/github.svg"
            alt="GitHub icon"
            width={140}
            height={140}
            style={{ transition: 'transform 0.3s ease' }}
            className="hover:scale-125"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
