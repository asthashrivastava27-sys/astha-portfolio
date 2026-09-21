"use client";

export default function Footer() {
  return (
    <footer className="relative z-20 py-8 px-4 sm:px-8 border-t border-slate-900 bg-[#030712]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="text-xs sm:text-sm font-mono text-slate-300">
          © 2026 Astha Shrivastava. Built with a passion for SEO &amp; Growth.
        </div>

        <div className="flex items-center gap-4 text-xs sm:text-sm font-mono text-slate-300 font-medium">
          <a href="#top" className="hover:text-lime-400 transition-colors">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
