"use client";

import { useState, useEffect } from "react";

interface Section {
  id: string;
  title: string;
  icon: string;
}

const sections: Section[] = [
  { id: "story", title: "My Story", icon: "📖" },
  { id: "philosophy", title: "Philosophy", icon: "💭" },
  { id: "journey", title: "Journey", icon: "🛤️" },
  { id: "exploring", title: "Exploring", icon: "🔍" },
];

export default function AboutNavigation() {
  const [activeSection, setActiveSection] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);

      // Find active section based on scroll position
      const sectionElements = sections.map((section) => ({
        id: section.id,
        element: document.getElementById(section.id),
      }));

      const currentSection = sectionElements.find(({ element }) => {
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50">
      <div className="flex flex-col gap-2 p-2 rounded-2xl bg-slate-900/90 backdrop-blur-sm border border-slate-700/50 shadow-xl">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`group relative p-2 sm:p-3 rounded-xl transition-all duration-300 ${
              activeSection === section.id
                ? "bg-emerald-500 text-white scale-110"
                : "bg-slate-800/50 text-slate-400 hover:bg-slate-700 hover:text-white hover:scale-105"
            }`}
            title={section.title}
            aria-label={`Navigate to ${section.title} section`}
          >
            <span className="text-base sm:text-lg">{section.icon}</span>

            {/* Tooltip - Hidden on mobile for touch devices */}
            <div className="hidden sm:block absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2 py-1 bg-slate-800 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              {section.title}
              <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-slate-800" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
