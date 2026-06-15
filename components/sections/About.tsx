"use client";

import React from "react";
import { motion } from "framer-motion";
import { personalInfo, stats, skills, techStack } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Terminal, Database, Layout, Code2 } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionHeading title="About Me" subtitle="A brief introduction to who I am and what I do." />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col gap-10"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">The journey so far</h3>
              <p className="text-slate-200 text-lg leading-relaxed mb-8">
                {personalInfo.bio}
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-2">
                {stats.map((stat, index) => (
                  <div key={index} className="flex flex-col gap-2">
                    <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 font-syne">
                      <AnimatedCounter value={stat.value} />
                    </span>
                    <span className="text-sm text-slate-400 uppercase tracking-wider">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* My Toolkit */}
            <Card className="bg-indigo-500/5 border-indigo-500/20">
              <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
                <Code2 className="text-indigo-400" /> My Toolkit
              </h3>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-slate-300"
                  >
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: tech.color }}
                    />
                    {tech.name}
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5"
          >
            {/* Profile Image */}
            <div className="relative w-full aspect-[4/5] max-w-md mx-auto lg:max-w-none rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(99,102,241,0.2)] border border-white/10 group mt-2">
              <div className="absolute inset-0 bg-indigo-500/20 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay" />
              <img 
                src="/profileImage.jpeg" 
                alt={personalInfo.name} 
                className="object-cover w-full h-full object-top group-hover:scale-105 transition-transform duration-700 ease-out" 
              />
            </div>
          </motion.div>
        </div>

        {/* Detailed Skills area */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SkillCategory title="Languages" items={skills.languages} icon={Terminal} delay={0.1} />
          <SkillCategory title="Frontend" items={skills.frontend} icon={Layout} delay={0.2} />
          <SkillCategory title="Backend" items={skills.backend} icon={Database} delay={0.3} />
        </div>
      </div>
    </section>
  );
};

const SkillCategory = ({ title, items, icon: Icon, delay }: { title: string, items: { name: string, level: number }[], icon: React.ElementType, delay: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Card glowEffect={true}>
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 rounded-lg bg-indigo-500/20 text-indigo-400">
            <Icon size={24} />
          </div>
          <h4 className="text-xl font-bold text-white">{title}</h4>
        </div>
        
        <div className="space-y-6">
          {items.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-300 font-medium">{skill.name}</span>
                <span className="text-indigo-400">{skill.level}%</span>
              </div>
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
};
