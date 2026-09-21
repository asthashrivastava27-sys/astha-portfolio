"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Results", href: "#results" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 pt-4 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Monogram & Name */}
        <a
          href="#top"
          className="pointer-events-auto flex items-center gap-3 group cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl bg-[#091124] border border-blue-400/40 flex items-center justify-center backdrop-blur-md shadow-lg shadow-blue-950/50 group-hover:border-lime-400/70 transition-colors">
            <span className="text-sm font-mono font-bold tracking-wider text-sky-300 group-hover:text-lime-300 transition-colors">
              AS
            </span>
          </div>
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-white transition-colors">
              ASTHA SHRIVASTAVA
            </div>
            <div className="text-xs font-mono uppercase tracking-[0.16em] text-sky-300 flex items-center gap-1.5 mt-0.5 font-semibold">
              <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
              SEO PROFESSIONAL
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="pointer-events-auto hidden xl:flex items-center gap-1 px-4 py-2 rounded-full bg-[#060b1e]/90 border border-blue-500/30 backdrop-blur-xl shadow-xl shadow-black/60">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3.5 py-1.5 rounded-full text-sm font-mono text-slate-200 hover:text-white hover:bg-white/10 transition-colors tracking-wide font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="pointer-events-auto flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-mono tracking-wider font-semibold border border-blue-400/50 hover:border-lime-400 shadow-lg shadow-blue-950/60 hover:shadow-[0_0_20px_rgba(163,230,53,0.35)] transition-all cursor-pointer"
          >
            <span>Let&apos;s Connect</span>
            <ArrowUpRight className="w-4 h-4 text-lime-300" />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2.5 rounded-xl bg-[#060b1e]/95 border border-slate-700 text-slate-200 hover:text-white transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto xl:hidden mt-3 max-w-7xl mx-auto p-5 rounded-2xl bg-[#060b1e]/95 border border-blue-500/30 backdrop-blur-2xl shadow-2xl animate-in fade-in slide-in-from-top-3 duration-200">
          <div className="grid grid-cols-2 gap-2.5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 rounded-lg text-sm font-mono text-slate-200 hover:text-white hover:bg-blue-600/20 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="mt-4 pt-3 border-t border-slate-800 flex justify-between items-center">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-xl bg-blue-600 text-white text-sm font-mono tracking-wider font-semibold"
            >
              Let&apos;s Connect
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
