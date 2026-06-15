"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = "",
      variant = "primary",
      size = "md",
      icon: Icon,
      iconPosition = "left",
      children,
      asChild,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-semibold transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-900";

    const variants = {
      primary:
        "bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 rounded-full",
      secondary:
        "bg-white/5 text-white hover:bg-white/10 border border-white/10 hover:border-white/20 backdrop-blur-sm rounded-full",
      outline:
        "border-2 border-indigo-500/50 text-indigo-400 hover:bg-indigo-500/10 hover:border-indigo-400 rounded-full",
      ghost: "text-slate-300 hover:text-white hover:bg-white/5 rounded-lg",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm gap-2",
      md: "px-6 py-3 text-base gap-2",
      lg: "px-8 py-4 text-lg gap-3",
    };

    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    return (
      <motion.button
        ref={ref}
        className={classes}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {Icon && iconPosition === "left" && <Icon size={size === "lg" ? 24 : 20} />}
        {children}
        {Icon && iconPosition === "right" && <Icon size={size === "lg" ? 24 : 20} />}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
