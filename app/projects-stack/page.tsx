import type { Metadata } from "next";
import ScrollStack from "../components/ScrollStack";
import { projectSummaries } from "../data/projects";

export const metadata: Metadata = {
  title: "Projects Stack — Gokul G",
  description:
    "Interactive scroll-through showcase of Gokul G's projects including MyAnimeTracker, RAG Assistant, StudyPro, and ML models.",
};

export default function ProjectsStackPage() {
  return (
    <section className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full bg-gradient-to-br from-emerald-500/5 to-cyan-500/5" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-32 text-center">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border border-emerald-200/20 bg-emerald-300/10 px-4 py-2 text-sm font-semibold text-emerald-200">
              🚀 Interactive Experience
            </div>

            <h1 className="text-5xl font-bold text-white md:text-7xl">
              Projects in
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                {" "}
                Motion
              </span>
            </h1>

            <p className="mx-auto max-w-2xl text-xl text-slate-300">
              Scroll through my development journey. Each project tells a story
              of innovation, technical growth, and problem-solving with modern
              technologies.
            </p>

            <div className="flex items-center justify-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">
                  {projectSummaries.length}
                </div>
                <div className="text-sm text-slate-400">Projects</div>
              </div>
              <div className="h-8 w-px bg-slate-600" />
              <div className="text-center">
                <div className="text-2xl font-bold text-white">3</div>
                <div className="text-sm text-slate-400">Tech Areas</div>
              </div>
              <div className="h-8 w-px bg-slate-600" />
              <div className="text-center">
                <div className="text-2xl font-bold text-white">12+</div>
                <div className="text-sm text-slate-400">Technologies</div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <div className="flex flex-col items-center space-y-2 text-slate-400">
              <span className="text-sm">Scroll to explore</span>
              <div className="h-6 w-px bg-gradient-to-b from-slate-400 to-transparent animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Banner */}
      <div className="mx-auto max-w-6xl px-6 py-4">
        <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/5 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-cyan-200">
                📐 Prefer the grid layout?
              </p>
              <p className="text-xs text-slate-400">
                Compare both project presentations
              </p>
            </div>
            <a
              href="/projects"
              className="rounded-full bg-cyan-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-cyan-400"
            >
              ← View Grid Layout
            </a>
          </div>
        </div>
      </div>

      {/* Projects Scroll Stack */}
      <ScrollStack projects={projectSummaries} />

      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to collaborate?
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Let&apos;s build something amazing together. I&apos;m available for
            frontend development, mobile app projects, and AI/ML integrations.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center rounded-full bg-emerald-500 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-emerald-400 hover:scale-105"
            >
              Get in touch
            </a>
            <a
              href="mailto:massgokul592@gmail.com"
              className="inline-flex items-center rounded-full border border-white/20 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-white/10"
            >
              Send email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
