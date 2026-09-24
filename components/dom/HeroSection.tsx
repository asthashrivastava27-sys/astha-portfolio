"use client";

import { FileText, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="top" className="relative w-full min-h-screen flex flex-col justify-between px-4 sm:px-8 pt-28 pb-12 pointer-events-none select-none">
      {/* Top Status Tag */}
      <div className="max-w-7xl mx-auto w-full flex justify-between items-start pt-2">
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#0a1128]/90 border border-blue-400/40 backdrop-blur-md shadow-lg shadow-black/50">
          <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
          <span className="text-xs font-mono font-semibold tracking-wider text-slate-200 uppercase">
            SEO • Organic Growth • Content Strategy
          </span>
        </div>
      </div>

      {/* Central Hero Typography Block */}
      <div className="max-w-7xl mx-auto w-full my-auto py-12 flex flex-col items-center text-center">
        {/* Name & Title Badge */}
        <div className="inline-flex items-center gap-3 mb-6 px-5 py-2 rounded-full bg-[#081026]/95 border border-blue-400/30 backdrop-blur-xl shadow-xl shadow-black/60">
          <span className="text-sm sm:text-base font-bold tracking-[0.25em] text-white uppercase">
            ASTHA SHRIVASTAVA
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
          <span className="text-sm sm:text-base font-mono tracking-[0.2em] text-lime-300 font-bold uppercase">
            SEO PROFESSIONAL
          </span>
        </div>

        {/* Core Headline Typography */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.04] max-w-5xl mb-6">
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-50 to-slate-300 drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)]">
            SEARCH IS EVOLVING.
          </span>
          <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-sky-200 to-indigo-200 drop-shadow-[0_0_35px_rgba(56,189,248,0.45)]">
            I&apos;M EVOLVING WITH IT.
          </span>
        </h1>

        {/* Hero Supporting Copy — High contrast & generous readability */}
        <p className="max-w-3xl text-base sm:text-lg md:text-xl text-slate-100 font-normal leading-relaxed mb-8 drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
          I help businesses grow through SEO, AI-search optimization, content systems, and high-performance websites built for visibility, engagement, and organic growth.
        </p>

        {/* Action Buttons */}
        <div className="pointer-events-auto flex flex-wrap items-center justify-center gap-4">
          <a
            href="#results"
            className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-mono tracking-wider uppercase font-semibold border border-blue-400/50 shadow-[0_0_25px_rgba(37,99,235,0.4)] hover:shadow-[0_0_35px_rgba(163,230,53,0.35)] hover:border-lime-400 transition-all flex items-center gap-2 cursor-pointer group"
          >
            <Sparkles className="w-4 h-4 text-lime-300 group-hover:rotate-12 transition-transform" />
            View My Work
          </a>

          <a
            href="/resume"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 rounded-xl bg-[#060b1e]/90 text-slate-100 text-sm font-mono tracking-wider uppercase font-semibold border border-slate-600 hover:border-blue-400 hover:text-white backdrop-blur-md transition-all flex items-center gap-2 cursor-pointer group shadow-lg"
          >
            <FileText className="w-4 h-4 text-sky-300 group-hover:translate-y-0.5 transition-transform" />
            View My Resume
          </a>
        </div>
      </div>

      {/* Bottom Scroll Cue */}
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center justify-center text-center">
        <a
          href="#results"
          className="pointer-events-auto flex flex-col items-center gap-2 text-slate-300 hover:text-white transition-colors cursor-pointer group"
        >
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-slate-300 font-semibold group-hover:text-lime-300 transition-colors">
            EXPLORE SEO IMPACT & RESULTS
          </span>
          <div className="w-5 h-8 rounded-full border border-slate-600 flex items-start justify-center p-1 group-hover:border-blue-400 transition-colors">
            <div className="w-1.5 h-2.5 rounded-full bg-sky-400 animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
}
