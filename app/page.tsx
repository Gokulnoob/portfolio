import Hero from "./components/Hero";
import BentoGrid from "./components/BentoGrid";
import AuroraCanvas from "./components/AuroraCanvas";
import Particles from "./components/Particles";
import Meteors from "./components/Meteors";

export default function Home() {
  return (
    <section id="top" className="relative overflow-hidden">
      <AuroraCanvas />
      <Particles />
      <Meteors />

      <div className="mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-6 pb-24 pt-28 md:px-12">
        <Hero />
        <div id="projects" className="pb-10">
          <BentoGrid />
        </div>
        <section
          id="about"
          className="grid gap-8 rounded-3xl border border-white/10 bg-white/10 p-8 text-slate-200 md:grid-cols-2"
        >
          <div className="space-y-4">
            <h2 className="text-headline text-2xl font-bold text-white tracking-tight">
              About
            </h2>
            <p className="text-body text-base leading-relaxed max-w-none">
              I&apos;m Gokul G, a passionate Frontend Developer and recent MCA
              graduate from Tamil Nadu, India. I specialize in creating digital
              experiences with React, Flutter, and AI/ML integrations. My
              journey includes hands-on projects like MyAnimeTracker, RAG
              Assistant, and StudyPro, backed by an AICTE-approved AI/ML
              internship at Edunet Foundation.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-title text-lg font-medium text-white tracking-tight">
              My Skills
            </h3>
            <ul className="space-y-3 text-sm leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-emerald-300 mt-0.5">•</span>
                <span>
                  <strong className="text-white font-medium">Frontend:</strong>{" "}
                  React, JavaScript, TypeScript, Next.js
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-300 mt-0.5">•</span>
                <span>
                  <strong className="text-white font-medium">Mobile:</strong>{" "}
                  Flutter, Dart, Firebase integration
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-300 mt-0.5">•</span>
                <span>
                  <strong className="text-white font-medium">AI/ML:</strong>{" "}
                  Python, Google Gemini, RAG systems
                </span>
              </li>
            </ul>
          </div>
        </section>

        <section
          id="contact"
          className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_25px_60px_rgba(15,23,42,0.45)]"
        >
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-white">
              Ready to work together?
            </h3>
            <p className="max-w-2xl text-sm text-slate-300/90">
              I&apos;m available for frontend development opportunities and
              exciting projects. Whether you&apos;re looking for React
              expertise, Flutter development, or AI/ML integration, let&apos;s
              discuss how we can work together.
            </p>
            <div className="flex flex-wrap gap-4">
              <a className="btn-primary" href="mailto:massgokul592@gmail.com">
                Email me
              </a>
              <a className="btn-ghost" href="/contact">
                Contact Page
              </a>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
