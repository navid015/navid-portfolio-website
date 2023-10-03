import React from "react";
import '../globals.css';
import Link from "next/link";


const Footer = () => {
  return (
    
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white items-center">
      <div className="container p-12 px-0 flex justify-between">
        <Link href={"/"} className='glowing-link text-2xl md:text-5xl text-white font-semibold'>
                  NY
        </Link>
        <p className="text-slate-600">Copyright © Navid Yousuf</p>
      </div>
    </footer>
    
  );
};

export default Footer;
