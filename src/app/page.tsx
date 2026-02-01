import React from "react";
import Image from "next/image";
import VerticalEmail from "@/components/VerticalEmail";
import Navbar from "@/components/Navbar";
import ThemeBulb from "@/components/ThemeBulb";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-background text-foreground bg-grid-pattern transition-colors duration-300">
      <Navbar />
      <ThemeBulb />

      {/* Background Mask for Depth */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_20%,var(--background)_90%)]" />

      {/* Center Content */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Name Wrapper (Movable) */}
        <div className="relative translate-y-[-11vh]">
          <h1 className="font-playfair text-[14vw] leading-none font-bold tracking-tighter text-foreground/90 select-none relative pb-11">
            Kushagra
            <span className="absolute bottom-0 right-[-4%] font-great-vibes text-7xl md:text-8xl text-yellow-500 rotate-[-10deg] opacity-90 tracking-wider">
              Gupta
            </span>
          </h1>
        </div>

        {/* Profile Circle - Overlapping */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-4 ml-4">
          {/* Added border opacity and ring for elevation */}
          <div className="group relative h-40 w-40 rounded-full bg-neutral-900 border border-white/10 shadow-2xl flex items-center justify-center overflow-hidden hover:scale-105 transition-transform duration-500 ring-2 ring-white/5">
            {/* Real Logo Image */}
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
        </div>
      </div>

      {/* Bottom Right: Role & Icon - Stack SVG */}
      <div className="fixed bottom-16 right-16 z-20 hidden md:flex flex-col items-center gap-2 text-center">
        {/* Stack SVG - Theme Aware */}
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-stack opacity-90 transition-colors duration-300" style={{ color: 'var(--icon-color)' }} viewBox="0 0 16 16">
          <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.6.6 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.6.6 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.6.6 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535z" />
          <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.6.6 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0z" />
        </svg>
        <div className="flex flex-col text-neutral-400 font-medium text-xl leading-tight items-center">
          <span>Developer &</span>
          <span style={{ color: 'var(--icon-color)' }} className="transition-colors duration-300">AI Enthusiast</span>
        </div>
      </div>

      {/* Bottom Left: Social Pills + Vertical Email */}
      <VerticalEmail />

      <div className="fixed bottom-16 left-32 z-20 hidden md:block">
        <div className="flex items-center gap-8 px-8 py-4 rounded-full bg-neutral-900/50 backdrop-blur-md shadow-lg border border-white/10">
          {/* GitHub */}
          <a href="https://github.com/SpyBeast07" className="text-neutral-400 hover:text-white transition-colors hover:scale-110 duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0 3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/spybeast07/" className="text-neutral-400 hover:text-white transition-colors hover:scale-110 duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>

          {/* Mail Icon */}
          <a href="mailto:kggupta.work@gmail.com" className="text-neutral-400 hover:text-white transition-colors hover:scale-110 duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </a>
        </div>
      </div>
    </main>
  );
}
