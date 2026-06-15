"use client";

import React from "react";
import { motion } from "framer-motion";
import { testimonials } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Quote, Star } from "lucide-react";

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-slate-900/30">
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading 
          title="Client Testimonials" 
          subtitle="What people say about working with me." 
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full relative pl-12">
                <div className="absolute top-8 left-0 -translate-x-1/2 p-3 bg-indigo-500 rounded-full text-white shadow-lg shadow-indigo-500/50">
                  <Quote size={20} className="fill-current" />
                </div>
                
                <div className="flex gap-1 text-yellow-500 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>

                <p className="text-slate-300 text-lg leading-relaxed mb-8 italic">
                  &quot;{testimonial.text}&quot;
                </p>

                <div className="flex items-center gap-4 mt-auto">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold text-white shadow-inner"
                    style={{ background: `linear-gradient(135deg, ${testimonial.color}, #020817)` }}
                  >
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{testimonial.name}</h4>
                    <p className="text-slate-400 text-sm">{testimonial.role}</p>
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
