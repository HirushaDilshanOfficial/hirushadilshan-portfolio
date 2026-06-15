"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface CardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  hoverEffect?: boolean;
  glowEffect?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className = "", children, hoverEffect = true, glowEffect = false, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={`relative group rounded-2xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10 ${
          hoverEffect ? "hover:border-indigo-500/30 transition-colors duration-500" : ""
        } ${className}`}
        whileHover={hoverEffect ? { y: -5 } : {}}
        {...props}
      >
        {glowEffect && (
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        )}
        <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col">
          {children}
        </div>
      </motion.div>
    );
  }
);

Card.displayName = "Card";
