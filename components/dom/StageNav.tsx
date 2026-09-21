"use client";

import { useSceneStore, StageId, sceneStore } from "@/stores/useSceneStore";
import { Sparkles } from "lucide-react";

const STAGES: { id: StageId; number: string; title: string; desc: string }[] = [
  { id: "SEARCH", number: "01", title: "SEARCH", desc: "Entity Graph & Discovery" },
  { id: "SIGNAL", number: "02", title: "SIGNAL", desc: "Authority & Intent Conduits" },
  { id: "SYSTEM", number: "03", title: "SYSTEM", desc: "Technical Architecture" },
  { id: "GROWTH", number: "04", title: "GROWTH", desc: "Organic Scale Engine" },
];

export default function StageNav() {
  const activeStage = useSceneStore((s) => s.activeStage);

  const handleStageClick = (stageId: StageId) => {
    sceneStore.setActiveStage(stageId);
    if (stageId === "SEARCH") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (stageId === "SIGNAL") {
      const el = document.getElementById("stage-signal");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 pt-5 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Monogram & Name */}
        <button
          onClick={() => handleStageClick("SEARCH")}
          className="pointer-events-auto flex items-center gap-3 text-left cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-[#091124]/90 border border-blue-500/30 flex items-center justify-center backdrop-blur-md shadow-lg shadow-blue-950/40 group-hover:border-lime-400/50 transition-colors">
            <span className="text-xs font-mono font-bold tracking-wider text-blue-400 group-hover:text-lime-400 transition-colors">
              AS
            </span>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-200 group-hover:text-white transition-colors">
              ASTHA SHRIVASTAVA
            </div>
            <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-blue-400/80 flex items-center gap-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />
              SEO PROFESSIONAL • ORGANIC GROWTH
            </div>
          </div>
        </button>

        {/* Central Pipeline Navigation (SEARCH -> SIGNAL -> SYSTEM -> GROWTH) */}
        <nav className="pointer-events-auto hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#060b1e]/80 border border-blue-500/20 backdrop-blur-xl shadow-xl shadow-black/50">
          {STAGES.map((stage, idx) => {
            const isActive = activeStage === stage.id;
            return (
              <div key={stage.id} className="flex items-center">
                <button
                  onClick={() => handleStageClick(stage.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? "bg-blue-600/20 text-white border border-blue-400/40 shadow-[0_0_15px_rgba(56,189,248,0.25)]"
                      : "text-slate-400 hover:text-slate-200 hover:bg-white/5 border border-transparent"
                  }`}
                >
                  <span
                    className={`text-[10px] ${
                      isActive ? "text-lime-400 font-bold" : "text-slate-500"
                    }`}
                  >
                    {stage.number}
                  </span>
                  <span className="tracking-widest">{stage.title}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-ping" />
                  )}
                </button>
                {idx < STAGES.length - 1 && (
                  <span className="text-slate-600 px-1 text-xs select-none">→</span>
                )}
              </div>
            );
          })}
        </nav>

        {/* Portfolio Status Indicator */}
        <div className="pointer-events-auto flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#060b1e]/80 border border-slate-800 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-lime-400" />
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-300">
              SEO & ORGANIC GROWTH
            </span>
            <span className="text-[10px] font-mono text-blue-400/80 border-l border-slate-800 pl-2">
              AI SEARCH & SEO
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
