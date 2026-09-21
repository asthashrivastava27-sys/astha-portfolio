"use client";

import { Eye, MousePointerClick, UserCheck, FileText, CheckCircle2, Zap, Wrench } from "lucide-react";

const MAJOR_METRICS = [
  {
    value: "6K+",
    label: "Organic Leads Generated",
    desc: "Qualified inbound lead acquisition through high-intent search positioning.",
    color: "from-lime-500/20 to-emerald-500/5",
    border: "border-lime-500/30",
    accent: "text-lime-400",
    icon: UserCheck,
  },
  {
    value: "269K+",
    label: "Organic Clicks",
    desc: "Targeted search traffic directed into high-converting conversion funnels.",
    color: "from-blue-500/20 to-indigo-500/5",
    border: "border-blue-500/30",
    accent: "text-blue-400",
    icon: MousePointerClick,
  },
  {
    value: "8.5M+",
    label: "Search Impressions",
    desc: "Broad organic brand visibility captured across competitive search queries.",
    color: "from-sky-500/20 to-blue-500/5",
    border: "border-sky-500/30",
    accent: "text-sky-300",
    icon: Eye,
  },
  {
    value: "1000+",
    label: "Content Pieces Published & Optimized",
    desc: "Systematic topic clusters, blogs, and landing pages scaled for long-term organic growth.",
    color: "from-purple-500/20 to-indigo-500/5",
    border: "border-purple-500/30",
    accent: "text-purple-300",
    icon: FileText,
  },
];

const SUPPORTING_ACHIEVEMENTS = [
  {
    value: "500+",
    label: "Technical SEO Issues Fixed",
    detail: "Crawl error resolution, site architecture fixes, and redirect cleanup.",
    icon: Wrench,
  },
  {
    value: "CWV",
    label: "Core Web Vitals Improved",
    detail: "Enhanced load speeds, visual stability, and interaction responsiveness.",
    icon: Zap,
  },
  {
    value: "SEO",
    label: "Technical & Indexing Enhancements",
    detail: "Structured data implementation, XML sitemaps, and robots configuration.",
    icon: CheckCircle2,
  },
];

export default function ResultsSection() {
  return (
    <section id="results" className="relative z-20 py-24 px-4 sm:px-8 max-w-7xl mx-auto w-full">
      {/* Section Header */}
      <div className="mb-14 text-center sm:text-left max-w-3xl">
        <div className="inline-flex items-center gap-2 mb-3 text-xs sm:text-sm font-mono tracking-[0.2em] text-blue-400 uppercase font-medium">
          <span>SECTION 02</span>
          <span className="text-slate-600">•</span>
          <span className="text-lime-400 font-semibold">SEO RESULTS</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
          Results Beyond Rankings
        </h2>

        <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed">
          Driving measurable business growth through SEO, content strategy, technical optimization, and search performance improvements.
        </p>
      </div>

      {/* Major Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {MAJOR_METRICS.map((m) => {
          const Icon = m.icon;
          return (
            <div
              key={m.label}
              className={`p-6 rounded-2xl bg-gradient-to-b ${m.color} bg-[#060b1e]/90 border ${m.border} backdrop-blur-xl shadow-xl shadow-black/40 flex flex-col justify-between group hover:border-lime-400/60 transition-all duration-300`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2.5 rounded-xl bg-white/10 border border-white/15 ${m.accent}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-medium">
                    VERIFIED RESULT
                  </span>
                </div>

                <div className="text-4xl sm:text-5xl font-black font-mono tracking-tight text-white mb-2 group-hover:text-lime-300 transition-colors">
                  {m.value}
                </div>

                <div className="text-sm font-semibold uppercase tracking-wider text-slate-100 font-mono">
                  {m.label}
                </div>
              </div>

              <p className="text-sm text-slate-300 font-normal leading-relaxed mt-4 pt-4 border-t border-white/10">
                {m.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* Supporting Technical Achievements */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {SUPPORTING_ACHIEVEMENTS.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="p-5 rounded-xl bg-[#060b1e]/90 border border-white/10 backdrop-blur-xl flex items-start gap-4 hover:border-blue-500/40 transition-colors"
            >
              <div className="p-2.5 rounded-lg bg-blue-950/70 border border-blue-500/30 text-lime-400 shrink-0">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-mono font-bold text-lime-400 uppercase tracking-wider mb-1">
                  {item.value}
                </div>
                <div className="text-base font-semibold text-white mb-1.5">
                  {item.label}
                </div>
                <div className="text-sm text-slate-300 font-normal leading-relaxed">
                  {item.detail}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
