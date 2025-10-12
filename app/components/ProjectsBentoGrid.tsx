"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface BentoItem {
  title: string;
  summary?: string;
  detail?: string;
  href?: string;
  cta?: string;
  badge?: string;
  span?: string;
  content?: ReactNode;
}

const baseCardClasses =
  "group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-6 shadow-[0_20px_45px_rgba(8,15,35,0.35)] backdrop-blur transition";

export default function ProjectsBentoGrid({ items }: { items: BentoItem[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-8 md:auto-rows-[minmax(220px,_1fr)]">
      {items.map((item) => (
        <motion.article
          key={item.title}
          whileHover={{ translateY: -6 }}
          transition={{ type: "spring", stiffness: 220, damping: 18 }}
          className={`${baseCardClasses} ${item.span ?? "md:col-span-4"}`}
        >
          <span className="absolute inset-x-0 top-0 h-1 translate-y-[-100%] bg-gradient-to-r from-emerald-300/80 via-emerald-200/60 to-cyan-300/70 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100" />

          <div className="space-y-3 text-left">
            {item.badge && (
              <span className="inline-flex items-center rounded-full border border-emerald-200/40 bg-emerald-300/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-emerald-100">
                {item.badge}
              </span>
            )}
            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
            {item.summary && (
              <p className="text-sm text-slate-300/90">{item.summary}</p>
            )}
            {item.detail && (
              <p className="text-xs text-slate-400/90">{item.detail}</p>
            )}
            {item.content && <div className="pt-2">{item.content}</div>}
          </div>

          {item.href && (
            <a
              href={item.href}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-200 transition hover:text-emerald-100"
              target="_blank"
              rel="noreferrer"
            >
              {item.cta ?? "View details"}
              <span aria-hidden>↗</span>
            </a>
          )}
        </motion.article>
      ))}
    </div>
  );
}
