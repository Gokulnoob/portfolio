import type { Metadata } from "next";
import SkillsRadar from "../components/SkillsRadar";
import AnimatedSkillBar from "../components/AnimatedSkillBar";
import SkillsHeroShowcase from "../components/SkillsHeroShowcase";

export const metadata: Metadata = {
  title: "Skills — Gokul G",
  description:
    "Technical skills and expertise of Gokul G. Proficient in React, Flutter, Python, AI/ML, and modern web technologies.",
};

// Comprehensive skill data
const skillCategories = {
  frontend: {
    title: "Frontend Development",
    icon: "🎨",
    skills: [
      { name: "React", level: 90, experience: "2+ years", category: "Library" },
      {
        name: "Next.js",
        level: 85,
        experience: "1.5+ years",
        category: "Framework",
      },
      {
        name: "TypeScript",
        level: 80,
        experience: "1+ year",
        category: "Language",
      },
      {
        name: "JavaScript",
        level: 88,
        experience: "2+ years",
        category: "Language",
      },
      {
        name: "Tailwind CSS",
        level: 92,
        experience: "2+ years",
        category: "Framework",
      },
      {
        name: "HTML/CSS",
        level: 95,
        experience: "3+ years",
        category: "Language",
      },
    ],
  },
  mobile: {
    title: "Mobile Development",
    icon: "📱",
    skills: [
      {
        name: "Flutter",
        level: 88,
        experience: "2+ years",
        category: "Framework",
      },
      { name: "Dart", level: 85, experience: "2+ years", category: "Language" },
      {
        name: "Firebase",
        level: 80,
        experience: "1.5+ years",
        category: "Backend",
      },
      { name: "Hive", level: 75, experience: "1+ year", category: "Database" },
      {
        name: "Riverpod",
        level: 70,
        experience: "1+ year",
        category: "State Management",
      },
    ],
  },
  backend: {
    title: "Backend & AI/ML",
    icon: "🤖",
    skills: [
      {
        name: "Python",
        level: 85,
        experience: "2+ years",
        category: "Language",
      },
      {
        name: "Google Gemini",
        level: 80,
        experience: "6+ months",
        category: "AI/ML",
      },
      {
        name: "FAISS",
        level: 70,
        experience: "6+ months",
        category: "Vector DB",
      },
      {
        name: "Scikit-learn",
        level: 75,
        experience: "1+ year",
        category: "ML Library",
      },
      {
        name: "Streamlit",
        level: 80,
        experience: "1+ year",
        category: "Framework",
      },
      {
        name: "FastAPI",
        level: 65,
        experience: "6+ months",
        category: "Framework",
      },
    ],
  },
  tools: {
    title: "Tools & Platforms",
    icon: "⚡",
    skills: [
      {
        name: "Git",
        level: 90,
        experience: "3+ years",
        category: "Version Control",
      },
      { name: "VS Code", level: 95, experience: "3+ years", category: "IDE" },
      { name: "Figma", level: 70, experience: "1+ year", category: "Design" },
      {
        name: "Vercel",
        level: 85,
        experience: "1+ year",
        category: "Deployment",
      },
      {
        name: "GitHub",
        level: 90,
        experience: "3+ years",
        category: "Platform",
      },
      {
        name: "Postman",
        level: 80,
        experience: "1+ year",
        category: "API Testing",
      },
    ],
  },
};

// Learning journey timeline
const learningJourney = [
  {
    year: "2022",
    title: "Programming Foundation",
    description: "Started with HTML, CSS, and JavaScript fundamentals",
    skills: ["HTML", "CSS", "JavaScript"],
    milestone: "First web page",
  },
  {
    year: "2023",
    title: "React & Modern Frontend",
    description: "Mastered React ecosystem and component-based architecture",
    skills: ["React", "Next.js", "Tailwind CSS"],
    milestone: "First full-stack project",
  },
  {
    year: "2023-2024",
    title: "Mobile Development",
    description: "Learned Flutter and mobile app development patterns",
    skills: ["Flutter", "Dart", "Firebase"],
    milestone: "MyAnimeTracker app",
  },
  {
    year: "2024",
    title: "AI/ML Integration",
    description: "AICTE internship and AI-powered application development",
    skills: ["Python", "Google Gemini", "FAISS", "ML"],
    milestone: "RAG Assistant project",
  },
  {
    year: "2025",
    title: "Advanced Development",
    description: "TypeScript, advanced patterns, and production deployments",
    skills: ["TypeScript", "Advanced React", "System Design"],
    milestone: "Portfolio & Production Apps",
  },
];

// Certifications and achievements
const certifications = [
  {
    title: "AICTE-Approved AI/ML Internship",
    issuer: "Edunet Foundation",
    date: "2024",
    description:
      "6-week intensive program covering machine learning models, industry standards, and practical AI applications",
    badge: "🎓",
    skills: ["Python", "Machine Learning", "AI Applications"],
  },
  {
    title: "Flutter Development",
    issuer: "Self-Directed Learning",
    date: "2023-2024",
    description:
      "Comprehensive mobile app development with multiple published projects",
    badge: "📱",
    skills: ["Flutter", "Dart", "Mobile Architecture"],
  },
  {
    title: "React Ecosystem Mastery",
    issuer: "Project-Based Learning",
    date: "2023-2025",
    description:
      "Advanced React patterns, Next.js, and modern frontend development",
    badge: "⚛️",
    skills: ["React", "Next.js", "TypeScript"],
  },
];

export default function SkillsPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:px-10">
      {/* Header */}
      <header className="space-y-6 mb-16">
        <p className="text-caption text-xs uppercase tracking-[0.4em] text-emerald-200/70 font-medium">
          Technical Expertise
        </p>
        <h1 className="text-display text-4xl font-extrabold text-white md:text-5xl tracking-tight">
          Skills & Technologies
        </h1>
        <div className="prose">
          <p className="text-body text-base text-slate-300/90 leading-relaxed">
            A comprehensive overview of my technical skills, tools, and
            expertise gained through hands-on projects, internships, and
            continuous learning.
          </p>
        </div>
      </header>

      <div className="space-y-20">
        {/* Skills Hero Showcase */}
        <div>
          <h2 className="text-headline text-2xl font-bold text-white mb-8 text-center tracking-tight">
            Core Technologies
          </h2>
          <div className="max-w-md mx-auto">
            <SkillsHeroShowcase />
          </div>
        </div>

        {/* Skills Radar/Overview */}
        <div>
          <h2 className="text-headline text-2xl font-bold text-white mb-8 tracking-tight">
            Technical Proficiency
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SkillsRadar />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Core Strengths
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-emerald-300">🎯</span>
                    <span className="text-slate-300">
                      Full-Stack Development (React + Backend)
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-emerald-300">📱</span>
                    <span className="text-slate-300">
                      Cross-Platform Mobile Apps (Flutter)
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-emerald-300">🤖</span>
                    <span className="text-slate-300">
                      AI/ML Integration & RAG Systems
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-emerald-300">⚡</span>
                    <span className="text-slate-300">
                      Modern Development Practices
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Skills by Category */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-8">
            Skill Categories
          </h2>
          <div className="grid gap-8">
            {Object.entries(skillCategories).map(([key, category]) => (
              <div
                key={key}
                className="rounded-2xl border border-slate-700/50 bg-slate-900/50 p-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="text-xl font-semibold text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {category.skills.map((skill, index) => (
                    <AnimatedSkillBar
                      key={skill.name}
                      skill={skill}
                      delay={index * 100}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Journey Timeline */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-8">
            Learning Journey
          </h2>
          <div className="space-y-8">
            {learningJourney.map((phase, index) => (
              <div key={phase.year} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-white font-semibold text-sm">
                    {index + 1}
                  </div>
                  {index < learningJourney.length - 1 && (
                    <div className="w-px h-16 bg-slate-700 mt-4" />
                  )}
                </div>

                <div className="flex-1 pb-8">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-white">
                      {phase.title}
                    </h3>
                    <span className="text-sm text-emerald-300 font-medium">
                      {phase.year}
                    </span>
                  </div>
                  <p className="text-slate-300 mb-3">{phase.description}</p>

                  <div className="flex flex-wrap gap-2 mb-2">
                    {phase.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center rounded-md bg-slate-800 px-2 py-1 text-xs text-slate-200 border border-slate-600"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-emerald-300">🎯</span>
                    <span className="text-slate-400">
                      Milestone: {phase.milestone}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Achievements */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-8">
            Certifications & Achievements
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-6"
              >
                <div className="flex items-start gap-3 mb-4">
                  <span className="text-2xl">{cert.badge}</span>
                  <div>
                    <h3 className="font-semibold text-white mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-slate-400">
                      {cert.issuer} • {cert.date}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-slate-300 mb-4">
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-1">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-md bg-emerald-500/20 px-2 py-1 text-xs text-emerald-200 border border-emerald-400/40"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills in Action */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-8">
            Skills in Action
          </h2>
          <div className="rounded-2xl border border-slate-700/50 bg-slate-900/50 p-8">
            <div className="text-center space-y-4">
              <h3 className="text-xl font-semibold text-white">
                Interactive Skills Showcase
              </h3>
              <p className="text-slate-300 max-w-2xl mx-auto">
                Experience my technical skills through the projects in my
                portfolio. Each project demonstrates practical application of
                these technologies in real-world scenarios.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <a
                  href="/projects"
                  className="inline-flex items-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-emerald-400 hover:scale-105"
                >
                  View Projects
                  <svg
                    className="ml-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
                <a
                  href="/resume"
                  className="inline-flex items-center rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-slate-800"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating action buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-3">
        <a
          href="/projects"
          className="group flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg transition-all hover:bg-emerald-400 hover:scale-110 hover:shadow-xl"
          title="View Projects"
        >
          <svg
            className="h-6 w-6 transition-transform group-hover:scale-110"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            />
          </svg>
        </a>

        <a
          href="/resume"
          className="group flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 text-white shadow-lg transition-all hover:bg-slate-700 hover:scale-110 hover:shadow-xl"
          title="Download Resume"
        >
          <svg
            className="h-5 w-5 transition-transform group-hover:scale-110"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
