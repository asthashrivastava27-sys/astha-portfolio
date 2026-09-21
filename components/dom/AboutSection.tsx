"use client";

import { GraduationCap, Target, Compass, Sparkles } from "lucide-react";

const INFO_CARDS = [
  {
    icon: GraduationCap,
    label: "EDUCATION",
    title: "B.Tech in Electronics & Communication Engineering",
    detail: "Engineering foundation providing strong analytical rigor and algorithmic comprehension.",
    color: "border-blue-500/30 text-blue-400",
  },
  {
    icon: Target,
    label: "SPECIALIZATION",
    title: "SEO, Content Strategy & Technical Optimization",
    detail: "End-to-end organic growth from search intent research to technical performance.",
    color: "border-lime-500/30 text-lime-400",
  },
  {
    icon: Compass,
    label: "CURRENT FOCUS",
    title: "AI Search, SEO & Organic Growth",
    detail: "Adapting to the new landscape of AI-assisted search and generative engines.",
    color: "border-sky-500/30 text-sky-300",
  },
  {
    icon: Sparkles,
    label: "INTERESTS",
    title: "Technology, Space & Nature",
    detail: "Curious exploration of complex systems, emergent technology, and digital design.",
    color: "border-purple-500/30 text-purple-300",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative z-20 py-24 px-4 sm:px-8 max-w-7xl mx-auto w-full">
      {/* Section Header */}
      <div className="mb-12 max-w-3xl">
        <div className="inline-flex items-center gap-2 mb-3 text-xs sm:text-sm font-mono tracking-[0.2em] text-blue-400 uppercase font-medium">
          <span>SECTION 03</span>
          <span className="text-slate-600">•</span>
          <span className="text-lime-400 font-semibold">ABOUT</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-6">
          Bridging Technical Thinking and Search Growth
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Narrative Column */}
        <div className="lg:col-span-7 space-y-6 text-slate-200 font-normal leading-relaxed text-base sm:text-lg">
          <p className="p-6 sm:p-7 rounded-2xl bg-[#060b1e]/90 border border-blue-500/30 backdrop-blur-xl shadow-xl text-white font-medium text-lg sm:text-xl leading-relaxed">
            I&apos;m Astha Shrivastava, an SEO Professional with an engineering background and a passion for driving sustainable organic growth through data-driven search strategies.
          </p>

          <div className="p-6 sm:p-7 rounded-2xl bg-[#060b1e]/90 border border-white/10 backdrop-blur-xl space-y-5 text-base sm:text-lg text-slate-200 leading-[1.75]">
            <p>
              Coming from an engineering background, I was naturally drawn to the analytical side of digital marketing, where data, user behavior, and search intent come together to drive measurable business growth.
            </p>
            <p>
              Since then, I’ve worked on content strategy, technical SEO, website optimization, internal linking, performance improvements, and search visibility initiatives that have helped drive millions of search impressions, hundreds of thousands of organic clicks, and thousands of organic leads.
            </p>
            <p>
              I enjoy combining analytical thinking with creativity to solve growth challenges, improve user experiences, and help businesses build a stronger digital presence. As search continues to evolve with AI, I remain focused on learning, adapting, and creating strategies that deliver measurable impact.
            </p>
          </div>
        </div>

        {/* Right Info Cards Column */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
          {INFO_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.label}
                className={`p-5 sm:p-6 rounded-2xl bg-[#060b1e]/90 border ${card.color} backdrop-blur-xl shadow-xl transition-all hover:translate-x-1`}
              >
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="p-2.5 rounded-lg bg-white/10 border border-white/15">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-slate-300 font-semibold">
                    {card.label}
                  </span>
                </div>
                <div className="text-base font-bold text-white mb-1.5">
                  {card.title}
                </div>
                <div className="text-sm text-slate-300 font-normal leading-relaxed">
                  {card.detail}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
