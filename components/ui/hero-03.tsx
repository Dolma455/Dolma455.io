"use client";

import React from "react";
import { Separator } from "@/components/ui/separator";

// -------------------------------------------------------------------------
// 1. INLINE HIGH-QUALITY SVG ICONS (Self-contained, Zero Dependency)
// -------------------------------------------------------------------------

function QuestionMarkEmblem({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={className}
      fill="currentColor"
    >
      <defs>
        <mask id="q-mask">
          {/* Base of the mask is white (visible) */}
          <rect x="0" y="0" width="100" height="100" fill="white" />
          {/* Question mark in black (cut out) */}
          <path
            d="M36,36 C36,28 42,22 50,22 C58,22 64,28 64,36 C64,48 50,50 50,56"
            fill="none"
            stroke="black"
            strokeWidth="11"
            strokeLinecap="round"
          />
          <circle cx="50" cy="73" r="5.5" fill="black" />
        </mask>
      </defs>
      {/* Scalloped circle with 8 lobes, using the mask to cut out the question mark */}
      <g mask="url(#q-mask)">
        <circle cx="50" cy="50" r="24" />
        <circle cx="74" cy="50" r="18" />
        <circle cx="67" cy="67" r="18" />
        <circle cx="50" cy="74" r="18" />
        <circle cx="33" cy="67" r="18" />
        <circle cx="26" cy="50" r="18" />
        <circle cx="33" cy="33" r="18" />
        <circle cx="50" cy="26" r="18" />
        <circle cx="67" cy="33" r="18" />
      </g>
    </svg>
  );
}


// -------------------------------------------------------------------------
// 2. HERO COMPONENT (Bespoke Redesign for Dolma Lama)
// -------------------------------------------------------------------------

export function HeroSection03() {
  return (
    <div className="min-h-[85vh] relative overflow-hidden text-foreground flex flex-col justify-center pt-12 md:pt-16 pb-12">

      {/* 2. Main Large-Text Showcase Section */}
      <main className="relative z-10 flex-1 flex flex-col justify-center px-4 md:px-12 py-12 w-full max-w-7xl mx-auto">
        <div className="flex relative gap-4 px-2 md:items-center w-full flex-col justify-center select-none">

          {/* Row 1: Description + "DIGITAL" */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start md:items-center w-full justify-center">
            <p className="text-xs text-muted-foreground md:text-sm text-start md:text-right leading-relaxed max-w-[240px] md:max-w-[200px] font-medium tracking-wide">
              I am a digital product designer & developer based in Manchester, UK.
            </p>
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[9.5rem] font-light leading-none tracking-wider text-foreground font-heading">
              DIGITAL
            </h1>
          </div>

          {/* Row 2: "PR✦DUCTS" + Design Collaboration */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start md:items-center w-full justify-center">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[9.5rem] flex items-center font-light leading-none tracking-wider font-heading">
              <span>PR</span>
              <QuestionMarkEmblem className="w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40 text-primary mx-1 transition-transform duration-300 hover:scale-105" />
              <span>DUCTS</span>
            </h1>
            <p className="text-xs text-muted-foreground md:text-sm leading-relaxed max-w-[260px] md:max-w-[200px] font-medium tracking-wide">
              Open to all forms of creative design & full-stack code collaboration.
            </p>
          </div>

          {/* Row 3: "DESIGN ✦ CODE" */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start md:items-center w-full justify-center">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[9.5rem] flex items-center font-light leading-none tracking-wider font-heading">
              <span>DESIGN</span>
              <div className="mx-2 flex-shrink-0 text-accent">
                {/* Heart SVG matching the text gradient of "DIGITAL" */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-48 xl:h-48 drop-shadow-[0_0_20px_rgba(168, 85, 247, 0.45)]"
                >
                  <defs>
                    <linearGradient id="heart-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#7c3aed" />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#heart-gradient)"
                    d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
                  />
                </svg>
              </div>
              <span>CODE</span>
            </h1>
          </div>
        </div>

        {/* 3. Mid-bar metadata info */}
        <div className="w-full px-4 mt-8 md:mt-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:mx-8">
            <Separator className="w-full md:max-w-2xl bg-border/40" />
            <div className="text-xs md:text-sm font-black tracking-widest text-muted-foreground whitespace-nowrap uppercase">
              Manchester, UK
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl md:text-3xl font-thin tracking-widest text-muted-foreground">DESIGNER</span>
              <span className="text-3xl md:text-4xl font-extrabold text-accent hover:opacity-85 transition-opacity">
                DOLMA
              </span>
            </div>
          </div>
        </div>



      </main>
    </div>
  );
}
