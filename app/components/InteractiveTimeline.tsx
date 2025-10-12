"use client";

import { motion } from "framer-motion";

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export default function InteractiveTimeline({
  items,
}: {
  items: TimelineItem[];
}) {
  return (
    <ol className="space-y-4">
      {items.map((item) => (
        <motion.li
          key={`${item.year}-${item.title}`}
          whileHover={{ scale: 1.02, translateX: 4 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/10 p-5"
        >
          <span
            className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-emerald-400/70 via-emerald-200/40 to-transparent"
            aria-hidden
          />
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h4 className="text-base font-semibold text-white">
                {item.title}
              </h4>
              <p className="text-xs uppercase tracking-[0.2em] text-emerald-200/80">
                {item.year}
              </p>
            </div>
            <p className="max-w-md text-sm text-slate-300/90">
              {item.description}
            </p>
          </div>
          <motion.div
            className="mt-3 h-px w-full bg-gradient-to-r from-transparent via-emerald-200/40 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          <span
            className="absolute -left-2 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.8)]"
            aria-hidden
          />
        </motion.li>
      ))}
    </ol>
  );
}
