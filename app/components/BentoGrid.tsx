"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const cards = [
  {
    title: "About",
    href: "/about",
    description: "Values, background, and quick stats.",
  },
  {
    title: "Projects",
    href: "/projects",
    description: "Case studies with interactive deep dives.",
  },
  {
    title: "Skills",
    href: "/about#skills",
    description: "Technical skills and expertise areas.",
  },
  {
    title: "Experience",
    href: "/about#experience",
    description: "Timeline, internships, and growth milestones.",
  },
  {
    title: "Contact",
    href: "/contact",
    description: "Let’s collaborate on something great.",
  },
  {
    title: "Resume",
    href: "/resume",
    description: "Download a concise overview.",
  },
];

export default function BentoGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {cards.map((card) => (
        <motion.div
          key={card.title}
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 250, damping: 20 }}
          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-emerald-500/5 backdrop-blur"
        >
          <span className="absolute inset-x-0 bottom-0 h-1 translate-y-full bg-gradient-to-r from-emerald-400/60 via-emerald-300/80 to-cyan-400/60 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100" />
          <Link
            href={card.href}
            className="flex h-full flex-col justify-between gap-4"
          >
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-white">{card.title}</h4>
              <p className="text-sm text-slate-300">{card.description}</p>
            </div>
            <span className="text-sm font-medium text-emerald-300">
              Explore →
            </span>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
