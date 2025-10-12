import type { Metadata } from "next";
import Image from "next/image";
import InteractiveTimeline, {
  type TimelineItem,
} from "../components/InteractiveTimeline";
import AboutNavigation from "../components/AboutNavigation";
import ExpandableSection from "../components/ExpandableSection";

export const metadata: Metadata = {
  title: "About — Gokul G",
  description:
    "Learn about Gokul G's journey as a developer, from computer science foundations to AI/ML expertise, and the passion that drives innovative solutions.",
};

const timelineItems: TimelineItem[] = [
  {
    year: "2025",
    title: "MCA Graduation & AI/ML Mastery",
    description:
      "Completed Master of Computer Applications degree while simultaneously undertaking a 6-week intensive AI/ML internship at Edunet Foundation (AICTE-approved). Specialized in RAG systems, vector databases, and practical machine learning implementations. This period marked my transition from traditional development to AI-powered applications.",
  },
  {
    year: "2024",
    title: "Full-Stack Development & Innovation",
    description:
      "A pivotal year of hands-on development, creating MyAnimeTracker (Flutter app with offline capabilities), RAG Assistant with Google Gemini integration, and StudyPro career guidance platform. Mastered React ecosystem, Firebase backend services, and modern deployment practices with Vercel.",
  },
  {
    year: "2024",
    title: "BCA  & Mentorship",
    description:
      "Graduated with Bachelor of Computer Applications, building strong foundations in algorithms, data structures, and software engineering principles. Began mentoring junior students in React fundamentals and Flutter development, discovering a passion for knowledge sharing.",
  },
  {
    year: "2022",
    title: "Programming Foundation",
    description:
      "Started the journey into web development with HTML, CSS, and JavaScript. Built first interactive websites and discovered the joy of bringing ideas to life through code. This year sparked the passion for creating user-centric digital experiences.",
  },
];

// Core values and development philosophy
const coreValues = [
  {
    icon: "🎯",
    title: "User-Centric Design",
    description:
      "Every line of code serves a purpose - enhancing user experience and solving real problems.",
  },
  {
    icon: "🚀",
    title: "Continuous Learning",
    description:
      "Technology evolves rapidly. I stay ahead by embracing new tools, frameworks, and methodologies.",
  },
  {
    icon: "⚡",
    title: "Performance First",
    description:
      "Beautiful interfaces mean nothing if they're slow. I optimize for speed, accessibility, and scalability.",
  },
  {
    icon: "🤝",
    title: "Collaborative Growth",
    description:
      "The best solutions emerge from diverse perspectives. I believe in knowledge sharing and mentorship.",
  },
];

// Technical interests and future exploration
const currentInterests = [
  {
    name: "AI/ML Integration",
    progress: 85,
    focus: "RAG systems, vector databases",
  },
  { name: "Mobile Development", progress: 90, focus: "Flutter, React Native" },
  { name: "Web3 & Blockchain", progress: 45, focus: "DApps, smart contracts" },
  {
    name: "DevOps & Infrastructure",
    progress: 60,
    focus: "CI/CD, containerization",
  },
];

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:px-10">
      {/* Hero Section */}
      <header className="mb-16 text-center">
        <p className="text-caption text-xs uppercase tracking-[0.4em] text-emerald-200/70 mb-4 font-medium">
          About Me
        </p>
        <h1 className="text-display text-4xl font-extrabold text-white md:text-6xl mb-6 tracking-tight leading-tight">
          Building tomorrow&apos;s digital experiences
        </h1>
        <div className="prose prose-wide mx-auto">
          <p className="text-body text-lg text-slate-300/90 mb-8 leading-relaxed">
            I&apos;m Gokul G, a passionate developer who bridges the gap between
            creative design and technical excellence. Specializing in{" "}
            <strong className="text-emerald-300 font-semibold">React</strong>,{" "}
            <strong className="text-emerald-300 font-semibold">Flutter</strong>,
            and{" "}
            <strong className="text-emerald-300 font-semibold">AI/ML</strong>, I
            craft solutions that are both beautiful and functional.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="relative">
            <Image
              src="/profile.jpg"
              alt="Profile photo of Gokul G"
              width={160}
              height={160}
              className="rounded-full border-4 border-emerald-300/50 shadow-xl"
              loading="lazy"
            />
            <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-white rounded-full p-2">
              <span className="text-sm">👋</span>
            </div>
          </div>
        </div>
      </header>

      <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr]">
        <article className="space-y-12">
          {/* Quick Summary */}
          <section className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl p-6 border border-emerald-300/20">
            <h2 className="text-headline text-2xl font-bold text-white mb-4 flex items-center gap-2 tracking-tight">
              <span>✨</span> At a Glance
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div className="space-y-3">
                <p className="text-body text-slate-300 leading-relaxed">
                  <strong className="text-emerald-300 font-semibold">
                    Journey:
                  </strong>{" "}
                  Started coding in 2022, now specializing in React, Flutter,
                  and AI/ML
                </p>
                <p className="text-body text-slate-300 leading-relaxed">
                  <strong className="text-emerald-300 font-semibold">
                    Education:
                  </strong>{" "}
                  passionate MCA student (2025) with AICTE AI/ML certification
                </p>
              </div>
              <div className="space-y-3">
                <p className="text-body text-slate-300 leading-relaxed">
                  <strong className="text-emerald-300 font-semibold">
                    Focus:
                  </strong>{" "}
                  Building AI-powered applications and mentoring developers
                </p>
                <p className="text-body text-slate-300 leading-relaxed">
                  <strong className="text-emerald-300 font-semibold">
                    Notable:
                  </strong>{" "}
                  Created MyAnimeTracker, RAG Assistant, and StudyPro
                </p>
              </div>
            </div>
          </section>

          {/* My Story - Expandable */}
          <ExpandableSection
            title="My Story"
            icon="📖"
            summary="From a simple HTML page in 2022 to AI/ML expertise today — discover the journey that shaped my passion for creating meaningful digital experiences."
            defaultExpanded={false}
          >
            <div className="space-y-4 text-slate-300/90">
              <p className="text-base leading-relaxed">
                My journey began in <strong className="text-white">2022</strong>{" "}
                with a simple HTML page, but it quickly evolved into a passion
                for creating meaningful digital experiences. What started as
                curiosity about how websites work has transformed into a
                comprehensive skill set spanning{" "}
                <strong className="text-emerald-300">
                  frontend development
                </strong>
                ,
                <strong className="text-emerald-300">
                  {" "}
                  mobile applications
                </strong>
                , and
                <strong className="text-emerald-300"> AI/ML integration</strong>
                .
              </p>
              <p className="text-base leading-relaxed">
                During my academic years, I didn&apos;t just study computer
                science—I lived it. While completing my{" "}
                <strong className="text-white">BCA</strong> and later
                <strong className="text-white"> MCA</strong>, I was building
                real projects, mentoring peers, and exploring emerging
                technologies. This hands-on approach led to the creation of
                applications like MyAnimeTracker, RAG Assistant, and StudyPro.
              </p>
              <p className="text-base leading-relaxed">
                The turning point came during my{" "}
                <strong className="text-emerald-300">
                  AICTE-approved AI/ML internship
                </strong>{" "}
                at Edunet Foundation, where I discovered the power of artificial
                intelligence in solving complex problems. This experience opened
                new horizons and shaped my current focus on building AI-powered
                applications that make technology more accessible and
                intelligent.
              </p>
            </div>
          </ExpandableSection>

          {/* Development Philosophy & Values - Expandable */}
          <ExpandableSection
            title="Development Philosophy"
            icon="🎯"
            summary="User-centric design, continuous learning, performance-first approach, and collaborative growth — the four pillars guiding my development approach."
          >
            <p className="text-slate-300/80 mb-6">
              My approach to development is guided by core principles that
              ensure every project delivers real value while maintaining
              technical excellence.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              {coreValues.map((value) => (
                <div
                  key={value.title}
                  className="group p-6 rounded-xl border border-slate-700/50 bg-slate-900/30 hover:bg-slate-800/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-sm text-slate-300/80 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </ExpandableSection>

          {/* Learning Journey - Always Expanded */}
          <section id="journey" className="space-y-6">
            <h2 className="text-3xl font-semibold text-white flex items-center gap-3">
              <span>🚀</span>
              Learning Journey
            </h2>
            <p className="text-slate-300/80">
              Every milestone in my journey has contributed to who I am as a
              developer today. Here&apos;s how my expertise evolved over time.
            </p>
            <InteractiveTimeline items={timelineItems} />
          </section>

          {/* Current Interests - Expandable */}
          <ExpandableSection
            title="What I'm Exploring"
            icon="🔬"
            summary="AI/ML Integration (85%), Mobile Development (90%), Web3 & Blockchain (45%), DevOps & Infrastructure (60%) — my current learning focus areas."
          >
            <p className="text-slate-300/80 mb-6">
              Technology never stops evolving, and neither do I. Here are the
              areas I&apos;m currently diving deep into and my progress in each
              domain.
            </p>
            <div className="space-y-4">
              {currentInterests.map((interest) => (
                <div key={interest.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-white font-medium">{interest.name}</h4>
                    <span className="text-xs text-slate-400">
                      {interest.progress}%
                    </span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 rounded-full transition-all duration-1000"
                      style={{ width: `${interest.progress}%` }}
                    />
                  </div>
                  <p className="text-xs text-slate-500">{interest.focus}</p>
                </div>
              ))}
            </div>
          </ExpandableSection>
        </article>

        {/* Enhanced Sidebar */}
        <aside className="space-y-6">
          {/* Quick Facts */}
          <div className="rounded-2xl border border-slate-700/50 bg-slate-900/50 p-6">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span>📋</span> Quick Facts
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <span className="text-emerald-300">📍</span>
                <span className="text-slate-300">Tamil Nadu, India</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-emerald-300">🎓</span>
                <span className="text-slate-300">Pursuing MCA (2025)</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-emerald-300">�</span>
                <span className="text-slate-300">Open to opportunities</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-emerald-300">⚡</span>
                <span className="text-slate-300">Full-Stack + AI/ML</span>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="rounded-2xl border border-slate-700/50 bg-slate-900/50 p-6">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span>🛠️</span> Favorite Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Flutter",
                "Python",
                "Firebase",
                "Tailwind",
                "Gemini AI",
              ].map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center rounded-lg bg-emerald-500/20 px-3 py-1 text-xs font-medium text-emerald-200 border border-emerald-400/40"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Recent Achievements */}
          <div className="rounded-2xl border border-slate-700/50 bg-slate-900/50 p-6">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span>🏆</span> Recent Wins
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <span className="text-emerald-300 mt-0.5">🎯</span>
                <div>
                  <p className="text-white font-medium">
                    AICTE AI/ML Certification
                  </p>
                  <p className="text-slate-400 text-xs">
                    6-week intensive program
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-emerald-300 mt-0.5">📱</span>
                <div>
                  <p className="text-white font-medium">
                    MyAnimeTracker Launch
                  </p>
                  <p className="text-slate-400 text-xs">
                    Flutter app with 1K+ users
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-emerald-300 mt-0.5">🤖</span>
                <div>
                  <p className="text-white font-medium">RAG Assistant</p>
                  <p className="text-slate-400 text-xs">
                    AI-powered Q&A system
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="rounded-2xl border border-emerald-300/30 bg-emerald-500/10 p-6">
            <h3 className="text-xl font-semibold text-white mb-3">
              Let&apos;s Build Something Amazing
            </h3>
            <p className="text-sm text-slate-300 mb-4">
              Have an interesting project or opportunity? I&apos;d love to hear
              about it and explore how we can work together.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-emerald-400 hover:scale-105"
              >
                Get In Touch
              </a>
              <a
                href="/projects"
                className="inline-flex items-center justify-center rounded-full border border-slate-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-slate-800"
              >
                View My Work
              </a>
            </div>
          </div>
        </aside>
      </div>

      {/* Floating Navigation */}
      <AboutNavigation />
    </section>
  );
}
