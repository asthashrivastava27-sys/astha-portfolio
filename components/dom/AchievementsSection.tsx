"use client";

import { Star, TrendingUp } from "lucide-react";

const ACHIEVEMENTS = [
  {
    title: "Best Ideator Award",
    desc: "Recognized for creativity, innovation, and problem-solving during a digital marketing internship.",
    icon: Star,
    highlight: "Innovation Recognition",
    color: "border-blue-500/30 text-blue-400",
  },
  {
    title: "High-Impact SEO Contributions",
    desc: "Contributed to initiatives that generated thousands of organic leads and millions of search impressions.",
    icon: TrendingUp,
    highlight: "Business Growth",
    color: "border-purple-500/30 text-purple-300",
  },
];

export default function AchievementsSection() {
  return (
    <section id="achievements" className="relative z-20 py-24 px-4 sm:px-8 max-w-7xl mx-auto w-full">
      {/* Section Header */}
      <div className="mb-14 text-center sm:text-left max-w-3xl">
        <div className="inline-flex items-center gap-2 mb-3 text-xs sm:text-sm font-mono tracking-[0.2em] text-blue-400 uppercase font-medium">
          <span>SECTION 08</span>
          <span className="text-slate-600">•</span>
          <span className="text-lime-400 font-semibold">ACHIEVEMENTS</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
          Recognition & Milestones
        </h2>

        <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed">
          Notable milestones and recognitions earned through creative problem solving, team collaboration, and high-impact SEO execution.
        </p>
      </div>

      {/* Achievements Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ACHIEVEMENTS.map((ach) => {
          const Icon = ach.icon;
          return (
            <div
              key={ach.title}
              className={`p-6 sm:p-8 rounded-3xl bg-[#060b1e]/90 border ${ach.color} backdrop-blur-xl shadow-xl shadow-black/40 flex flex-col justify-between hover:translate-y-[-2px] transition-all`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-white/10 border border-white/15">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
                    {ach.highlight}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">
                  {ach.title}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-slate-200 font-normal leading-relaxed mt-4 pt-4 border-t border-white/10">
                {ach.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
