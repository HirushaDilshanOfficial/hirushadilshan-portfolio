"use client";

import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ value }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  
  const match = value.match(/^(\d+)(.*)$/);
  const targetNumber = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";

  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView && match) {
      const controls = animate(count, targetNumber, {
        duration: 2.5,
        ease: [0.22, 1, 0.36, 1], // Custom ease-out function
      });
      return controls.stop;
    }
  }, [count, targetNumber, isInView, match]);

  if (!match) return <span ref={ref}>{value}</span>;

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};
