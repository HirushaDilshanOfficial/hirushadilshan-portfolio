"use client";

import React from "react";
import { personalInfo } from "@/data/portfolio";
import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#020817] border-t border-white/10 pt-16 pb-8 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold font-syne text-white mb-2">
              Let&apos;s build something <span className="text-indigo-400">extraordinary</span> together.
            </h2>
            <p className="text-slate-400 max-w-md">
              Currently available for freelance work and full-time opportunities.
            </p>
          </div>

          <button 
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-white/10 hover:text-white transition-colors group"
          >
            <ArrowUp className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors">
              <FaGithub size={20} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors">
              <FaLinkedin size={20} />
            </a>
            <a href={personalInfo.twitter} target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
