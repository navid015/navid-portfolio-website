"use client"

import { useRef } from 'react';
import HeroSection from './components/HeroSection';
import NavBar from './components/NavBar';
import AboutSection from './components/AboutSection';
import Skills from './components/Skills';
import ProjectsSection from './components/ProjectsSection';
import EmailSection from './components/EmailSection';
import Footer from './components/Footer';

export default function Home() {
  const emailSectionRef = useRef(null);

  const scrollToEmailSection = () => {
    if (emailSectionRef.current) {
      emailSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar />
      <div className="container mt-24 mx-auto px-12 py-8">
        <HeroSection scrollToEmailSection={scrollToEmailSection} />
        <AboutSection />
        <Skills />
        <ProjectsSection />
        <div ref={emailSectionRef}>
          <EmailSection />
        </div>
        <Footer />
      </div>
    </main>
  )
}
