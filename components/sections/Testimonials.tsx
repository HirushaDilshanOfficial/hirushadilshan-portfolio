"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { testimonials } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Quote, Star } from "lucide-react";

interface TestimonialType {
  name: string;
  role: string;
  avatar: string;
  text: string;
  rating: number;
  color: string;
}

const TestimonialCard = ({ testimonial, index }: { testimonial: TestimonialType, index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 150;
  const isLongText = testimonial.text.length > maxLength;
  const displayText = isExpanded ? testimonial.text : (isLongText ? `${testimonial.text.substring(0, maxLength)}...` : testimonial.text);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full relative pl-12 flex flex-col">
        <div className="absolute top-8 left-0 -translate-x-1/2 p-3 bg-indigo-500 rounded-full text-white shadow-lg shadow-indigo-500/50">
          <Quote size={20} className="fill-current" />
        </div>
        
        <div className="flex gap-1 text-yellow-500 mb-6">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} size={16} fill="currentColor" />
          ))}
        </div>

        <div className="text-slate-300 text-lg leading-relaxed mb-8 italic flex-grow whitespace-pre-wrap">
          &quot;{displayText}&quot;
          {isLongText && (
            <button 
              onClick={() => setIsExpanded(!isExpanded)} 
              className="ml-2 text-indigo-400 hover:text-indigo-300 font-medium text-sm not-italic focus:outline-none"
            >
              {isExpanded ? "See less" : "See more"}
            </button>
          )}
        </div>

        <div className="flex items-center gap-4 mt-auto pt-4">
          <div 
            className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold text-white shadow-inner flex-shrink-0"
            style={{ background: `linear-gradient(135deg, ${testimonial.color}, #020817)` }}
          >
            {testimonial.avatar}
          </div>
          <div>
            <h4 className="text-white font-bold leading-tight">{testimonial.name}</h4>
            <p className="text-slate-400 text-sm mt-1">{testimonial.role}</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

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
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
