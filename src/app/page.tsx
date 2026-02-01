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

export default function Home() {
  const { scrollY } = useScroll();

  // --- Configuration ---
  const TRANSFORM_DISTANCE = 600;

  // --- Animations ---

  const nameX = useTransform(scrollY, [0, TRANSFORM_DISTANCE], ["52vw", "8rem"]);
  const nameY = useTransform(scrollY, [0, TRANSFORM_DISTANCE], ["39vh", "18vh"]);
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
      <VerticalEmail />


      {/* --- LAYER 1: HERO CONTAINER (Contains Name & Logo) --- */}

      {/* NAME LAYER */}
      <div className="fixed inset-0 z-10 pointer-events-none">
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
            {/* Unified Flow: Gupta contributes to absolute width but overlaps via negative margin */}
            <span className="relative ml-[-17%] translate-y-8 font-great-vibes text-7xl md:text-8xl text-yellow-500 rotate-[-10deg] opacity-90 tracking-wider">
              Gupta
            </span>
          </h1>
        </motion.div>
      </div>

      {/* LOGO LAYER */}
      <motion.div
        style={{ opacity: logoOpacity, scale: logoScale }}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none mt-4 ml-4"
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
      <motion.div style={{ opacity: heroOpacity, pointerEvents: pointerEventsHero as any }} className="fixed top-0 left-0 w-full h-full z-30 pointer-events-none">
        <div className="absolute top-8 left-1/2 -translate-x-1/2 pointer-events-auto">
          <Navbar mode="floating" />
        </div>
      </motion.div>

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
      <div className="fixed bottom-16 left-32 z-[60] hidden md:block pointer-events-auto">
        <div
          className="flex items-center gap-8 px-8 py-4 rounded-full backdrop-blur-md shadow-lg transition-colors duration-300"
          style={{
            backgroundColor:
              "color-mix(in oklab, var(--background) 70%, transparent)",
            border:
              "1px solid color-mix(in oklab, var(--foreground) 10%, transparent)",
          }}
        >
          {[
            {
              href: "https://github.com/SpyBeast07",
              label: "GitHub",
              icon: (
                <>
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0 3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </>
              ),
            },
            {
              href: "https://www.linkedin.com/in/spybeast07/",
              label: "LinkedIn",
              icon: (
                <>
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </>
              ),
            },
            {
              href: "mailto:kggupta.work@gmail.com",
              label: "Email",
              icon: (
                <>
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </>
              ),
            },
          ].map(({ href, label, icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="transition-transform duration-200"
              style={{
                color: "color-mix(in oklab, var(--foreground) 60%, transparent)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--foreground)";
                e.currentTarget.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color =
                  "color-mix(in oklab, var(--foreground) 60%, transparent)";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {icon}
              </svg>
            </a>
          ))}
        </div>
      </div>


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
