"use client";

import { useEffect, useMemo, useState } from "react";

import SkillsOrbit from "./SkillsOrbit";
import SkillsRow from "./SkillsRow";

export default function SkillsShowcase({ skills }: { skills: string[] }) {
  const [mode, setMode] = useState<"row" | "orbit">("row");
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const uniqueSkills = useMemo(
    () => Array.from(new Set(skills.filter(Boolean))),
    [skills]
  );

  if (uniqueSkills.length === 0) {
    return null;
  }

  if (reduceMotion) {
    return (
      <ul className="grid gap-3 rounded-2xl border border-white/10 bg-white/10 p-6 text-sm text-slate-100">
        {uniqueSkills.map((skill) => (
          <li key={skill} className="flex items-center gap-3">
            <span aria-hidden>▹</span>
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="space-y-4">
      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 p-1">
        <button
          type="button"
          onClick={() => setMode("row")}
          className={`rounded-full px-4 py-1 text-xs font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-200 ${
            mode === "row"
              ? "bg-emerald-300/20 text-emerald-100"
              : "text-slate-300 hover:text-emerald-100"
          }`}
          aria-pressed={mode === "row"}
        >
          Flow row
        </button>
        <button
          type="button"
          onClick={() => setMode("orbit")}
          className={`rounded-full px-4 py-1 text-xs font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-200 ${
            mode === "orbit"
              ? "bg-emerald-300/20 text-emerald-100"
              : "text-slate-300 hover:text-emerald-100"
          }`}
          aria-pressed={mode === "orbit"}
        >
          Orbit
        </button>
      </div>

      {mode === "row" ? (
        <SkillsRow skills={uniqueSkills} />
      ) : (
        <SkillsOrbit nodes={uniqueSkills} />
      )}
    </div>
  );
}
