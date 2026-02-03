"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import VerticalEmail from "@/app/components/layout/VerticalEmail";
import Navbar from "@/app/components/layout/Navbar";
import AboutSection from "@/app/home/AboutSection";
import WorkSection from "@/app/home/WorkSection";
import BlogsSection from "@/app/home/BlogsSection";
import Footer from "@/app/components/layout/Footer";
import SocialPill from "@/app/components/shared/SocialPill";
import HeroTitle from "@/app/home/HeroTitle";
import HeroLogo from "@/app/home/HeroLogo";
import { role } from "@/app/data";
import { StackIcon } from "@/app/components/ui/Icons";

export default function Home() {
  const { scrollY } = useScroll();

  // --- Animations ---
  const logoOpacity = useTransform(scrollY, [0, 200], [1, 0]);
  const logoScale = useTransform(scrollY, [0, 200], [1, 0.8]);
  const heroOpacity = useTransform(scrollY, [0, 150], [1, 0]);
  const pointerEventsHero = useTransform(scrollY, (v) => v > 150 ? "none" : "auto");
  const sidebarOpacity = useTransform(scrollY, [400, 600], [0, 1]);
  const sidebarY = useTransform(scrollY, [400, 600], [20, 0]);

  // Name Animation
  const t = useTransform(scrollY, [0, 600], [0, 1]);
  const nameScale = useTransform(t, [0, 1], [1, 0.25]);
  const nameX = useTransform(t, [0, 1], ["-50%", "0%"]);
  const nameLeft = useTransform(t, (v) => `calc(50% * ${1 - v} + 8rem * ${v})`);
  const nameTop = useTransform(t, [0, 1], ["22vh", "20vh"]);

  return (
    <div className="relative w-full min-h-screen bg-background text-foreground transition-colors duration-300 selection:bg-yellow-500/30">

      {/* --- Global Background --- */}
      <div className="fixed inset-0 pointer-events-none bg-grid-pattern z-0 opacity-40" />
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_20%,var(--background)_90%)] z-0" />

      {/* --- Fixed Elements --- */}
      <div className="hidden md:block">
        <VerticalEmail />
      </div>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <motion.div style={{ opacity: heroOpacity, pointerEvents: pointerEventsHero as any }} className="block md:hidden">
        <VerticalEmail />
      </motion.div>

      {/* --- Hero Section --- */}

      {/* Desktop Name (Animates to Sidebar) */}
      <div className="fixed inset-0 z-10 pointer-events-none hidden md:block">
        <motion.div
          className="absolute pointer-events-auto"
          style={{
            top: nameTop,
            left: nameLeft,
            x: nameX,
            scale: nameScale,
            transformOrigin: "left top",
            zIndex: 40,
          }}
        >
          <HeroTitle
            className="text-[14vw]"
            spanClassName="left-[77%] top-[45%] translate-y-[2vw] text-[7vw]"
          />
        </motion.div>
      </div>

      {/* Mobile Name (Static Fade Out) */}
      <div className="fixed inset-0 z-10 pointer-events-none block md:hidden">
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 pointer-events-auto"
          style={{ top: "25vh", opacity: heroOpacity }}
        >
          <HeroTitle
            className="text-[18vw] pb-8"
            spanClassName="left-[75%] top-[35%] translate-y-[4vw] text-[10vw]"
          />
        </motion.div>
      </div>

      {/* Center Logo */}
      <motion.div
        style={{ opacity: logoOpacity, scale: logoScale }}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none"
      >
        <HeroLogo />
      </motion.div>

      {/* --- Sidebar Content (Fade In) --- */}
      <div className="fixed top-0 left-0 w-[40%] h-screen z-30 hidden md:flex flex-col pl-32 pt-[25vh] pointer-events-none">
        <motion.div style={{ opacity: sidebarOpacity, y: sidebarY, pointerEvents: 'auto' }} className="flex flex-col gap-10 items-start mt-4">
          <div className="flex flex-col text-neutral-400 font-medium text-xl leading-tight items-center">
            <h2>{role.line1}</h2>
            <h2 className="text-xl font-medium transition-colors duration-300" style={{ color: 'var(--icon-color)' }}>{role.line2}</h2>
          </div>
          <div className="w-full">
            <Navbar mode="sidebar" />
          </div>
        </motion.div>
      </div>

      {/* --- Floating Elements --- */}

      {/* Navbar */}
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <motion.div style={{ opacity: heroOpacity, pointerEvents: pointerEventsHero as any }} className="hidden md:block fixed top-0 left-0 w-full h-full z-30 pointer-events-none">
        <div className="absolute top-8 left-1/2 -translate-x-1/2 pointer-events-auto">
          <Navbar mode="floating" />
        </div>
      </motion.div>

      <div className="block md:hidden fixed top-0 left-0 w-full h-full z-30 pointer-events-none">
        <div className="absolute top-8 left-1/2 -translate-x-1/2 pointer-events-auto">
          <Navbar mode="floating" />
        </div>
      </div>

      {/* Hero Role (Bottom Right) */}
      <motion.div style={{ opacity: heroOpacity }} className="fixed bottom-16 right-16 z-20 hidden md:flex flex-col items-center gap-2 text-center">
        <StackIcon width={32} height={32} className="opacity-90 transition-colors duration-300" style={{ color: 'var(--icon-color)' }} />
        <div className="flex flex-col text-neutral-400 font-medium text-xl leading-tight items-center">
          <span>{role.line1}</span>
          <span style={{ color: 'var(--icon-color)' }} className="transition-colors duration-300">{role.line2}</span>
        </div>
      </motion.div>

      {/* Social Pills */}
      <div className="fixed bottom-16 left-32 z-[60] hidden md:block pointer-events-auto">
        <SocialPill />
      </div>
      <motion.div
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        style={{ opacity: logoOpacity, pointerEvents: pointerEventsHero as any }}
        className="fixed top-[82%] left-1/2 -translate-x-1/2 z-[60] md:hidden pointer-events-auto origin-center scale-85"
      >
        <SocialPill />
      </motion.div>

      {/* --- Main Content Area --- */}
      <div className="relative w-full z-20">
        <div style={{ height: "100vh" }} />
        <main className="md:w-[60%] md:ml-[40%] px-6 md:px-16 pt-24 pb-24">
          <AboutSection />
          <WorkSection />
          <BlogsSection />
          <Footer />
        </main>
      </div>
    </div >
  );
}
