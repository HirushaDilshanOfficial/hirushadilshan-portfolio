"use client";

import React from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Sparkles, Download } from "lucide-react";
import { FaReact, FaNodeJs, FaAws, FaDocker, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiTypescript, SiNextdotjs } from "react-icons/si";

export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  const floatingIcons = [
    { Icon: FaReact, color: "#61DAFB", size: 40, delay: 0, top: "20%", left: "10%" },
    { Icon: SiNextdotjs, color: "#ffffff", size: 35, delay: 0.2, top: "15%", right: "15%" },
    { Icon: SiTypescript, color: "#3178C6", size: 45, delay: 0.5, bottom: "25%", left: "15%" },
    { Icon: FaNodeJs, color: "#339933", size: 38, delay: 0.8, bottom: "30%", right: "10%" },
    { Icon: FaAws, color: "#FF9900", size: 42, delay: 1.2, top: "45%", left: "5%" },
    { Icon: FaDocker, color: "#2496ED", size: 36, delay: 1.5, top: "50%", right: "8%" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Immersive Background */}
      <div className="absolute inset-0 z-0 bg-[#020817]">
        {/* Animated grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]" />
        
        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 z-10 pointer-events-none hidden lg:block overflow-hidden max-w-7xl mx-auto w-full">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute opacity-30 drop-shadow-2xl"
            style={{ top: item.top, left: item.left, right: item.right, bottom: item.bottom }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 6 + index,
              repeat: Infinity,
              ease: "easeInOut",
              delay: item.delay,
            }}
          >
            <item.Icon size={item.size} color={item.color} />
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-20 flex flex-col items-center justify-center text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          {/* Availability Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 cursor-pointer hover:bg-white/10 transition-colors group"
          >
            <Sparkles className="text-indigo-400 group-hover:text-cyan-400 transition-colors" size={16} />
            <span className="text-sm font-medium text-slate-300">
              {personalInfo.availability}
            </span>
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse ml-2" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-8xl font-extrabold font-syne mb-6 tracking-tight leading-[1.1]"
          >
            <span className="text-white block mb-2 text-3xl sm:text-4xl md:text-5xl">Hello, I&apos;m</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400 relative inline-block py-2">
              {personalInfo.name}
              {/* Shine effect on text */}
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "200%" }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 5, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 mix-blend-overlay"
              />
            </span>
          </motion.h1>

          {/* Role / Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-2xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            I&apos;m an <span className="text-indigo-300 font-medium">IT Undergraduate @ <a href="https://www.sliit.lk/" target="_blank" rel="noreferrer" className="text-white hover:text-indigo-200 underline decoration-indigo-500/50 underline-offset-4 transition-colors">SLIIT</a> | DevOps Enthusiast</span>. {personalInfo.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full mt-6">
            <a 
              href="#projects"
              className="flex items-center justify-center w-full sm:w-auto h-14 px-10 text-lg font-bold rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-[0_0_30px_rgba(99,102,241,0.5)] hover:shadow-[0_0_40px_rgba(99,102,241,0.7)] hover:-translate-y-1 transition-all duration-300"
            >
              View My Work
              <ArrowRight className="ml-2" />
            </a>
            
            <a 
              href={personalInfo.resume} 
              download="Hirusha_Dilshan_Resume.pdf"
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center justify-center w-full sm:w-auto h-14 px-10 text-lg font-bold rounded-full bg-white text-slate-950 shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] hover:bg-slate-100 hover:-translate-y-1 transition-all duration-300"
            >
              <Download className="mr-2" size={22} />
              Download Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex items-center gap-6 mt-10">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="p-3 bg-white/10 border border-white/20 rounded-full text-white hover:bg-white/20 hover:scale-110 transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]">
              <FaGithub size={28} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="p-3 bg-white/10 border border-white/20 rounded-full text-[#0a66c2] hover:bg-white/20 hover:scale-110 transition-all shadow-[0_0_15px_rgba(10,102,194,0.2)] hover:shadow-[0_0_25px_rgba(10,102,194,0.4)]">
              <FaLinkedin size={28} />
            </a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};
