"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  align = "left",
  className = "",
}) => {
  const alignmentClass =
    align === "center" ? "text-center" : align === "right" ? "text-right" : "text-left";

  return (
    <div className={`mb-16 ${alignmentClass} ${className}`}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="font-syne text-3xl md:text-5xl font-bold mb-4"
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-indigo-100 to-indigo-400">
          {title}
        </span>
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto md:mx-0"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 mt-6 rounded-full ${
          align === "center" ? "mx-auto w-24" : align === "right" ? "ml-auto w-24" : "w-24"
        }`}
      />
    </div>
  );
};
