"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

import QR from "./QR";

function ContactForm() {
  const searchParams = useSearchParams();
  const [formState, setFormState] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errors, setErrors] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Check URL params for submission status
  useEffect(() => {
    if (searchParams.get("submitted") === "1") {
      setFormState("success");
    } else if (searchParams.get("error") === "1") {
      setFormState("error");
      setErrors(["Something went wrong. Please try again."]);
    }
  }, [searchParams]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear errors when user starts typing
    if (errors.length > 0) {
      setErrors([]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("submitting");
    setErrors([]);

    try {
      const formDataObj = new FormData();
      formDataObj.append("name", formData.name);
      formDataObj.append("email", formData.email);
      formDataObj.append("message", formData.message);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formDataObj,
      });

      const result = await response.json();

      if (result.success) {
        setFormState("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setFormState("error");
        setErrors(result.errors || [result.error || "Something went wrong"]);
      }
    } catch (error) {
      console.error("Contact form error:", error);
      setFormState("error");
      setErrors(["Network error. Please check your connection and try again."]);
    }
  };

  return (
    <>
      <motion.header
        className="space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-caption text-xs uppercase tracking-[0.4em] text-emerald-200/70 font-medium">
          Contact
        </p>
        <h1 className="text-display text-4xl font-extrabold text-white md:text-5xl tracking-tight">
          Let&apos;s plan something memorable.
        </h1>
        <div className="prose">
          <p className="text-body text-base text-slate-300/90 leading-relaxed">
            Reach out for internships, freelance collaborations, or community
            workshops. I reply within a day and love exploring early concepts.
          </p>
        </div>
      </motion.header>

      <motion.div
        className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.article
          className="space-y-8 rounded-3xl border border-white/10 bg-white/10 p-6"
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
        >
          <section className="space-y-4">
            <h2 className="text-headline text-xl font-bold text-white tracking-tight">
              Direct routes
            </h2>
            <ul className="space-y-3 text-sm text-slate-300/90">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-red-400"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.9.732-1.636 1.636-1.636h.014L12 12.548 22.35 3.821h.014c.904 0 1.636.732 1.636 1.636z" />
                  </svg>
                </div>
                <div>
                  <span className="text-slate-400">Email:</span>
                  <a
                    className="ml-2 text-emerald-200 transition hover:text-emerald-100"
                    href="mailto:massgokul592@gmail.com"
                  >
                    massgokul592@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-blue-400"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm5.568 8.16c-.169 1.858-1.135 6.482-1.601 8.608-.2.906-.591 1.213-1.057 1.213-.718 0-1.296-.574-1.296-1.292 0-.718.578-1.292 1.296-1.292.617 0 1.213.496 1.213 1.213 0 .617-.496 1.213-1.213 1.213-.617 0-1.213-.496-1.213-1.213z" />
                  </svg>
                </div>
                <div>
                  <span className="text-slate-400">Calendly:</span>
                  <Link
                    className="ml-2 text-emerald-200 transition hover:text-emerald-100"
                    href="https://cal.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Book a 30 minute chat
                  </Link>
                </div>
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-headline text-xl font-bold text-white tracking-tight">
              Connect & Follow
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {/* LinkedIn */}
              <Link
                href="https://www.linkedin.com/in/gokul-mca"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-blue-500/10 hover:border-blue-400/30 transition-all duration-200"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                  <svg
                    className="w-4 h-4 text-blue-400"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-white group-hover:text-blue-300 transition-colors">
                    LinkedIn
                  </p>
                  <p className="text-xs text-slate-400">Professional network</p>
                </div>
              </Link>

              {/* GitHub */}
              <Link
                href="https://github.com/Gokulnoob"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-slate-600/10 hover:border-slate-400/30 transition-all duration-200"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-600/20 flex items-center justify-center group-hover:bg-slate-600/30 transition-colors">
                  <svg
                    className="w-4 h-4 text-slate-300"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-white group-hover:text-slate-300 transition-colors">
                    GitHub
                  </p>
                  <p className="text-xs text-slate-400">Code repositories</p>
                </div>
              </Link>

              {/* Instagram */}
              <Link
                href="https://instagram.com/gokul_2cg"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-pink-500/10 hover:border-pink-400/30 transition-all duration-200"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-colors">
                  <svg
                    className="w-4 h-4 text-pink-400"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-white group-hover:text-pink-300 transition-colors">
                    Instagram
                  </p>
                  <p className="text-xs text-slate-400">Behind the scenes</p>
                </div>
              </Link>

              {/* Freelancing Platform - Upwork */}
              <Link
                href="https://www.freelancer.com/u/gokul2cg"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-green-500/10 hover:border-green-400/30 transition-all duration-200"
              >
                <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                  <svg
                    className="w-4 h-4 text-green-400"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3.002-2.439-5.453-5.439-5.453z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-white group-hover:text-green-300 transition-colors">
                    Freelancer
                  </p>
                  <p className="text-xs text-slate-400">Freelance projects</p>
                </div>
              </Link>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">
              Send a quick note
            </h2>
            <p className="text-sm text-slate-300/80">
              Prefer email-style? Drop a short message here. I&apos;ll respond
              with next steps and a scheduling link if needed.
            </p>

            {/* Success Message */}
            {formState === "success" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 rounded-xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-200"
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">✅</span>
                  <div>
                    <p className="font-medium">Message sent successfully!</p>
                    <p className="text-sm text-emerald-200/80">
                      I&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Error Messages */}
            {formState === "error" && errors.length > 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 rounded-xl bg-red-500/20 border border-red-400/40 text-red-200"
              >
                <div className="flex items-start gap-2">
                  <span className="text-lg">❌</span>
                  <div>
                    <p className="font-medium">Please fix the following:</p>
                    <ul className="text-sm text-red-200/80 mt-1">
                      {errors.map((error, index) => (
                        <li key={index}>• {error}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 text-sm">
              <label className="flex flex-col gap-2 text-slate-200/90">
                Name
                <input
                  className="rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-emerald-300/60 focus:outline-none transition-colors"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  autoComplete="name"
                  placeholder="Your full name"
                  required
                  disabled={formState === "submitting"}
                />
              </label>
              <label className="flex flex-col gap-2 text-slate-200/90">
                Email
                <input
                  className="rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-emerald-300/60 focus:outline-none transition-colors"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  autoComplete="email"
                  placeholder="your.email@example.com"
                  required
                  disabled={formState === "submitting"}
                />
              </label>
              <label className="flex flex-col gap-2 text-slate-200/90">
                Project details
                <textarea
                  className="min-h-[140px] rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-emerald-300/60 focus:outline-none transition-colors resize-y"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project, timeline, and how I can help..."
                  required
                  disabled={formState === "submitting"}
                />
              </label>
              <motion.button
                type="submit"
                className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                disabled={formState === "submitting"}
                whileHover={{ scale: formState === "submitting" ? 1 : 1.02 }}
                whileTap={{ scale: formState === "submitting" ? 1 : 0.98 }}
              >
                {formState === "submitting" ? (
                  <>
                    <svg
                      className="animate-spin h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
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
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                    Send message
                  </>
                )}
              </motion.button>
            </form>
            <p className="text-xs text-emerald-200/70">
              Submissions are stored securely and never shared with third
              parties.
            </p>
          </section>
        </motion.article>

        <motion.aside
          className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-slate-300/90"
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
        >
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-white">Quick connect</h2>
            <QR value="mailto:hello@gokulg.dev" />
            <p className="text-xs text-slate-400">
              Scan to open your email client with my address pre-filled.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-white">Availability</h2>
            <ul className="space-y-2">
              <li>• Winter 2025 internship (12 weeks)</li>
              <li>• Part-time frontend engagements</li>
              <li>• Guest sessions on motion and design systems</li>
            </ul>
          </div>
        </motion.aside>
      </motion.div>
    </>
  );
}

export default function ContactPageWithSuspense() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20 md:px-10">
      <Suspense
        fallback={<div className="text-white">Loading contact form...</div>}
      >
        <ContactForm />
      </Suspense>
    </section>
  );
}
