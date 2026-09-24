import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  Briefcase,
  GraduationCap,
  Award,
  Languages as LanguagesIcon,
  FolderGit2,
  Cpu,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Resume | Astha Shrivastava",
  description:
    "Official Resume of Astha Shrivastava — SEO Executive, Growth Marketer, and AI-Powered Digital Marketing Professional.",
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 selection:bg-blue-500/30 selection:text-white font-sans antialiased">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-30 w-full backdrop-blur-xl bg-[#020617]/85 border-b border-white/10 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-mono text-slate-300 hover:text-white transition-colors group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-sky-400 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Portfolio</span>
          </Link>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-xs font-mono text-sky-300">
            <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
            <span>Curriculum Vitae</span>
          </div>
        </div>
      </header>

      {/* Main Resume Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* Resume Sheet Card */}
        <article className="rounded-3xl bg-[#060b1e]/90 border border-white/10 p-6 sm:p-10 lg:p-12 shadow-2xl shadow-black/60 backdrop-blur-xl">
          
          {/* Header Section */}
          <div className="pb-8 border-b border-white/10">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div>
                <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-2">
                  Astha Shrivastava
                </h1>
                <p className="text-base sm:text-lg font-medium text-sky-400 font-mono">
                  SEO Executive | Growth Marketer | AI-Powered Digital Marketing
                </p>
              </div>

              {/* Contact Information Chips */}
              <div className="flex flex-wrap gap-2.5 sm:gap-3 text-xs sm:text-sm font-mono">
                <a
                  href="mailto:astha.shrivastava27@gmail.com"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-blue-600/20 border border-white/10 hover:border-blue-400/50 text-slate-200 transition-colors"
                >
                  <Mail className="w-4 h-4 text-sky-400" />
                  <span>astha.shrivastava27@gmail.com</span>
                </a>
                <a
                  href="tel:+918989417800"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-blue-600/20 border border-white/10 hover:border-blue-400/50 text-slate-200 transition-colors"
                >
                  <Phone className="w-4 h-4 text-lime-400" />
                  <span>+91-8989417800</span>
                </a>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-slate-300">
                  <MapPin className="w-4 h-4 text-indigo-400" />
                  <span>Madhya Pradesh</span>
                </span>
              </div>
            </div>

            {/* Profile Summary */}
            <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/10">
              <h2 className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-slate-400 mb-2">
                Profile
              </h2>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                Results-driven SEO and Digital Marketing professional with 2+ years of experience in organic growth, content strategy, and AI-powered marketing. Skilled in SEO, analytics, email marketing, and no-code website development, with hands-on experience building and optimizing websites using modern AI tools and workflows.
              </p>
            </div>
          </div>

          {/* Two-Column Grid: Main Body (Experience, Skills, Projects) + Aside (Achievements, Certs, Education, Languages) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-10">
            
            {/* Left / Main Column (8 cols) */}
            <div className="lg:col-span-8 space-y-10">
              
              {/* WORK EXPERIENCE */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-xl bg-blue-500/10 border border-blue-400/20 text-sky-400">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Work Experience
                  </h2>
                </div>

                <div className="space-y-6">
                  {/* Role 1: SEO Executive */}
                  <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-0.5 before:bg-blue-500/30">
                    <div className="absolute left-[-5px] top-1.5 w-3 h-3 rounded-full bg-blue-500 ring-4 ring-[#060b1e]" />
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                      <h3 className="text-base sm:text-lg font-bold text-white">
                        SEO Executive
                      </h3>
                      <span className="text-xs font-mono text-lime-300 font-semibold px-2.5 py-0.5 rounded-full bg-lime-400/10 border border-lime-400/30 w-fit">
                        Jul 2025 – Present
                      </span>
                    </div>
                    <p className="text-sm font-medium text-sky-300 mb-3">
                      HCL GUVI Geek Networks Pvt. Ltd.
                    </p>
                    <ul className="space-y-2 text-sm text-slate-200">
                      <li className="flex items-start gap-2.5">
                        <span className="text-sky-400 mt-1.5">•</span>
                        <span>Scaled organic traffic and improved search visibility through targeted SEO strategies across blog and landing pages</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-sky-400 mt-1.5">•</span>
                        <span>Achieved Top 3 rankings for 20+ high-competition keywords, driving significant organic traffic growth</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-sky-400 mt-1.5">•</span>
                        <span>Improved conversion rates by optimizing landing pages, internal linking, and content structure</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-sky-400 mt-1.5">•</span>
                        <span>Led on-page SEO optimization across multiple high-traffic pages, enhancing user engagement and CTR</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-sky-400 mt-1.5">•</span>
                        <span>Conducted in-depth keyword research and search intent analysis to identify high-growth opportunities</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-sky-400 mt-1.5">•</span>
                        <span>Executed technical SEO audits and resolved indexing, crawlability, and performance issues</span>
                      </li>
                    </ul>
                  </div>

                  {/* Role 2: Junior SEO Executive */}
                  <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-0.5 before:bg-blue-500/30">
                    <div className="absolute left-[-5px] top-1.5 w-3 h-3 rounded-full bg-sky-400 ring-4 ring-[#060b1e]" />
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                      <h3 className="text-base sm:text-lg font-bold text-white">
                        Junior SEO Executive
                      </h3>
                      <span className="text-xs font-mono text-slate-300 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 w-fit">
                        Nov 2023 – Jun 2025
                      </span>
                    </div>
                    <p className="text-sm font-medium text-sky-300">
                      HCL GUVI Geek Networks Pvt. Ltd.
                    </p>
                  </div>

                  {/* Role 3: SEO Intern */}
                  <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-0.5 before:bg-blue-500/30">
                    <div className="absolute left-[-5px] top-1.5 w-3 h-3 rounded-full bg-indigo-400 ring-4 ring-[#060b1e]" />
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                      <h3 className="text-base sm:text-lg font-bold text-white">
                        SEO Intern
                      </h3>
                      <span className="text-xs font-mono text-slate-300 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 w-fit">
                        Aug 2023 – Nov 2023
                      </span>
                    </div>
                    <p className="text-sm font-medium text-sky-300">
                      HCL GUVI Geek Networks Pvt. Ltd.
                    </p>
                  </div>

                  {/* Role 4: Digital Marketing Intern */}
                  <div className="relative pl-6">
                    <div className="absolute left-[-5px] top-1.5 w-3 h-3 rounded-full bg-slate-500 ring-4 ring-[#060b1e]" />
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                      <h3 className="text-base sm:text-lg font-bold text-white">
                        Digital Marketing Intern
                      </h3>
                      <span className="text-xs font-mono text-slate-300 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 w-fit">
                        May 2023
                      </span>
                    </div>
                    <p className="text-sm font-medium text-sky-300">
                      Eightwe Digital Transformations Pvt. Ltd.
                    </p>
                  </div>
                </div>
              </section>

              {/* CORE SKILLS */}
              <section className="pt-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-xl bg-lime-500/10 border border-lime-400/20 text-lime-400">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Core Skills
                  </h2>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                    <h3 className="text-sm font-bold text-sky-300 uppercase tracking-wide mb-1.5">
                      SEO & Growth
                    </h3>
                    <p className="text-sm text-slate-200 leading-relaxed">
                      On-Page SEO, Technical SEO, Keyword Research, Content Strategy, SERP Analysis, Search Intent Optimization.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                    <h3 className="text-sm font-bold text-sky-300 uppercase tracking-wide mb-1.5">
                      Analytics & Tools
                    </h3>
                    <p className="text-sm text-slate-200 leading-relaxed">
                      Google Analytics 4, Google Search Console, SEMrush, Ahrefs, Looker Studio and AI-Driven SEO tools.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                    <h3 className="text-sm font-bold text-sky-300 uppercase tracking-wide mb-1.5">
                      AI-Driven SEO
                    </h3>
                    <p className="text-sm text-slate-200 leading-relaxed">
                      AI-assisted keyword research, prompt engineering, content optimization, AI-based competitor analysis.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                    <h3 className="text-sm font-bold text-sky-300 uppercase tracking-wide mb-1.5">
                      Email Marketing & Automation
                    </h3>
                    <p className="text-sm text-slate-200 leading-relaxed">
                      Email campaign strategy, audience segmentation, automation workflows, A/B testing, performance tracking.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                    <h3 className="text-sm font-bold text-sky-300 uppercase tracking-wide mb-1.5">
                      AI No-Code & Website Development
                    </h3>
                    <p className="text-sm text-slate-200 leading-relaxed">
                      AI-Powered Website Development, No-Code Website Building, Prompt Engineering, AI Workflow Design, Website Optimization & UX Fundamentals, Landing Page Creation, Website Deployment, AI-Assisted Content Creation
                    </p>
                  </div>
                </div>
              </section>

              {/* PROJECT */}
              <section className="pt-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-xl bg-indigo-500/10 border border-indigo-400/20 text-indigo-400">
                    <FolderGit2 className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Project
                  </h2>
                </div>

                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10">
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                    AI-Powered Website Development
                  </h3>
                  <ul className="space-y-2 text-sm text-slate-200">
                    <li className="flex items-start gap-2.5">
                      <span className="text-lime-400 mt-1.5">•</span>
                      <span>Built and launched a live website using no-code AI development tools.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-lime-400 mt-1.5">•</span>
                      <span>Designed service pages, lead generation workflows, and conversion-focused user journeys.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-lime-400 mt-1.5">•</span>
                      <span>Implemented SEO best practices, responsive design, and analytics tracking.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-lime-400 mt-1.5">•</span>
                      <span>Leveraged AI tools for content creation, website structure planning, and optimization.</span>
                    </li>
                  </ul>
                </div>
              </section>
            </div>

            {/* Right / Sidebar Column (4 cols) */}
            <div className="lg:col-span-4 space-y-10">
              
              {/* ACHIEVEMENTS */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-xl bg-lime-500/10 border border-lime-400/20 text-lime-400">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    Achievements
                  </h2>
                </div>

                <ul className="space-y-3">
                  <li className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 text-sm text-slate-200 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                    <span>Contributed to scaling organic traffic significantly (143K → 186K+)</span>
                  </li>
                  <li className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 text-sm text-slate-200 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                    <span>Increased blog traffic from 51K to 162K+ through SEO-driven content strategies</span>
                  </li>
                  <li className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 text-sm text-slate-200 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                    <span>Improved clicks from 50K → 186K and impressions from 1.5M → 6M+</span>
                  </li>
                  <li className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 text-sm text-slate-200 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                    <span>Contributed to Guinness World Record campaign (AI learning initiative)</span>
                  </li>
                  <li className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 text-sm text-slate-200 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                    <span>Successfully optimized multiple blogs ranking on Page 1</span>
                  </li>
                </ul>
              </section>

              {/* CERTIFICATIONS */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-xl bg-sky-500/10 border border-sky-400/20 text-sky-400">
                    <Award className="w-5 h-5" />
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    Certifications
                  </h2>
                </div>

                <ul className="space-y-3 text-sm text-slate-200">
                  <li className="p-3 rounded-xl bg-white/[0.02] border border-white/10">
                    <span className="font-semibold text-white block">No-Code AI Website Mastery Program</span>
                    <span className="text-xs text-sky-300 font-mono">Growth Scraper Academy (2026)</span>
                  </li>
                  <li className="p-3 rounded-xl bg-white/[0.02] border border-white/10">
                    <span className="font-semibold text-white block">Email Marketing Certification</span>
                    <span className="text-xs text-sky-300 font-mono">HubSpot Academy</span>
                  </li>
                  <li className="p-3 rounded-xl bg-white/[0.02] border border-white/10">
                    <span className="font-semibold text-white block">AI-Powered Marketer</span>
                    <span className="text-xs text-sky-300 font-mono">Semrush Academy</span>
                  </li>
                  <li className="p-3 rounded-xl bg-white/[0.02] border border-white/10">
                    <span className="font-semibold text-white block">Semrush SEO Crash Course</span>
                  </li>
                  <li className="p-3 rounded-xl bg-white/[0.02] border border-white/10">
                    <span className="font-semibold text-white block">Digital Marketing Specialist</span>
                    <span className="text-xs text-sky-300 font-mono">Simplilearn</span>
                  </li>
                </ul>
              </section>

              {/* EDUCATION */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-xl bg-indigo-500/10 border border-indigo-400/20 text-indigo-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    Education
                  </h2>
                </div>

                <div className="space-y-3 text-sm text-slate-200">
                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10">
                    <h3 className="font-bold text-white leading-snug">
                      B.E ( ELECTRONICS & COMMUNICATION ) - 2010
                    </h3>
                    <p className="text-xs font-mono text-sky-300 mt-1">
                      2014- CGPA - 7.92
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10">
                    <h3 className="font-semibold text-white">
                      Higher Secondary, 2009 - 2010
                    </h3>
                    <p className="text-xs font-mono text-slate-300 mt-0.5">
                      with 88.4 %
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10">
                    <h3 className="font-semibold text-white">
                      High School, 2007 - 2008
                    </h3>
                    <p className="text-xs font-mono text-slate-300 mt-0.5">
                      with 87.4
                    </p>
                  </div>
                </div>
              </section>

              {/* LANGUAGES */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-xl bg-violet-500/10 border border-violet-400/20 text-violet-400">
                    <LanguagesIcon className="w-5 h-5" />
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    Languages
                  </h2>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono font-medium text-slate-200">
                    English
                  </span>
                  <span className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono font-medium text-slate-200">
                    Hindi
                  </span>
                </div>
              </section>
            </div>
          </div>

          {/* Bottom Action Footer */}
          <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-mono text-slate-200 hover:text-white transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-sky-400" />
              <span>Back to Portfolio</span>
            </Link>

            <span className="text-xs font-mono text-slate-400">
              © 2026 Astha Shrivastava. Built with a passion for SEO & Growth.
            </span>
          </div>
        </article>
      </main>
    </div>
  );
}
