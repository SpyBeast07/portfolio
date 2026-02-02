"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import VerticalEmail from "@/components/VerticalEmail";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Work from "@/components/Work";
import Blogs from "@/components/Blogs";
import Footer from "@/components/Footer";
import SocialPill from "@/components/SocialPill";

export default function Home() {
  const { scrollY } = useScroll();

  // --- Configuration ---
  const TRANSFORM_DISTANCE = 600;

  // --- Animations ---

  const nameX = useTransform(scrollY, [0, TRANSFORM_DISTANCE], ["50vw", "8rem"]);
  const nameY = useTransform(scrollY, [0, TRANSFORM_DISTANCE], ["36vh", "18vh"]);
  // We use standard centering because we will fix the DOM width to include Gupta
  const nameScale = useTransform(scrollY, [0, TRANSFORM_DISTANCE], [1, 0.3]);
  const nameTranslateX = useTransform(scrollY, [0, TRANSFORM_DISTANCE], ["-50%", "0%"]);
  const nameTranslateY = useTransform(scrollY, [0, TRANSFORM_DISTANCE], ["-50%", "0%"]);

  const logoOpacity = useTransform(scrollY, [0, 200], [1, 0]);
  const logoScale = useTransform(scrollY, [0, 200], [1, 0.8]);

  const heroOpacity = useTransform(scrollY, [0, 150], [1, 0]);
  const pointerEventsHero = useTransform(scrollY, (v) => v > 150 ? "none" : "auto");

  const sidebarOpacity = useTransform(scrollY, [400, TRANSFORM_DISTANCE], [0, 1]);
  const sidebarY = useTransform(scrollY, [400, TRANSFORM_DISTANCE], [20, 0]);


  return (
    <div className="relative w-full min-h-screen bg-background text-foreground transition-colors duration-300 selection:bg-yellow-500/30">

      {/* --- Fixed Global Elements --- */}
      <div className="fixed inset-0 pointer-events-none bg-grid-pattern z-0 opacity-40" />
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_20%,var(--background)_90%)] z-0" />

      {/* Tools */}
      {/* ThemeBulb is global in layout.tsx */}

      {/* Desktop: Fixed */}
      <div className="hidden md:block">
        <VerticalEmail />
      </div>

      {/* Mobile: Fades out */}
      <motion.div style={{ opacity: heroOpacity, pointerEvents: pointerEventsHero as any }} className="block md:hidden">
        <VerticalEmail />
      </motion.div>


      {/* --- LAYER 1: HERO CONTAINER (Contains Name & Logo) --- */}

      {/* NAME LAYER */}

      {/* Desktop: Animated Transform */}
      <div className="fixed inset-0 z-10 pointer-events-none hidden md:block">
        <motion.div
          className="absolute pointer-events-auto"
          style={{
            left: nameX,
            top: nameY,
            scale: nameScale,
            x: nameTranslateX,
            y: nameTranslateY,
            transformOrigin: "0 0",
          }}
        >
          <h1 className="inline-flex items-baseline font-playfair text-[14vw] leading-none font-bold tracking-tighter text-foreground/90 select-none pb-10 whitespace-nowrap">
            Kushagra
            <span className="absolute left-[76%] top-[45%] translate-y-[2vw] font-great-vibes text-[7vw] text-yellow-500 rotate-[-10deg] opacity-90 tracking-wider">
              Gupta
            </span>
          </h1>
        </motion.div>
      </div>

      {/* Mobile: Fade Out & Centered */}
      <div className="fixed inset-0 z-10 pointer-events-none block md:hidden">
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 pointer-events-auto"
          style={{
            top: "25vh", // Lifted to avoid logo overlap
            opacity: heroOpacity,
          }}
        >
          <h1 className="relative inline-flex items-baseline font-playfair text-[18vw] leading-none font-bold tracking-tighter text-foreground/90 select-none pb-8 whitespace-nowrap">
            Kushagra
            {/* Absolute positioning for Gupta ensures Kushagra remains perfectly centered */}
            <span className="absolute left-[75%] top-[35%] translate-y-[4vw] font-great-vibes text-[10vw] text-yellow-500 rotate-[-10deg] opacity-90 tracking-wider">
              Gupta
            </span>
          </h1>
        </motion.div>
      </div>

      {/* LOGO LAYER */}
      <motion.div
        style={{ opacity: logoOpacity, scale: logoScale }}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none"
      >
        {/* User's Exact Logo Structure */}
        <div className="group relative h-40 w-40 rounded-full bg-neutral-900 border border-white/10 shadow-2xl flex items-center justify-center overflow-hidden hover:scale-105 transition-transform duration-500 ring-2 ring-white/5 pointer-events-auto">
          <Image
            src="/logo.png"
            alt="Logo"
            width={160}
            height={160}
            className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
          />
        </div>
        {/* Handle - Below Circle */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-center whitespace-nowrap">
          <span className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500">
            @SpyBeast07
          </span>
        </div>
      </motion.div>


      {/* --- LAYER 2: SIDEBAR CONTENT (FADES IN) --- */}
      <div className="fixed top-0 left-0 w-[40%] h-screen z-30 hidden md:flex flex-col pl-32 pt-[25vh] pointer-events-none">
        <motion.div style={{ opacity: sidebarOpacity, y: sidebarY, pointerEvents: 'auto' }} className="flex flex-col gap-10 items-start mt-4">
          {/* Role */}
          <div className="flex flex-col text-neutral-400 font-medium text-xl leading-tight items-center">
            <h2>Developer &</h2>
            <h2 className="text-xl font-medium transition-colors duration-300" style={{ color: 'var(--icon-color)' }}>AI Enthusiast</h2>
          </div>

          {/* Navbar (Sidebar Mode) */}
          <div className="w-full">
            <Navbar mode="sidebar" />
          </div>
          {/* Social Icons removed from here - they are fixed at bottom-left */}
        </motion.div>
      </div >


      {/* --- LAYER 3: HERO-ONLY ELEMENTS (FADE OUT) --- */}

      {/* 2. Floating Navbar (Centered Top) */}

      {/* Desktop: Fades out when sidebar appears */}
      <motion.div style={{ opacity: heroOpacity, pointerEvents: pointerEventsHero as any }} className="hidden md:block fixed top-0 left-0 w-full h-full z-30 pointer-events-none">
        <div className="absolute top-8 left-1/2 -translate-x-1/2 pointer-events-auto">
          <Navbar mode="floating" />
        </div>
      </motion.div>

      {/* Mobile: Always visible */}
      <div className="block md:hidden fixed top-0 left-0 w-full h-full z-30 pointer-events-none">
        <div className="absolute top-8 left-1/2 -translate-x-1/2 pointer-events-auto">
          <Navbar mode="floating" />
        </div>
      </div>

      {/* 3. Hero Role (Bottom Right) */}
      <motion.div style={{ opacity: heroOpacity }} className="fixed bottom-16 right-16 z-20 hidden md:flex flex-col items-center gap-2 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-stack opacity-90 transition-colors duration-300" style={{ color: 'var(--icon-color)' }} viewBox="0 0 16 16">
          <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.6.6 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.6.6 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.6.6 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535z" />
          <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.6.6 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0z" />
        </svg>
        <div className="flex flex-col text-neutral-400 font-medium text-xl leading-tight items-center">
          <span>Developer &</span>
          <span style={{ color: 'var(--icon-color)' }} className="transition-colors duration-300">AI Enthusiast</span>
        </div>
      </motion.div>

      {/* 4. Hero Socials (Bottom Left) - Always Visible, Fixed Position */}
      {/* 4. Hero Socials (Bottom Left) */}


      {/* 4. Hero Socials (Bottom Left) - Desktop Fixed */}
      <div className="fixed bottom-16 left-32 z-[60] hidden md:block pointer-events-auto">
        <SocialPill />
      </div>

      {/* 4b. Hero Socials (Center Below Logo) - Mobile Scroll Fade */}
      <motion.div
        style={{ opacity: logoOpacity, pointerEvents: pointerEventsHero as any }}
        className="fixed top-[82%] left-1/2 -translate-x-1/2 z-[60] md:hidden pointer-events-auto origin-center scale-85"
      >
        <SocialPill />
      </motion.div>


      {/* --- LAYER 4: SCROLL CONTENT (RIGHT COLUMN) --- */}
      <div className="relative w-full z-20">
        <div style={{ height: "100vh" }} />

        <main className="md:w-[60%] md:ml-[40%] px-6 md:px-16 pt-24 pb-24">
          <About />
          <Work />
          <Blogs />
          <Footer />
        </main>
      </div>

    </div >
  );
}
