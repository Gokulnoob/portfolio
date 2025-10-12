"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

// Resume data structure for display
const resumeData = {
  personal: {
    name: "Gokul G",
    title: "Frontend Developer & AI/ML Enthusiast",
    location: "Tamil Nadu, India",
    email: "hello@gokulg.dev",
    linkedin: "linkedin.com/in/gokul-g",
    github: "github.com/gokulg",
    phone: "+91 XXX XXX XXXX",
  },
  summary:
    "Recent MCA graduate with expertise in React, Flutter, Python, and AI/ML integrations. 6-week AICTE-approved AI/ML internship experience at Edunet Foundation. Built 5+ projects including mobile apps and ML models with R² scores up to 0.90. Passionate about creating responsive, accessible, and innovative tech solutions.",

  experience: [
    {
      title: "AI/ML Intern",
      company: "Edunet Foundation",
      duration: "Summer 2024 (6 weeks)",
      type: "AICTE-Approved Internship",
      highlights: [
        "Developed machine learning models achieving R² scores up to 0.90",
        "Implemented AI solutions using Python, TensorFlow, and scikit-learn",
        "Built RAG (Retrieval-Augmented Generation) systems with vector databases",
        "Created data visualization dashboards for model performance analysis",
      ],
    },
  ],

  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Your University Name",
      duration: "2023 - 2025",
      highlights: ["Specialized in Software Development and AI/ML"],
    },
    {
      degree: "Bachelor of Science - Computer Science",
      institution: "Your College Name",
      duration: "2020 - 2023",
      highlights: ["Foundation in Programming and Computer Science"],
    },
  ],

  projects: [
    {
      name: "MyAnimeTracker",
      tech: "Flutter, Firebase, REST APIs",
      description:
        "Mobile app with 1K+ users for anime tracking and recommendations",
    },
    {
      name: "RAG Assistant",
      tech: "Python, Vector DB, Gemini AI",
      description: "AI-powered Q&A system with document retrieval capabilities",
    },
    {
      name: "StudyPro",
      tech: "React, TypeScript, Firebase",
      description: "Study management platform with progress tracking",
    },
  ],

  skills: {
    Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Flutter"],
    Backend: ["Python", "Node.js", "Firebase", "REST APIs"],
    "AI/ML": ["TensorFlow", "scikit-learn", "Gemini AI", "Vector Databases"],
    Tools: ["Git", "VS Code", "Figma", "Postman"],
  },
};

export default function ResumePage() {
  const [activeSection, setActiveSection] = useState("overview");
  const [isPreviewMode, setIsPreviewMode] = useState(false);

  const sections = [
    { id: "overview", label: "Overview", icon: "👁️" },
    { id: "experience", label: "Experience", icon: "💼" },
    { id: "education", label: "Education", icon: "🎓" },
    { id: "projects", label: "Projects", icon: "🚀" },
    { id: "skills", label: "Skills", icon: "⚡" },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
      {/* Header */}
      <motion.header
        className="mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-caption text-xs uppercase tracking-[0.4em] text-emerald-200/70 mb-4 font-medium">
          Resume
        </p>
        <h1 className="text-display text-4xl font-extrabold text-white md:text-6xl mb-6 tracking-tight">
          Your next developer
        </h1>
        <div className="prose prose-wide mx-auto">
          <p className="text-body text-lg text-slate-300/90 mb-8 leading-relaxed">
            {resumeData.summary}
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <motion.a
            className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-emerald-400 hover:scale-105 shadow-lg"
            href="/resume/gokul_resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="h-4 w-4"
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
            Download PDF
          </motion.a>
          <motion.button
            onClick={() => setIsPreviewMode(!isPreviewMode)}
            className="inline-flex items-center gap-2 rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-slate-800 hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            {isPreviewMode ? "Hide Preview" : "Interactive Preview"}
          </motion.button>
        </div>
      </motion.header>

      {/* Interactive Resume Preview */}
      {isPreviewMode && (
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Section Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  activeSection === section.id
                    ? "bg-emerald-500 text-white scale-105"
                    : "bg-slate-800/50 text-slate-300 hover:bg-slate-700 hover:text-white"
                }`}
              >
                <span>{section.icon}</span>
                {section.label}
              </button>
            ))}
          </div>

          {/* Resume Content */}
          <div className="rounded-2xl border border-slate-700/50 bg-slate-900/50 p-8">
            {/* Overview Section */}
            {activeSection === "overview" && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">
                      {resumeData.personal.name}
                    </h2>
                    <p className="text-lg text-emerald-300 mb-4">
                      {resumeData.personal.title}
                    </p>
                    <div className="space-y-2 text-sm text-slate-300">
                      <p>📍 {resumeData.personal.location}</p>
                      <p>📧 {resumeData.personal.email}</p>
                      <p>💼 {resumeData.personal.linkedin}</p>
                      <p>🔗 {resumeData.personal.github}</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Professional Summary
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {resumeData.summary}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Experience Section */}
            {activeSection === "experience" && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-white mb-6">
                  Experience
                </h2>
                {resumeData.experience.map((exp, index) => (
                  <div
                    key={index}
                    className="border-l-2 border-emerald-500 pl-6 pb-6"
                  >
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="text-lg font-semibold text-white">
                        {exp.title}
                      </h3>
                      <span className="text-sm text-emerald-300">
                        @ {exp.company}
                      </span>
                      <span className="text-xs text-slate-400 bg-slate-800 px-2 py-1 rounded">
                        {exp.type}
                      </span>
                    </div>
                    <p className="text-sm text-slate-400 mb-3">
                      {exp.duration}
                    </p>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-slate-300 flex items-start gap-2"
                        >
                          <span className="text-emerald-400 mt-1">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </motion.div>
            )}

            {/* Education Section */}
            {activeSection === "education" && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-white mb-6">
                  Education
                </h2>
                {resumeData.education.map((edu, index) => (
                  <div
                    key={index}
                    className="border-l-2 border-emerald-500 pl-6 pb-6"
                  >
                    <h3 className="text-lg font-semibold text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-sm text-emerald-300 mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-slate-400 mb-3">
                      {edu.duration}
                    </p>
                    <ul className="space-y-1">
                      {edu.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-slate-300 flex items-start gap-2"
                        >
                          <span className="text-emerald-400 mt-1">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </motion.div>
            )}

            {/* Projects Section */}
            {activeSection === "projects" && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-white mb-6">
                  Key Projects
                </h2>
                <div className="grid gap-4 md:grid-cols-2">
                  {resumeData.projects.map((project, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-xl border border-slate-700/50 bg-slate-800/30"
                    >
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {project.name}
                      </h3>
                      <p className="text-xs text-emerald-300 mb-2">
                        {project.tech}
                      </p>
                      <p className="text-sm text-slate-300">
                        {project.description}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Skills Section */}
            {activeSection === "skills" && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-white mb-6">
                  Technical Skills
                </h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {Object.entries(resumeData.skills).map(
                    ([category, skills]) => (
                      <div key={category}>
                        <h3 className="text-lg font-semibold text-emerald-300 mb-3">
                          {category}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {skills.map((skill) => (
                            <span
                              key={skill}
                              className="inline-flex items-center rounded-lg bg-emerald-500/20 px-3 py-1 text-xs font-medium text-emerald-200 border border-emerald-400/40"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}

      {/* Quick Actions & Info */}
      <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="rounded-2xl border border-slate-700/50 bg-slate-900/50 p-6">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span>📄</span> Download Options
            </h3>
            <div className="space-y-4">
              <p className="text-sm text-slate-300">
                Get the complete one-page resume in PDF format, optimized for
                ATS systems and recruiter review.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-emerald-400"
                  href="/resume/gokul_resume.pdf"
                  download
                >
                  📥 Download PDF
                </a>
                <a
                  className="inline-flex items-center gap-2 rounded-full border border-slate-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-slate-800"
                  href="/resume/gokul_resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  👁️ Preview PDF
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-700/50 bg-slate-900/50 p-6">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span>💬</span> Let&apos;s Connect
            </h3>
            <p className="text-sm text-slate-300 mb-4">
              Interested in discussing opportunities? I&apos;d love to chat
              about how I can contribute to your team.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-emerald-400"
              >
                📧 Get In Touch
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full border border-slate-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-slate-800"
              >
                🚀 View Projects
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.aside
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {/* Quick Stats */}
          <div className="rounded-2xl border border-slate-700/50 bg-slate-900/50 p-6">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span>📊</span> Quick Stats
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Experience Level</span>
                <span className="text-emerald-300 font-medium">
                  Junior Developer
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Projects Built</span>
                <span className="text-emerald-300 font-medium">
                  5+ Applications
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300">ML Model Accuracy</span>
                <span className="text-emerald-300 font-medium">Up to 90%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300">App Users</span>
                <span className="text-emerald-300 font-medium">1K+ Active</span>
              </div>
            </div>
          </div>

          {/* Availability */}
          <div className="rounded-2xl border border-emerald-300/30 bg-emerald-500/10 p-6">
            <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
              <span>🟢</span> Available Now
            </h3>
            <div className="space-y-2 text-sm text-slate-300">
              <p>• Full-time positions (Starting Jan 2025)</p>
              <p>• Internship opportunities</p>
              <p>• Freelance projects</p>
              <p>• Remote or hybrid work</p>
            </div>
          </div>

          {/* Tip */}
          <div className="rounded-2xl border border-slate-700/50 bg-slate-900/50 p-6">
            <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
              <span>💡</span> Pro Tip
            </h3>
            <p className="text-xs text-slate-400">
              Need a tailored resume for a specific role? Drop me a note with
              the job description, and I&apos;ll customize it to highlight the
              most relevant skills and experience.
            </p>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
