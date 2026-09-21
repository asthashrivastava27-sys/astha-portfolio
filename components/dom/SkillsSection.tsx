"use client";

import { Search, BarChart3, TrendingUp, Code2 } from "lucide-react";

const SKILL_CATEGORIES = [
  {
    category: "SEO & Search Strategy",
    desc: "Data-driven organic search methodologies and structural optimization.",
    icon: Search,
    color: "border-blue-500/30 text-blue-400",
    skills: [
      "Technical SEO",
      "On-Page SEO",
      "Keyword Research",
      "Content Strategy",
      "Internal Linking",
      "SEO Audits",
      "Core Web Vitals",
      "Search Visibility",
    ],
  },
  {
    category: "Analytics & SEO Tools",
    desc: "Rigorous measurement platforms for query intelligence and performance audits.",
    icon: BarChart3,
    color: "border-lime-500/30 text-lime-400",
    skills: [
      "Google Search Console",
      "Google Analytics 4",
      "Looker Studio",
      "SEMrush",
      "Ahrefs",
      "Google Trends",
      "Search Performance Analysis",
      "Competitor Analysis",
    ],
  },
  {
    category: "Content & Growth",
    desc: "Creating and scaling authoritative content that converts search intent into business leads.",
    icon: TrendingUp,
    color: "border-sky-500/30 text-sky-300",
    skills: [
      "Content Optimization",
      "Content Planning",
      "Search Intent Analysis",
      "Content Audits",
      "Conversion Optimization",
      "Organic Growth",
      "Lead Generation",
    ],
  },
  {
    category: "Website & Technical",
    desc: "Hands-on website development, architecture, security, and modern web deployment.",
    icon: Code2,
    color: "border-purple-500/30 text-purple-300",
    skills: [
      "Website Architecture",
      "UI/UX",
      "v0",
      "Next.js",
      "Vercel",
      "MongoDB",
      "Resend",
      "GitHub",
      "Cloudflare",
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative z-20 py-24 px-4 sm:px-8 max-w-7xl mx-auto w-full">
      {/* Section Header */}
      <div className="mb-14 text-center sm:text-left max-w-3xl">
        <div className="inline-flex items-center gap-2 mb-3 text-xs sm:text-sm font-mono tracking-[0.2em] text-blue-400 uppercase font-medium">
          <span>SECTION 06</span>
          <span className="text-slate-600">•</span>
          <span className="text-lime-400 font-semibold">SKILLS & EXPERTISE</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
          Skills & Expertise
        </h2>

        <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed">
          A combination of SEO strategy, content growth, analytics, technical optimization, and hands-on website development.
        </p>
      </div>

      {/* Skills 4-Category Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SKILL_CATEGORIES.map((cat) => {
          const Icon = cat.icon;
          return (
            <div
              key={cat.category}
              className={`p-6 sm:p-8 rounded-3xl bg-[#060b1e]/90 border ${cat.color} backdrop-blur-xl shadow-xl shadow-black/40 flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-white/10 border border-white/15">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {cat.category}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed mb-6">
                  {cat.desc}
                </p>

                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-xl bg-white/[0.07] border border-white/15 text-xs sm:text-sm font-mono font-medium text-slate-100 hover:border-lime-400/60 hover:text-lime-300 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
