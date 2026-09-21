"use client";

import { useSceneStore } from "@/stores/useSceneStore";
import { Eye, MousePointerClick, UserCheck, FileText, Wrench, Link2, Zap, Search } from "lucide-react";

// Primary Real Portfolio Metrics
const PRIMARY_METRICS = [
  {
    value: "8.5M+",
    label: "SEARCH IMPRESSIONS",
    category: "SEARCH VISIBILITY",
    stream: "DISCOVER",
    color: "from-blue-500/20 to-sky-500/10",
    borderColor: "border-blue-400/30",
    badgeColor: "text-blue-400 border-blue-400/40 bg-blue-950/60",
    icon: Eye,
  },
  {
    value: "269K+",
    label: "ORGANIC CLICKS",
    category: "ORGANIC ENGAGEMENT",
    stream: "ENGAGE",
    color: "from-indigo-500/20 to-blue-500/10",
    borderColor: "border-indigo-400/30",
    badgeColor: "text-sky-300 border-indigo-400/40 bg-indigo-950/60",
    icon: MousePointerClick,
  },
  {
    value: "6K+",
    label: "ORGANIC LEADS GENERATED",
    category: "LEAD GENERATION",
    stream: "CONVERT",
    color: "from-lime-500/20 to-emerald-500/10",
    borderColor: "border-lime-400/30",
    badgeColor: "text-lime-400 border-lime-400/40 bg-lime-950/60",
    icon: UserCheck,
  },
  {
    value: "570+",
    label: "BLOGS PUBLISHED",
    category: "CONTENT PERFORMANCE",
    stream: "GROW",
    color: "from-purple-500/20 to-indigo-500/10",
    borderColor: "border-purple-400/30",
    badgeColor: "text-purple-300 border-purple-400/40 bg-purple-950/60",
    icon: FileText,
  },
];

// Content, Technical & Performance Outcomes
const TECHNICAL_OUTCOMES = [
  {
    label: "200+ CONTENT ASSETS OPTIMIZED",
    detail: "Systematic topic clusters & on-page updates",
    icon: Search,
  },
  {
    label: "290+ BROKEN LINKS FIXED",
    detail: "Crawl efficiency & internal linking recovery",
    icon: Link2,
  },
  {
    label: "Core Web Vitals Improved",
    detail: "User experience & page performance boosts",
    icon: Zap,
  },
  {
    label: "Technical & Indexing Enhancements",
    detail: "Structured data, robots & sitemap optimization",
    icon: Wrench,
  },
];

export default function SignalOverlay() {
  const signalHud = useSceneStore((s) => s.signalHud);

  return (
    <div className="relative z-20 w-full min-h-screen flex flex-col justify-between px-4 sm:px-8 pt-24 pb-12 pointer-events-none select-none">
      {/* Top Header & Context Tag */}
      <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#060b1e]/90 border border-blue-500/30 backdrop-blur-md shadow-lg shadow-black/40">
          <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
          <span className="text-[11px] font-mono tracking-widest text-slate-300 uppercase">
            STAGE 02 // SIGNAL • MEASURABLE OUTCOMES
          </span>
        </div>

        {/* Dynamic 3D Signal HUD */}
        <div className="pointer-events-auto">
          {signalHud ? (
            <div className="px-4 py-2 rounded-xl bg-[#060b1e]/90 border border-lime-400/50 backdrop-blur-xl shadow-[0_0_25px_rgba(163,230,53,0.25)] flex items-center gap-3 animate-in fade-in zoom-in-95 duration-200">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500" />
              </span>
              <div>
                <div className="text-[10px] font-mono tracking-widest text-lime-400 font-bold uppercase">
                  SIGNAL DETECTED
                </div>
                <div className="text-xs font-semibold text-white tracking-wide">
                  {signalHud.type}
                </div>
              </div>
              <div className="border-l border-slate-800 pl-3 text-right">
                <div className="text-[9px] font-mono text-slate-400 uppercase">{signalHud.stream}</div>
                <div className="text-xs font-mono font-bold text-sky-300">{signalHud.metricValue}</div>
              </div>
            </div>
          ) : (
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#060b1e]/70 border border-slate-800 backdrop-blur-md text-[10px] font-mono text-slate-400">
              <Eye className="w-3 h-3 text-blue-400" />
              <span>HOVER 3D NODES TO VIEW SIGNALS</span>
            </div>
          )}
        </div>
      </div>

      {/* Main Section Header & Narrative */}
      <div className="max-w-7xl mx-auto w-full my-auto py-6 text-center sm:text-left">
        <div className="max-w-3xl">
          {/* Section Sub-Tag */}
          <div className="inline-flex items-center gap-2 mb-2 text-xs font-mono tracking-[0.25em] text-blue-400 uppercase">
            <span>STAGE 02</span>
            <span className="text-slate-600">•</span>
            <span className="text-lime-400 font-semibold">SIGNAL</span>
          </div>

          {/* Editorial Headline */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.08] mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300 drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
              READING THE SIGNAL
            </span>
          </h2>

          {/* Three-Line Narrative Triad */}
          <div className="space-y-1 font-mono text-xs sm:text-sm md:text-base text-slate-300 drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]">
            <p>Search creates data.</p>
            <p className="text-blue-300">Data creates patterns.</p>
            <p className="text-lime-400 font-medium">Patterns reveal what is working.</p>
          </div>

          {/* Authentic SEO Philosophy */}
          <p className="mt-4 text-xs sm:text-sm md:text-base text-slate-300 font-light leading-relaxed max-w-2xl">
            SEO is not just about rankings. It&apos;s about understanding what people search for, how they engage, and what drives organic growth.
          </p>
        </div>

        {/* Primary Real Portfolio Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 pointer-events-auto">
          {PRIMARY_METRICS.map((m) => {
            const Icon = m.icon;
            const isTargeted = signalHud?.type === m.category;

            return (
              <div
                key={m.label}
                className={`p-5 rounded-2xl bg-gradient-to-b ${m.color} bg-[#060b1e]/85 border ${
                  isTargeted ? "border-lime-400 shadow-[0_0_30px_rgba(163,230,53,0.3)] scale-[1.02]" : m.borderColor
                } backdrop-blur-xl transition-all duration-300 flex flex-col justify-between group`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-[9px] font-mono px-2 py-0.5 rounded-full border ${m.badgeColor} uppercase tracking-wider font-semibold`}
                    >
                      {m.stream}
                    </span>
                    <Icon className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                  </div>

                  <div className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-white group-hover:text-lime-300 transition-colors">
                    {m.value}
                  </div>

                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-200 mt-1 font-semibold">
                    {m.label}
                  </div>
                </div>

                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mt-3 pt-3 border-t border-white/5">
                  {m.category}
                </div>
              </div>
            );
          })}
        </div>

        {/* Supporting Content & Technical Enhancements Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-4 pointer-events-auto">
          {TECHNICAL_OUTCOMES.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="p-3.5 rounded-xl bg-[#060b1e]/75 border border-slate-800/80 backdrop-blur-md flex items-start gap-3 hover:border-blue-400/40 transition-colors"
              >
                <div className="p-1.5 rounded-lg bg-blue-950/60 border border-blue-500/20 text-blue-400 mt-0.5">
                  <Icon className="w-3.5 h-3.5 text-lime-400" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-200 font-mono">
                    {item.label}
                  </div>
                  <div className="text-[10px] text-slate-400 font-light mt-0.5">
                    {item.detail}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Status Bar */}
      <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] font-mono text-slate-400 pt-4 border-t border-slate-900">
        <div className="flex items-center gap-3">
          <span className="text-lime-400 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-lime-400" />
            ORGANIC GROWTH • SEARCH VISIBILITY • CONTENT PERFORMANCE • LEAD GENERATION
          </span>
        </div>

        <div className="text-slate-500 text-center sm:text-right">
          ASTHA SHRIVASTAVA • SEO PROFESSIONAL
        </div>
      </div>
    </div>
  );
}
