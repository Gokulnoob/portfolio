"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ChevronDown = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6,9 12,15 18,9" />
  </svg>
);

interface ExpandableSectionProps {
  title: string;
  summary?: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
  icon?: string;
  className?: string;
}

export default function ExpandableSection({
  title,
  summary,
  children,
  defaultExpanded = false,
  icon,
  className = "",
}: ExpandableSectionProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div className={`space-y-4 ${className}`}>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="group w-full text-left"
        aria-expanded={isExpanded}
        aria-controls={`section-${title.replace(/\s+/g, "-").toLowerCase()}`}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-semibold text-white group-hover:text-emerald-300 transition-colors duration-200 flex items-center gap-3">
            {icon && <span className="text-2xl">{icon}</span>}
            {title}
          </h2>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="text-slate-400 group-hover:text-emerald-300 transition-colors"
          >
            <ChevronDown />
          </motion.div>
        </div>

        {summary && (
          <p className="text-slate-300/80 mt-2 text-sm leading-relaxed">
            {summary}
          </p>
        )}
      </button>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            id={`section-${title.replace(/\s+/g, "-").toLowerCase()}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-2">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isExpanded && (
        <div className="text-xs text-slate-500 flex items-center gap-2">
          <span>Click to expand</span>
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="6,9 12,15 18,9" />
          </svg>
        </div>
      )}
    </div>
  );
}
