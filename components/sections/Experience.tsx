"use client";

import React from "react";
import { motion } from "framer-motion";
import { experience } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export const Experience = () => {
  return (
    <section id="experience" className="py-24 relative bg-slate-900/50">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Work Experience" 
          subtitle="My professional journey and the impact I've made along the way." 
          align="center"
        />

        <div className="max-w-4xl mx-auto relative mt-20">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-cyan-500/50 to-transparent -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                } items-center gap-8`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-[#020817] border-2 border-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.5)] -translate-x-[7px] md:-translate-x-1/2 hidden md:block z-10" />

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                  <Card hoverEffect={true} className="relative overflow-hidden group">
                    {/* Top color bar */}
                    <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: exp.color }} />
                    
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                    <div className="text-lg text-indigo-400 font-medium mb-4 flex items-center gap-2">
                      <Briefcase size={18} />
                      {exp.company}
                    </div>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-slate-400 mb-6">
                      <span className="flex items-center gap-1">
                        <Calendar size={16} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={16} />
                        {exp.location}
                      </span>
                    </div>

                    <p className="text-slate-300 mb-6">{exp.description}</p>

                    <div className="space-y-2 mb-6">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-slate-400">
                          <span className="text-indigo-400 mt-1">▹</span>
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {exp.tech.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
