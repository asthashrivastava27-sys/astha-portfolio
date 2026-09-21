"use client";

import { useSceneStore, sceneStore } from "@/stores/useSceneStore";
import { Network, Sparkles, Orbit } from "lucide-react";

export default function HeroOverlay() {
  const hoveredNode = useSceneStore((s) => s.hoveredNode);
  const activeStage = useSceneStore((s) => s.activeStage);

  return (
    <div className="relative z-20 w-full min-h-screen flex flex-col justify-between px-4 sm:px-8 pt-24 pb-8 pointer-events-none select-none">
      {/* Top ambient tag */}
      <div className="max-w-7xl mx-auto w-full flex justify-between items-start pt-2">
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0a1128]/80 border border-blue-500/30 backdrop-blur-md">
          <Orbit className="w-3.5 h-3.5 text-lime-400 animate-spin" style={{ animationDuration: "12s" }} />
          <span className="text-[11px] font-mono tracking-widest text-slate-300 uppercase">
            3D SEO Visualization • Organic Growth Strategy
          </span>
        </div>

        {/* Mobile Stage Indicator */}
        <div className="lg:hidden pointer-events-auto">
          <span className="px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-[10px] font-mono text-lime-400">
            {activeStage} STAGE
          </span>
        </div>
      </div>

      {/* Central Hero Typography Block */}
      <div className="max-w-7xl mx-auto w-full my-auto py-12 flex flex-col items-center text-center">
        {/* Name & Sub-Role Badge */}
        <div className="inline-flex items-center gap-3 mb-6 px-4 py-1.5 rounded-full bg-[#081026]/90 border border-blue-400/20 backdrop-blur-xl shadow-lg">
          <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-slate-100 uppercase">
            ASTHA SHRIVASTAVA
          </span>
          <span className="w-1 h-1 rounded-full bg-blue-400" />
          <span className="text-xs sm:text-sm font-mono tracking-[0.2em] text-lime-400 font-medium uppercase">
            SEO PROFESSIONAL
          </span>
        </div>

        {/* Core Statement Typography */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.04] max-w-5xl mb-6">
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400 drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
            SEARCH IS EVOLVING.
          </span>
          <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300 drop-shadow-[0_0_30px_rgba(56,189,248,0.35)]">
            I&apos;M EVOLVING WITH IT.
          </span>
        </h1>

        {/* Conceptual Manifesto Subtitle */}
        <p className="max-w-2xl text-sm sm:text-base md:text-lg text-slate-300 font-light leading-relaxed mb-8 drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]">
          Architecting living search systems at the intersection of semantic entities,
          algorithmic intelligence, and scalable organic growth.
        </p>

        {/* Action Controls & Interactive Hooks */}
        <div className="pointer-events-auto flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => {
              sceneStore.setActiveStage("SIGNAL");
              document.getElementById("stage-signal")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-mono tracking-widest uppercase font-semibold border border-blue-400/40 shadow-[0_0_25px_rgba(37,99,235,0.4)] hover:shadow-[0_0_35px_rgba(163,230,53,0.35)] hover:border-lime-400/60 transition-all flex items-center gap-2 cursor-pointer group"
          >
            <Sparkles className="w-4 h-4 text-lime-300 group-hover:rotate-12 transition-transform" />
            Traverse Data Universe
          </button>

          <button
            onClick={() => {
              sceneStore.setActiveStage("SIGNAL");
              document.getElementById("stage-signal")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-6 py-3 rounded-xl bg-[#060b1e]/80 text-slate-300 text-xs font-mono tracking-widest uppercase border border-slate-700/60 hover:border-blue-400/50 hover:text-white backdrop-blur-md transition-all flex items-center gap-2 cursor-pointer"
          >
            <Network className="w-4 h-4 text-blue-400" />
            View SEO Signals
          </button>
        </div>
      </div>

      {/* Bottom Telemetry HUD & Scroll Direction */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 items-end gap-4">
        {/* Left: Dynamic 3D Node Telemetry (Live Raycast Readout) */}
        <div className="pointer-events-auto">
          <div className="p-3.5 rounded-xl bg-[#060b1e]/85 border border-blue-500/25 backdrop-blur-xl shadow-xl shadow-black/60 max-w-sm transition-all">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-2 mb-2">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500" />
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-300">
                  {hoveredNode ? "SEO PILLAR INSPECTED" : "PORTFOLIO HIGHLIGHTS"}
                </span>
              </div>
              <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-blue-950/80 border border-blue-400/30 text-blue-300">
                {hoveredNode ? hoveredNode.category : "RESULTS"}
              </span>
            </div>

            {hoveredNode ? (
              <div className="space-y-1">
                <div className="text-xs font-semibold text-white tracking-wide">
                  {hoveredNode.label}
                </div>
                <div className="text-[11px] text-slate-400 font-light pt-0.5">
                  {hoveredNode.focus}
                </div>
              </div>
            ) : (
              <div className="text-[11px] font-mono text-slate-300 flex items-center justify-between">
                <span>8.5M+ IMPRESSIONS</span>
                <span className="text-slate-600">•</span>
                <span className="text-lime-400">269K+ CLICKS</span>
                <span className="text-slate-600">•</span>
                <span className="text-blue-300">6K+ LEADS</span>
              </div>
            )}
          </div>
        </div>

        {/* Center: Scroll Cue to Signal Phase */}
        <div className="flex flex-col items-center justify-center text-center">
          <button
            onClick={() => {
              sceneStore.setActiveStage("SIGNAL");
              document.getElementById("stage-signal")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="pointer-events-auto flex flex-col items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer group"
          >
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-400 group-hover:text-lime-400 transition-colors">
              SEARCH → SIGNAL → SYSTEM → GROWTH
            </span>
            <div className="w-5 h-8 rounded-full border border-slate-700/80 flex items-start justify-center p-1 group-hover:border-blue-400 transition-colors">
              <div className="w-1 h-2 rounded-full bg-blue-400 animate-bounce" />
            </div>
          </button>
        </div>

        {/* Right: Technical Pillar Indicators */}
        <div className="hidden md:flex justify-end pointer-events-auto">
          <div className="flex items-center gap-2 p-2 px-3 rounded-lg bg-[#060b1e]/70 border border-slate-800/80 backdrop-blur-md text-[10px] font-mono text-slate-400">
            <span className="text-blue-400">TECHNICAL SEO</span>
            <span className="text-slate-600">|</span>
            <span className="text-indigo-300">CONTENT STRATEGY</span>
            <span className="text-slate-600">|</span>
            <span className="text-lime-400">ORGANIC GROWTH</span>
          </div>
        </div>
      </div>
    </div>
  );
}
