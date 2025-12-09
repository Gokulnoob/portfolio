"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const buttons = [
  { label: "View Projects", variant: "btn-primary", href: "/projects" },
  { label: "Contact Me", variant: "btn-ghost", href: "/contact" },
];

const techStack = [
  { name: "React", icon: "/icons/react.svg", color: "#61DAFB" },
  { name: "Next.js", icon: "/icons/nextjs.svg", color: "#000000" },
  { name: "TypeScript", icon: "/icons/typescript.svg", color: "#3178C6" },
  { name: "Tailwind CSS", icon: "/icons/tailwind.svg", color: "#38BDF8" },
  { name: "Flutter", icon: "/icons/flutter.svg", color: "#02569B" },
  { name: "Python", icon: "/icons/python.svg", color: "#3776AB" },
];

export default function Hero() {
  return (
    <header className="grid gap-12 md:grid-cols-2 md:items-center">
      <div className="space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-balance text-4xl font-extrabold tracking-tight sm:text-5xl"
        >
          <span className="block">
            Building <span className="text-emerald-300">Interactive</span>
          </span>
          <span className="block">
            Web <span className="text-emerald-300">Experiences</span>
          </span>
          <span className="mt-3 block text-lg font-medium text-slate-200">
            Frontend Developer • AI/ML Enthusiast
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
          className="max-w-xl text-pretty text-slate-300"
        >
          Hi, I&apos;m <strong className="text-white">Gokul G</strong> — an MCA
          graduate from Tamil Nadu, India. I specialize in React, Next.js,
          Flutter, and AI/ML integrations, crafting performant, accessible, and
          beautiful digital experiences.
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

        {/* Tech Stack Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          className="space-y-3"
        >
          <p className="text-sm font-medium text-slate-400">Tech Stack</p>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.4 + index * 0.1,
                  duration: 0.4,
                  ease: "easeOut",
                }}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.2 },
                }}
                className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20"
                title={tech.name}
              >
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={20}
                  height={20}
                  className="transition-transform group-hover:scale-110"
                />
                <span className="text-xs font-medium text-slate-300 group-hover:text-white">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Animated Tech Illustration */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.8, ease: "easeOut" }}
        className="relative mx-auto w-full max-w-md"
      >
        <motion.div
          animate={{
            rotate: [0, 2, -2, 0],
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative rounded-3xl bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-md border border-white/10"
        >
          <Image
            src="/tech-illustration.svg"
            alt="Coding workspace illustration"
            width={400}
            height={300}
            className="w-full h-auto"
            priority
          />

          {/* Floating animation elements */}
          <motion.div
            animate={{
              y: [0, -10, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-4 right-4 w-3 h-3 rounded-full bg-emerald-300"
          />
          <motion.div
            animate={{
              y: [0, 8, 0],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-6 left-6 w-2 h-2 rounded-full bg-blue-400"
          />
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-6 text-center"
        >
          <p className="text-sm font-medium text-slate-400">
            Ready to collaborate on your next project
          </p>
        </motion.div>
      </motion.div>
    </header>
  );
}
