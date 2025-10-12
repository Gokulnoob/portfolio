"use client";

import { motion } from "framer-motion";
import { useState, type ReactNode } from "react";

export default function ExpandableCard({
  title,
  children,
  preview,
}: {
  title: string;
  children: ReactNode;
  preview?: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.article
      layout
      initial={false}
      onClick={() => setOpen((current) => !current)}
      className="cursor-pointer rounded-2xl border border-white/10 bg-white/10 p-6 shadow-[0_10px_30px_rgba(15,23,42,0.35)] transition hover:border-emerald-300/30"
      animate={{
        boxShadow: open
          ? "0 20px 40px rgba(15, 118, 110, 0.45)"
          : "0 10px 30px rgba(15, 23, 42, 0.35)",
      }}
    >
      <motion.header layout className="flex items-center justify-between gap-6">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <motion.span
          layout
          aria-hidden
          animate={{ rotate: open ? 45 : 0 }}
          className="grid h-8 w-8 place-items-center rounded-full bg-emerald-400/20 text-emerald-200"
        >
          +
        </motion.span>
      </motion.header>

      <motion.div
        layout
        className="mt-4 text-sm text-slate-200/90"
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {open ? children : preview ?? children}
      </motion.div>
    </motion.article>
  );
}
