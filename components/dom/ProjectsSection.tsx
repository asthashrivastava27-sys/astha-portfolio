"use client";

import { ExternalLink, Check, Code2, Globe, TrendingUp, Users, FileSpreadsheet } from "lucide-react";

const SIMPLE_SCALERS_OWNERSHIP = [
  "Project planning & website brief",
  "Website structure & content architecture",
  "UI/UX & page design",
  "SEO implementation",
  "GA4 & Google Search Console",
  "Core Web Vitals optimization",
  "GitHub version control",
  "Domain & Cloudflare configuration",
];

const SIMPLE_SCALERS_TECH_STEPS = [
  "AI-assisted development with v0",
  "Vercel deployment",
  "MongoDB database",
  "Resend email integration",
  "Lead capture form",
  "reCAPTCHA integration",
  "Domain migration to Cloudflare",
  "Production website launch",
];

const TOOLS = [
  "v0",
  "Next.js",
  "Vercel",
  "MongoDB",
  "Resend",
  "Cloudflare",
  "GitHub",
  "GA4",
  "GSC",
  "SEO",
];

const OTHER_PROJECTS = [
  {
    title: "Organic Traffic Growth",
    stat: "+30%",
    statLabel: "Organic Traffic",
    desc: "Contributed to increasing organic traffic from 143K+ to 186K+ through content optimization, technical SEO improvements, internal linking, and search-focused content strategies.",
    icon: TrendingUp,
    badge: "Traffic Scale",
    border: "border-blue-500/30",
  },
  {
    title: "Organic Lead Generation",
    stat: "14x",
    statLabel: "Lead Growth",
    desc: "Supported organic lead growth from 433 to 6,381 through conversion-focused SEO, content placement, landing page optimization, and improved user journeys.",
    icon: Users,
    badge: "Conversion Engine",
    border: "border-lime-500/30",
  },
  {
    title: "Content Scaling Strategy",
    stat: "1000+",
    statLabel: "Assets Optimized",
    desc: "Managed and optimized 1000+ content assets across blogs, landing pages, and course-related properties while improving search visibility, keyword coverage, and organic performance.",
    icon: FileSpreadsheet,
    badge: "Content Systems",
    border: "border-purple-500/30",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative z-20 py-24 px-4 sm:px-8 max-w-7xl mx-auto w-full">
      {/* Section Header */}
      <div className="mb-14 text-center sm:text-left max-w-3xl">
        <div className="inline-flex items-center gap-2 mb-3 text-xs sm:text-sm font-mono tracking-[0.2em] text-blue-400 uppercase font-medium">
          <span>SECTION 05</span>
          <span className="text-slate-600">•</span>
          <span className="text-lime-400 font-semibold">PROJECTS</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
          Featured Projects
        </h2>

        <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed">
          Selected projects showcasing my experience across SEO, organic growth, content strategy, analytics, and AI-assisted website development.
        </p>
      </div>

      {/* FEATURED PROJECT: Simple Scalers */}
      <div className="mb-12 p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-[#091124] to-[#060b1e] border border-blue-500/30 backdrop-blur-2xl shadow-2xl shadow-black/60">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lime-500/15 border border-lime-500/30 text-xs sm:text-sm font-mono text-lime-300 font-medium mb-3">
              <Globe className="w-4 h-4 text-lime-400" />
              <span>Live Business Website • End-to-End Ownership</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-black text-white">
              Simple Scalers
            </h3>
          </div>

          <a
            href="https://simplescalers.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-start lg:self-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-mono text-xs sm:text-sm font-semibold shadow-lg shadow-blue-950/60 hover:shadow-[0_0_25px_rgba(163,230,53,0.35)] hover:border-lime-400 border border-blue-400/40 transition-all cursor-pointer"
          >
            <span>Visit Website</span>
            <ExternalLink className="w-4 h-4 text-lime-300" />
          </a>
        </div>

        {/* Description */}
        <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed my-6">
          Planned, designed, built, optimized, and launched a complete business website from scratch. Managed the project end-to-end, including project brief, site structure, content architecture, UI/UX, SEO, analytics, database integration, lead capture, email automation, security, version control, domain management, and production deployment.
        </p>

        {/* Ownership & Tech Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          {/* Project Ownership */}
          <div className="p-6 rounded-2xl bg-[#040817]/90 border border-white/10">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-blue-400 font-bold mb-4">
              <Code2 className="w-4 h-4 text-blue-400" />
              <span>Project Ownership</span>
            </div>
            <ul className="space-y-3">
              {SIMPLE_SCALERS_OWNERSHIP.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-200 font-normal">
                  <Check className="w-4 h-4 text-lime-400 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Development & Deployment */}
          <div className="p-6 rounded-2xl bg-[#040817]/90 border border-white/10">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-lime-400 font-bold mb-4">
              <Globe className="w-4 h-4 text-lime-400" />
              <span>Development & Deployment</span>
            </div>
            <ul className="space-y-3">
              {SIMPLE_SCALERS_TECH_STEPS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-200 font-normal">
                  <Check className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tools Badges */}
        <div>
          <div className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-slate-300 font-semibold mb-3">
            Technologies & Tools Used:
          </div>
          <div className="flex flex-wrap gap-2">
            {TOOLS.map((tool) => (
              <span
                key={tool}
                className="px-3.5 py-1.5 rounded-lg bg-white/[0.08] border border-white/15 text-xs sm:text-sm font-mono text-slate-100 font-medium"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* OTHER PROJECT CASE STUDIES */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {OTHER_PROJECTS.map((proj) => {
          const Icon = proj.icon;
          return (
            <div
              key={proj.title}
              className={`p-6 rounded-2xl bg-[#060b1e]/90 border ${proj.border} backdrop-blur-xl shadow-xl shadow-black/40 flex flex-col justify-between hover:translate-y-[-2px] transition-all duration-200`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-white/10 border border-white/15 text-lime-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
                    {proj.badge}
                  </span>
                </div>

                <div className="text-3xl sm:text-4xl font-mono font-black text-white mb-1">
                  {proj.stat}
                </div>
                <div className="text-sm font-mono font-bold uppercase tracking-wider text-lime-400 mb-3">
                  {proj.statLabel}
                </div>

                <h4 className="text-lg font-bold text-white mb-2">
                  {proj.title}
                </h4>
              </div>

              <p className="text-sm text-slate-300 font-normal leading-relaxed mt-4 pt-4 border-t border-white/10">
                {proj.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
