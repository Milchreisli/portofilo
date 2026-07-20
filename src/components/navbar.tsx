"use client";

import { useState, useEffect } from "react";

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = ["home", "projects", "worked-for"];

    const handleScroll = () => {
      const sectionPositions = sections
        .map((id) => {
          const element = document.getElementById(id);
          if (!element) return null;
          const rect = element.getBoundingClientRect();
          return {
            id,
            top: rect.top + window.scrollY,
            bottom: rect.bottom + window.scrollY,
          };
        })
        .filter(Boolean);

      const currentScroll = window.scrollY + 200;

      for (let i = sectionPositions.length - 1; i >= 0; i--) {
        const section = sectionPositions[i];
        if (section && currentScroll >= section.top) {
          setActiveSection(section.id);
          return;
        }
      }

      setActiveSection("home");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "home", label: "About Me" },
    { id: "projects", label: "Projects" },
    { id: "worked-for", label: "Worked For" },
  ];

  return (
    <nav className="fixed right-4 top-4 z-50 hidden md:block">
      <div
        className="flex items-center gap-2 rounded-full border px-2 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.16)] backdrop-blur-md"
        style={{
          borderColor: "var(--border)",
          background: "color-mix(in srgb, var(--surface) 88%, transparent)",
        }}
      >
        {navItems.map((item) => {
          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`group flex items-center gap-2 rounded-full px-3 py-2 text-[11px] font-mono uppercase tracking-[0.24em] transition-all duration-300 ${
                isActive ? "text-[var(--text)]" : "text-[var(--text-muted)] hover:text-[var(--text)]"
              }`}
              aria-label={item.label}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                  isActive ? "scale-100 bg-[var(--accent)]" : "scale-75 bg-[var(--border)]"
                }`}
              />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
