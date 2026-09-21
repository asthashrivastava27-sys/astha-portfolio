"use client";

import { Award, CheckCircle } from "lucide-react";

const CERTIFICATIONS = [
  {
    institution: "Growth Scraper Academy",
    title: "No-Code AI Website Mastery Program",
    badge: "Web Development & AI",
    color: "border-blue-500/30",
  },
  {
    institution: "Semrush Academy",
    title: "Semrush SEO Crash Course",
    badge: "Search Engine Optimization",
    color: "border-lime-500/30",
  },
  {
    institution: "Semrush Academy",
    title: "Become an AI-Powered Marketer",
    badge: "AI Marketing & Strategy",
    color: "border-sky-500/30",
  },
  {
    institution: "Simplilearn",
    title: "Digital Marketing Specialist",
    badge: "Digital Strategy",
    color: "border-purple-500/30",
  },
  {
    institution: "HubSpot Academy",
    title: "Email Marketing Certification",
    badge: "Inbound Marketing",
    color: "border-indigo-500/30",
  },
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="relative z-20 py-24 px-4 sm:px-8 max-w-7xl mx-auto w-full">
      {/* Section Header */}
      <div className="mb-14 text-center sm:text-left max-w-3xl">
        <div className="inline-flex items-center gap-2 mb-3 text-xs sm:text-sm font-mono tracking-[0.2em] text-blue-400 uppercase font-medium">
          <span>SECTION 07</span>
          <span className="text-slate-600">•</span>
          <span className="text-lime-400 font-semibold">CERTIFICATIONS</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
          Certifications & Continuous Learning
        </h2>

        <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed">
          Industry-recognized certifications and ongoing specialization across SEO, website architecture, and AI-powered marketing.
        </p>
      </div>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5">
        {CERTIFICATIONS.map((cert, idx) => (
          <div
            key={cert.title}
            className={`p-6 rounded-2xl bg-[#060b1e]/90 border ${cert.color} backdrop-blur-xl shadow-xl shadow-black/40 flex flex-col justify-between hover:translate-y-[-2px] transition-all ${idx < 3 ? "lg:col-span-2" : "lg:col-span-3"} ${idx === 4 ? "md:col-span-2" : "md:col-span-1"}`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
                  {cert.badge}
                </span>
                <Award className="w-4 h-4 text-lime-400" />
              </div>

              <div className="text-xs sm:text-sm font-mono text-blue-300 font-semibold uppercase tracking-wider mb-1.5">
                {cert.institution}
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 leading-snug">
                {cert.title}
              </h3>
            </div>

            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200 font-medium pt-4 border-t border-white/10">
              <CheckCircle className="w-4 h-4 text-lime-400" />
              <span>Verified Credential</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
