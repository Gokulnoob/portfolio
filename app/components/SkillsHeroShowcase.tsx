"use client";

import { useState, useEffect } from "react";

const skillHighlights = [
  { name: "React", icon: "⚛️", color: "from-blue-400 to-cyan-400" },
  { name: "Flutter", icon: "📱", color: "from-blue-500 to-indigo-500" },
  { name: "Python", icon: "🐍", color: "from-yellow-400 to-orange-400" },
  { name: "AI/ML", icon: "🤖", color: "from-purple-400 to-pink-400" },
  { name: "TypeScript", icon: "🔷", color: "from-blue-600 to-blue-400" },
  { name: "Next.js", icon: "▲", color: "from-gray-600 to-gray-400" },
];

export default function SkillsHeroShowcase() {
  const [currentSkill, setCurrentSkill] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skillHighlights.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {/* Main skill display */}
      <div className="text-center mb-8">
        <div className="text-6xl mb-4 animate-bounce">
          {skillHighlights[currentSkill].icon}
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">
          {skillHighlights[currentSkill].name}
        </h3>
        <div
          className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r opacity-80"
          style={{
            background: `linear-gradient(to right, ${skillHighlights[currentSkill].color})`,
          }}
        />
      </div>

      {/* Skill grid */}
      <div className="grid grid-cols-3 gap-4">
        {skillHighlights.map((skill, index) => (
          <div
            key={skill.name}
            className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
              index === currentSkill
                ? "border-emerald-400/60 bg-emerald-500/10 scale-105"
                : "border-slate-700/50 bg-slate-900/50 hover:border-slate-600 hover:bg-slate-800/50"
            }`}
            onClick={() => setCurrentSkill(index)}
          >
            <div className="text-center">
              <div className="text-2xl mb-2">{skill.icon}</div>
              <div className="text-sm font-medium text-white">{skill.name}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Progress indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {skillHighlights.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSkill
                ? "bg-emerald-400 w-8"
                : "bg-slate-600 hover:bg-slate-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
