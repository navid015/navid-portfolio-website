"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import '../globals.css';
import profile_picture from "../../public/images/navid.png";
//import Home from '../page';




const HeroSection = ({ scrollToEmailSection }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (you can adjust the delay duration as needed)
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the delay duration as needed

    return () => clearTimeout(delay);
  }, []);
  return (
    <section className='lg:py-16'>
      <div className='grid grid-cols-1 lg:grid-cols-12'>
        <div className='col-span-7  place-self-center text-center sm:text-left justify-self-start'>
          
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
              Hello, I&apos;m {" "}
            </span>
            <br />
            {isLoading ? (
          <span className='text-[#66def9]'>Navid</span>
        ) : (
          <TypeAnimation
            sequence={[
              'Navid',
              100,
              'A Front-End Developer',
              100
            ]}
            className='text-[#66def9]'
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        )}
          </h1>

          <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl'>
            “Climb mountains not so the world can see you, but so you can see the world.”
          </p>

          <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl font-bold mb-6'>
            - David McCullough Jr.
          </p>
          <div>
            <button onClick={scrollToEmailSection} className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white'>
              Hire Me
            </button>
            <a href="/files/Resume of Navid.pdf" target="_blank">
              <button className='px-1 py-1 w-full sm:w-fit rounded-full  bg-transparent hover:bg-slate-800 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white  mt-3'>
                <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
              </button>
              </a>
          </div>
        </div>
        <div initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.5}} className='col-span-5 place-self-center mt-4 lg:mt-0'>
          <div className='w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative animate-float'>
            <Image
              src={profile_picture}
              alt="navid image"
              width={300}
              height={300}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              placeholder='blur'
             
            />
          </div>
        </div>
      </div>

    </section>
  )
}

export default HeroSection;