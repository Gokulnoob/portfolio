"use client";

import { useState, useEffect } from "react";

interface AnimatedSkillBarProps {
  skill: {
    name: string;
    level: number;
    experience: string;
    category: string;
  };
  delay?: number;
}

export default function AnimatedSkillBar({
  skill,
  delay = 0,
}: AnimatedSkillBarProps) {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimated(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className="space-y-2 group hover:scale-105 transition-transform duration-300">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-white group-hover:text-emerald-300 transition-colors">
          {skill.name}
        </span>
        <span className="text-xs text-slate-400 font-mono">
          {animated ? skill.level : 0}%
        </span>
      </div>

      <div className="h-2 bg-slate-800 rounded-full overflow-hidden relative">
        <div
          className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
          style={{
            width: animated ? `${skill.level}%` : "0%",
            transitionDelay: `${delay}ms`,
          }}
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
        </div>
      </div>

      <div className="flex items-center justify-between text-xs">
        <span className="text-slate-500 group-hover:text-slate-400 transition-colors">
          {skill.category}
        </span>
        <span className="text-slate-500 group-hover:text-emerald-400 transition-colors">
          {skill.experience}
        </span>
      </div>
    </div>
  );
}
