"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";
import Navbar from "@/components/dom/Navbar";
import HeroSection from "@/components/dom/HeroSection";
import ResultsSection from "@/components/dom/ResultsSection";
import AboutSection from "@/components/dom/AboutSection";
import ExperienceSection from "@/components/dom/ExperienceSection";
import ProjectsSection from "@/components/dom/ProjectsSection";
import SkillsSection from "@/components/dom/SkillsSection";
import CertificationsSection from "@/components/dom/CertificationsSection";
import AchievementsSection from "@/components/dom/AchievementsSection";
import ContactSection from "@/components/dom/ContactSection";
import Footer from "@/components/dom/Footer";
import { sceneStore } from "@/stores/useSceneStore";

// Dynamically import Three.js Canvas to prevent SSR issues
const SceneCanvas = dynamic(() => import("@/components/canvas/SceneCanvas"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-[#030712] flex items-center justify-center">
      <div className="flex items-center gap-3 text-xs tracking-widest text-blue-400/70 font-mono uppercase">
        <div className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
        Initializing 3D Environment...
      </div>
    </div>
  ),
});

export default function Home() {
  // Sync page scroll progress to 3D scene store for smooth camera depth transitions
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? Math.min(1, Math.max(0, scrollY / maxScroll)) : 0;
      sceneStore.setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative w-full bg-[#030712] text-white overflow-x-hidden selection:bg-blue-500/30">
      {/* 3D WebGL Background Layer (Three.js / React Three Fiber) */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-auto">
        <SceneCanvas />
      </div>

      {/* Atmospheric Vignette & Contrast Preserving Gradient */}
      <div className="fixed inset-0 pointer-events-none z-10 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(3,7,18,0.35)_70%,rgba(3,7,18,0.65)_100%)] lg:bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(3,7,18,0.75)_80%,rgba(3,7,18,0.96)_100%)]" />

      {/* Global Recruiter Navigation */}
      <Navbar />

      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 2. SEO RESULTS */}
      <ResultsSection />

      {/* 3. ABOUT */}
      <AboutSection />

      {/* 4. EXPERIENCE */}
      <ExperienceSection />

      {/* 5. PROJECTS */}
      <ProjectsSection />

      {/* 6. SKILLS & EXPERTISE */}
      <SkillsSection />

      {/* 7. CERTIFICATIONS */}
      <CertificationsSection />

      {/* 8. ACHIEVEMENTS */}
      <AchievementsSection />

      {/* 9. CONTACT */}
      <ContactSection />

      {/* 10. FOOTER */}
      <Footer />
    </main>
  );
}