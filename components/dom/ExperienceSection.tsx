"use client";

import { Briefcase, CheckCircle2, TrendingUp, Search, Layers, BarChart3, Globe } from "lucide-react";

const EXP_RESULTS = [
  { value: "6K+", label: "Organic Leads Generated" },
  { value: "269K+", label: "Organic Clicks" },
  { value: "8.5M+", label: "Search Impressions" },
  { value: "1000+", label: "Content Published" },
  { value: "1000+", label: "Content Assets Optimized & Managed" },
  { value: "500+", label: "Technical SEO Issues Fixed" },
  { value: "CWV", label: "Core Web Vitals Improved" },
  { value: "SEO", label: "Technical & Indexing Enhancements" },
];

const RESPONSIBILITIES = [
  {
    title: "Organic Growth & SEO Strategy",
    desc: "Formulated and executed data-backed SEO roadmaps focused on non-branded search expansion and intent-driven traffic.",
    icon: TrendingUp,
  },
  {
    title: "Content Optimization & Internal Linking",
    desc: "Systematically planned topic clusters, resolved keyword cannibalization, and built scalable internal linking architectures.",
    icon: Layers,
  },
  {
    title: "Technical SEO & Performance",
    desc: "Conducted exhaustive site health audits, resolved 500+ technical issues, improved Core Web Vitals, and resolved crawl anomalies.",
    icon: Search,
  },
  {
    title: "AI-Search & Discovery Optimization",
    desc: "Implemented structured data, entity-based search optimization, and forward-looking strategies for AI-assisted search engines.",
    icon: Globe,
  },
  {
    title: "Analytics & Performance Tracking",
    desc: "Maintained rigorous reporting via Google Search Console and GA4 to analyze traffic quality, user journeys, and conversions.",
    icon: BarChart3,
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative z-20 py-24 px-4 sm:px-8 max-w-7xl mx-auto w-full">
      {/* Section Header */}
      <div className="mb-14 text-center sm:text-left max-w-3xl">
        <div className="inline-flex items-center gap-2 mb-3 text-xs sm:text-sm font-mono tracking-[0.2em] text-blue-400 uppercase font-medium">
          <span>SECTION 04</span>
          <span className="text-slate-600">•</span>
          <span className="text-lime-400 font-semibold">EXPERIENCE</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
          Turning Search Into Growth
        </h2>

        <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed">
          Experience in driving measurable organic growth through technical SEO, content optimization, website performance improvements, and data-driven search strategies.
        </p>
      </div>

      {/* Main Experience Card */}
      <div className="p-6 sm:p-10 rounded-3xl bg-[#060b1e]/90 border border-blue-500/30 backdrop-blur-2xl shadow-2xl shadow-black/50">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-500/30 text-xs sm:text-sm font-mono text-blue-300 font-medium mb-3">
              <Briefcase className="w-4 h-4 text-lime-400" />
              <span>Industry Focus: EdTech</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              SEO Professional
            </h3>
          </div>

          <div className="inline-flex items-center gap-2 self-start md:self-auto px-4 py-2 rounded-full bg-lime-500/15 border border-lime-500/40 text-lime-400 font-mono text-xs sm:text-sm font-semibold">
            <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
            Current Role
          </div>
        </div>

        {/* Experience Metrics Grid */}
        <div className="my-8">
          <div className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-slate-300 font-semibold mb-4">
            Key Outcomes & Impact
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {EXP_RESULTS.map((res) => (
              <div
                key={res.label}
                className="p-4 rounded-xl bg-white/[0.06] border border-white/10 hover:border-blue-500/40 transition-colors"
              >
                <div className="text-2xl sm:text-3xl font-mono font-black text-white">
                  {res.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-200 font-medium mt-1 leading-snug">
                  {res.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Responsibilities Grid */}
        <div>
          <div className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-slate-300 font-semibold mb-4">
            Areas of Ownership
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {RESPONSIBILITIES.map((resp) => {
              const Icon = resp.icon;
              return (
                <div
                  key={resp.title}
                  className="p-5 rounded-xl bg-white/[0.05] border border-white/10 flex items-start gap-4 hover:border-blue-500/40 transition-colors md:last:col-span-2"
                >
                  <div className="p-2.5 rounded-lg bg-blue-950/60 border border-blue-500/30 text-blue-400 mt-0.5 shrink-0">
                    <Icon className="w-4 h-4 text-lime-400" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-1.5">
                      {resp.title}
                    </h4>
                    <p className="text-sm text-slate-300 font-normal leading-relaxed">
                      {resp.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
