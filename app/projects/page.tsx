import type { Metadata } from "next";

import ScrollStack from "../components/ScrollStack";
import { projectSummaries } from "../data/projects";

export const metadata: Metadata = {
  title: "Projects — Gokul G",
  description:
    "Portfolio of projects by Gokul G including MyAnimeTracker, RAG Assistant, StudyPro, and ML models. React, Flutter, AI/ML expertise showcased.",
};

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:px-10">
      {/* Header */}
      <header className="space-y-6">
        <p className="text-caption text-xs uppercase tracking-[0.4em] text-emerald-200/70 font-medium">
          Projects & Skills
        </p>
        <h1 className="text-display text-4xl font-extrabold text-white md:text-5xl tracking-tight">
          Building the future with code.
        </h1>
        <div className="prose">
          <p className="text-body text-base text-slate-300/90 leading-relaxed">
            A showcase of my work spanning mobile apps, AI/ML solutions, and web
            applications. Each project demonstrates expertise in React, Flutter,
            Python, and emerging technologies.
          </p>
        </div>
      </header>

      <div className="mt-12">
        {/* Projects - Scroll Stack */}
        <ScrollStack projects={projectSummaries} />
      </div>
    </section>
  );
}
