"use client";

import { motion } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";

export default function FlipCard({
  front,
  back,
  className,
}: {
  front: ReactNode;
  back: ReactNode;
  className?: string;
}) {
  const [flipped, setFlipped] = useState(false);
  const [hoverSupported, setHoverSupported] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) {
      return;
    }
    const matcher = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setHoverSupported(matcher.matches);
    update();
    matcher.addEventListener("change", update);
    return () => matcher.removeEventListener("change", update);
  }, []);

  const handleTap = () => {
    if (!hoverSupported) {
      setFlipped((value) => !value);
    }
  };

  return (
    <div className={`relative h-48 w-72 ${className ?? ""}`}>
      <div className="absolute inset-0 perspective-1000">
        <motion.div
          className="flip-card"
          onHoverStart={() => hoverSupported && setFlipped(true)}
          onHoverEnd={() => hoverSupported && setFlipped(false)}
          onClick={handleTap}
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          <div className="flip-face backface-hidden rounded-2xl border border-white/10 bg-white/10 p-6">
            {front}
          </div>
          <div className="flip-face rotate-y-180 backface-hidden rounded-2xl border border-emerald-300/40 bg-emerald-500/15 p-6 text-emerald-100">
            {back}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
