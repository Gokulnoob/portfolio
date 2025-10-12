"use client";

import { useEffect, useRef } from "react";

export default function SkillsOrbit({ nodes }: { nodes: string[] }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) {
      return undefined;
    }

    const circles = Array.from(
      root.querySelectorAll<HTMLDivElement>("[data-skill]")
    );

    let frame = 0;
    let tick = 0;

    const animate = () => {
      const rect = root.getBoundingClientRect();
      const radius = Math.min(rect.width, rect.height) * 0.32;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      tick += 0.01;
      circles.forEach((circle, index) => {
        const angle = tick + (index / circles.length) * Math.PI * 2;
        const x = centerX + Math.cos(angle) * radius - circle.offsetWidth / 2;
        const y = centerY + Math.sin(angle) * radius - circle.offsetHeight / 2;
        circle.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      });

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    const handleResize = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", handleResize);
    };
  }, [nodes.length]);

  return (
    <div
      ref={rootRef}
      className="relative h-64 w-full overflow-hidden rounded-2xl border border-white/10 bg-white/10"
    >
      <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/10 text-xs font-semibold text-emerald-100">
        You
      </div>
      {nodes.map((node) => (
        <div
          key={node}
          data-skill
          className="absolute flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 text-[0.65rem] font-medium text-slate-100 shadow-[0_0_15px_rgba(16,185,129,0.3)]"
        >
          {node}
        </div>
      ))}
    </div>
  );
}
