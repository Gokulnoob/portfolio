"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";

const buttons = [
  { label: "View Projects", variant: "btn-primary", href: "/projects" },
  { label: "Contact Me", variant: "btn-ghost", href: "/contact" },
];

export default function Hero() {
  const rippleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const overlay = rippleRef.current;
    if (!overlay) {
      return;
    }

    const rippleHandler = (event: PointerEvent) => {
      const rect = overlay.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const ripple = document.createElement("span");
      ripple.className = "hero-ripple";
      ripple.style.width = `${size}px`;
      ripple.style.height = `${size}px`;
      ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
      ripple.style.top = `${event.clientY - rect.top - size / 2}px`;
      overlay.appendChild(ripple);

      window.setTimeout(() => {
        ripple.remove();
      }, 550);
    };

    overlay.addEventListener("pointerdown", rippleHandler);
    return () => {
      overlay.removeEventListener("pointerdown", rippleHandler);
    };
  }, []);

  return (
    <header className="grid gap-12 md:grid-cols-2 md:items-center">
      <div className="space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-balance text-4xl font-extrabold tracking-tight sm:text-5xl"
        >
          <span className="block">
            Hi — I&apos;m <span className="text-emerald-300">Gokul G</span>
          </span>
          <span className="mt-2 block text-lg font-medium text-slate-200">
            Flutter Developer • AI/ML Enthusiast
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
          className="max-w-xl text-pretty text-slate-300"
        >
          MCA student passionate about creating digital experiences that make a
          difference. I specialize in React, Flutter, and AI/ML integrations,
          building responsive and user-centric solutions that blend technical
          innovation with intuitive design.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          className="flex flex-wrap gap-4"
        >
          {buttons.map((button) => (
            <a key={button.label} href={button.href} className={button.variant}>
              {button.label}
            </a>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.02 }}
        className="relative mx-auto w-full max-w-sm rounded-3xl bg-white/10 p-6 backdrop-blur-md"
      >
        <div className="relative overflow-hidden rounded-2xl border border-white/10">
          <Image
            src="/profile.jpg"
            alt="Hero background showcasing modern tech workspace"
            width={400}
            height={256}
            className="h-64 w-full object-cover"
            loading="lazy"
          />
          <div
            ref={rippleRef}
            className="absolute inset-0 cursor-pointer"
            aria-hidden
          />
        </div>

        <div className="mt-5 space-y-1">
          <h3 className="text-lg font-semibold">Gokul G</h3>
          <p className="text-sm text-slate-400">
            MCA Graduate • Enthusiast Developer
          </p>
        </div>
      </motion.div>
    </header>
  );
}
