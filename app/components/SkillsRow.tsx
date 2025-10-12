"use client";

import { useEffect, useRef } from "react";

export default function SkillsRow({ skills }: { skills: string[] }) {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marqueeEl = marqueeRef.current;
    if (!marqueeEl) {
      return undefined;
    }

    let animationFrame = 0;
    let offset = 0;

    const step = () => {
      offset -= 0.6;
      if (Math.abs(offset) >= marqueeEl.scrollWidth / 2) {
        offset = 0;
      }
      marqueeEl.style.transform = `translate3d(${offset}px, 0, 0)`;
      animationFrame = requestAnimationFrame(step);
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [skills.length]);

  const duplicated = [...skills, ...skills];

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/10 p-4">
      <div
        ref={marqueeRef}
        className="flex gap-3 whitespace-nowrap"
        style={{ willChange: "transform" }}
      >
        {duplicated.map((skill, index) => (
          <span
            key={`${skill}-${index}`}
            className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-medium text-slate-100"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
