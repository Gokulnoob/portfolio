"use client";

import { useId } from "react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

interface TestimonialsProps {
  highlights: Testimonial[];
}

export default function Testimonials({ highlights }: TestimonialsProps) {
  const headingId = useId();
  return (
    <section
      aria-labelledby={headingId}
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 px-8 py-10 shadow-[0_25px_60px_rgba(7,16,33,0.55)]"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.18),rgba(7,16,33,0.7))]"
        aria-hidden
      />
      <div className="relative z-10 space-y-6">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.35em] text-emerald-200/70">
            Voices from partners
          </p>
          <h3 id={headingId} className="text-2xl font-semibold text-white">
            Momentum backed by teams I have built with
          </h3>
          <p className="max-w-2xl text-sm text-slate-300/90">
            Proof points from collaborators who trusted me to ship their next
            important release.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {highlights.map(({ quote, name, role, company }) => (
            <figure
              key={`${name}-${company}`}
              className="flex h-full flex-col justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 text-slate-200 backdrop-blur"
            >
              <blockquote className="text-sm leading-relaxed text-slate-100/90">
                “{quote}”
              </blockquote>
              <figcaption className="space-y-1 text-xs uppercase tracking-[0.22em] text-emerald-200/80">
                <span className="block text-[0.72rem] text-white/90">
                  {name}
                </span>
                <span className="block text-[0.65rem] text-slate-300/80">
                  {role} · {company}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
