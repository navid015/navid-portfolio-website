"use client"
import React, {useState} from "react";
import Link from "next/link";
import Image from "next/image";
import '../globals.css'

const EmailSection = () => {
    const [loading, setLoading] = useState(false);
    const [messageSent, setMessageSent] = useState(false);
    const [emailSubmitted, setEmailSubmitted] = useState(false);

    async function handleSubmit(event) {
      event.preventDefault();
      setLoading(true);
  
      const data = new FormData(event.target);
      data.append("name", event.target.name.value);


  
      try {
        const response = await fetch("https://formspree.io/f/xknlpzkj", {
          method: "POST",
          body: data,
          headers: {
            Accept: "application/json",
          },
        });
  
        if (response.ok) {
          console.log("Message sent successfully");
          setMessageSent(true);
          setLoading(false);
          setEmailSubmitted(true);
          event.target.reset();
        } else {
          console.error("Error sending message");
          setLoading(false);
        }
      } catch (error) {
        console.error("Error sending message:", error);
        setLoading(false);
      }
    }
		  
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let`&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-4 icon-white">
          <Link href="github.com">
            <Image 
                src="/images/github.svg"
                alt="Github Icon" 
                width={30}
                height={30}
            />
          </Link>
          <Link href="linkedin.com">
            <Image src="/images/linkedin.svg"
            alt="Linkedin Icon" 
            width={30}
            height={30}
            />
          </Link>
        </div>
      </div>
      <div className="z-10">
        <form className="flex flex-col" onSubmit={handleSubmit}> 
        <div className="mb-6">
            <label
              htmlFor="name"
              className="text-white block mb-2 text-lg font-medium"
            >
              Your name
            </label>
            <input
              type="text"
              //id="name"
              name="name"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              //placeholder="Jacob"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-lg font-medium"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              //placeholder="jacob@google.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-lg mb-2 font-medium"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              //placeholder="Just saying hi"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-lg mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-base rounded-lg block w-full h-80 p-2.5"
              //placeholder="Let's talk about..."
            />
          </div>
          <button
            type="submit"
            className="bg-pink-600 hover:bg-blue-600 text-white font-medium py-2.5 px-5 rounded-lg w-full text-lg"
          >
            Send Message
          </button>
          {
            emailSubmitted && (

                <p className="text-green-300 text-lg mt-4">
                    Thank you for contacting me. I'll get back to you as soon as possible.
                </p>
            )
          }
        </form>
      </div>
    </section>
  );
};

export default EmailSection;