"use client";

import { useEffect, useRef, useState } from "react";
import { skills, techStack } from "@/data/portfolio";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Cpu, Globe, Server, Zap } from "lucide-react";

const categories = [
  { key: "languages", label: "Languages", icon: <Cpu size={16} />, color: "#6366f1" },
  { key: "frontend", label: "Frontend", icon: <Globe size={16} />, color: "#22d3ee" },
  { key: "backend", label: "Backend", icon: <Server size={16} />, color: "#f59e0b" },
];

function SkillBar({ name, level, color, index }: { name: string; level: number; color: string; index: number }) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => setWidth(level), index * 100);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [level, index]);

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-slate-300">{name}</span>
        <span className="text-xs font-bold text-slate-400">{level}%</span>
      </div>
      <div className="skill-bar">
        <div
          className="skill-bar-fill"
          style={{
            width: `${width}%`,
            background: `linear-gradient(90deg, ${color}, ${color}99)`,
            transition: `width 1.2s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("languages");
  const currentSkills = skills[activeCategory as keyof typeof skills];

  return (
    <section id="skills" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-4">
            <Zap size={14} />
            Technical Skills
          </div>
          <h2 className="section-title">
            My <span className="gradient-text">Tech Arsenal</span>
          </h2>
          <p className="section-subtitle mt-4 max-w-xl mx-auto">
            Years of hands-on experience with modern technologies across the full stack.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Skill bars */}
          <ScrollReveal direction="left">
            <div className="glass-card rounded-3xl p-8">
              {/* Category tabs */}
              <div className="flex gap-2 mb-8 p-1 rounded-2xl bg-white/5">
                {categories.map((cat) => (
                  <button
                    key={cat.key}
                    id={`skills-tab-${cat.key}`}
                    onClick={() => setActiveCategory(cat.key)}
                    className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                      activeCategory === cat.key
                        ? "bg-white/10 text-white shadow-sm"
                        : "text-slate-400 hover:text-white"
                    }`}
                    style={activeCategory === cat.key ? { color: cat.color } : {}}
                  >
                    {cat.icon}
                    <span className="hidden sm:inline">{cat.label}</span>
                  </button>
                ))}
              </div>

              {/* Skill bars */}
              <div className="space-y-6">
                {currentSkills.map((skill, i) => (
                  <SkillBar
                    key={`${activeCategory}-${skill.name}`}
                    name={skill.name}
                    level={skill.level}
                    color={categories.find((c) => c.key === activeCategory)?.color || "#6366f1"}
                    index={i}
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Tech Stack Grid */}
          <ScrollReveal direction="right">
            <div>
              <h3 className="text-xl font-bold text-white mb-6 font-display">
                Full Tech Stack
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                {techStack.map((tech, i) => (
                  <div
                    key={tech.name}
                    className="glass-card glass-card-hover rounded-2xl p-4 flex flex-col items-center gap-2 group cursor-default"
                    style={{ animationDelay: `${i * 50}ms` }}
                  >
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: tech.color, boxShadow: `0 0 8px ${tech.color}60` }}
                    />
                    <span className="text-xs font-medium text-slate-300 group-hover:text-white transition-colors text-center">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Core values */}
              <div className="mt-8 space-y-3">
                {[
                  { label: "Clean Code & SOLID Principles", pct: 98 },
                  { label: "System Design & Architecture", pct: 92 },
                  { label: "Performance Optimization", pct: 95 },
                  { label: "Team Leadership & Mentoring", pct: 90 },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div
                      className="w-2 h-2 rounded-full bg-indigo-400 flex-shrink-0"
                      style={{ boxShadow: "0 0 6px rgba(99,102,241,0.7)" }}
                    />
                    <span className="text-sm text-slate-300 flex-1">{item.label}</span>
                    <span className="text-xs font-bold text-indigo-400">{item.pct}%</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
