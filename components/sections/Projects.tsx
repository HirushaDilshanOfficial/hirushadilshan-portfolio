"use client";

import React from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="Some of my best work, showcasing my skills in action." 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col p-0 overflow-hidden group">
                <div className="relative h-64 overflow-hidden bg-slate-800">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020817] to-transparent z-10 opacity-60" />
                  
                  {/* Project Image or Placeholder */}
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-slate-900 flex items-center justify-center text-4xl group-hover:scale-105 transition-transform duration-700">
                       {project.title.charAt(0)}
                    </div>
                  )}

                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-semibold text-white border border-white/20">
                      {project.category}
                    </span>
                  </div>
                  
                  <div className="absolute top-4 right-4 z-20 flex gap-2">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="p-2 bg-black/50 hover:bg-black/80 backdrop-blur-md rounded-full text-white transition-colors">
                        <FaGithub size={16} />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noreferrer" className="p-2 bg-indigo-500/80 hover:bg-indigo-500 backdrop-blur-md rounded-full text-white transition-colors">
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow relative">
                  {/* Decorative line */}
                  <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mb-6 flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="text-xs font-medium text-indigo-300 bg-indigo-500/10 px-2 py-1 rounded-md">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-3 pt-4 border-t border-white/5">
                      {project.metrics.map((metric, i) => (
                        <div key={i} className="flex items-center gap-1 text-xs text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: project.color }} />
                          {metric}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
