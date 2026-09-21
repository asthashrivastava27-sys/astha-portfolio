"use client";

import { Mail, FileText, ArrowRight } from "lucide-react";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const CONTACT_CARDS = [
  {
    label: "Email",
    actionText: "Let's connect over email",
    href: "mailto:astha.shrivastava27@gmail.com",
    icon: Mail,
    color: "border-blue-500/30",
  },
  {
    label: "LinkedIn",
    actionText: "Connect with me professionally",
    footerText: "View my professional profile and experience",
    href: "https://www.linkedin.com/in/astha-shrivastava23/",
    icon: LinkedinIcon,
    color: "border-lime-500/30",
  },
  {
    label: "Resume",
    actionText: "View my Resume",
    href: "/Astha-Shrivastava-Resume.pdf",
    icon: FileText,
    color: "border-sky-500/30",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="relative z-20 py-24 px-4 sm:px-8 max-w-7xl mx-auto w-full">
      {/* Section Header */}
      <div className="mb-14 text-center sm:text-left max-w-3xl">
        <div className="inline-flex items-center gap-2 mb-3 text-xs sm:text-sm font-mono tracking-[0.2em] text-blue-400 uppercase font-medium">
          <span>SECTION 09</span>
          <span className="text-slate-600">•</span>
          <span className="text-lime-400 font-semibold">LET&apos;S CONNECT</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
          Let&apos;s Build Meaningful Growth
        </h2>

        <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed mb-8">
          Whether it&apos;s SEO strategy, content optimization, technical improvements, website growth, or digital marketing opportunities, I&apos;m always open to meaningful conversations and collaborations.
        </p>

        <a
          href="mailto:astha.shrivastava27@gmail.com"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-mono text-sm font-semibold uppercase tracking-wider border border-blue-400/40 shadow-xl shadow-blue-950/60 hover:shadow-[0_0_30px_rgba(163,230,53,0.35)] hover:border-lime-400 transition-all cursor-pointer group"
        >
          <span>Get in Touch</span>
          <ArrowRight className="w-4 h-4 text-lime-300 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      {/* Contact Cards Grid — 3 Cards cleanly balanced */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {CONTACT_CARDS.map((card) => {
          const Icon = card.icon;
          return (
            <a
              key={card.label}
              href={card.href}
              target={card.href.startsWith("http") || card.href.endsWith(".pdf") ? "_blank" : undefined}
              rel={card.href.startsWith("http") || card.href.endsWith(".pdf") ? "noopener noreferrer" : undefined}
              className={`p-6 sm:p-7 rounded-2xl bg-[#060b1e]/90 border ${card.color} backdrop-blur-xl shadow-xl shadow-black/40 flex flex-col justify-between hover:translate-y-[-2px] hover:border-lime-400/60 transition-all cursor-pointer group`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-white/10 border border-white/15 text-blue-400 group-hover:text-lime-400 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
                    {card.label}
                  </span>
                </div>

                <div className="text-lg font-bold text-white mb-1.5 group-hover:text-lime-300 transition-colors">
                  {card.actionText}
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-slate-200 font-medium mt-6 pt-4 border-t border-white/10 group-hover:text-white transition-colors">
                <span>{card.footerText || "Open link"}</span>
                <ArrowRight className="w-4 h-4 text-lime-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
