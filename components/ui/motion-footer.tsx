"use client";

import * as React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { Mail, Github, Linkedin, ArrowUp } from "lucide-react";

// Register ScrollTrigger safely for React
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// -------------------------------------------------------------------------
// 1. THEME-ADAPTIVE INLINE STYLES
// -------------------------------------------------------------------------
const STYLES = `
.cinematic-footer-wrapper {
  font-family: inherit;
  -webkit-font-smoothing: antialiased;
  
  /* Dynamic Variables using standard shadcn/tailwind tokens */
  --pill-bg-1: color-mix(in oklch, var(--foreground) 3%, transparent);
  --pill-bg-2: color-mix(in oklch, var(--foreground) 1%, transparent);
  --pill-shadow: color-mix(in oklch, var(--background) 50%, transparent);
  --pill-highlight: color-mix(in oklch, var(--foreground) 10%, transparent);
  --pill-inset-shadow: color-mix(in oklch, var(--background) 80%, transparent);
  --pill-border: color-mix(in oklch, var(--foreground) 8%, transparent);
  
  --pill-bg-1-hover: color-mix(in oklch, var(--foreground) 8%, transparent);
  --pill-bg-2-hover: color-mix(in oklch, var(--foreground) 2%, transparent);
  --pill-border-hover: color-mix(in oklch, var(--foreground) 20%, transparent);
  --pill-shadow-hover: color-mix(in oklch, var(--background) 70%, transparent);
  --pill-highlight-hover: color-mix(in oklch, var(--foreground) 20%, transparent);
}

/* Hide scrollbar for Chrome, Safari and Opera */
.scrollbar-none::-webkit-scrollbar {
  display: none;
}
/* Hide scrollbar for IE, Edge and Firefox */
.scrollbar-none {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

@keyframes footer-breathe {
  0% { transform: translate(-50%, -50%) scale(1); opacity: 0.6; }
  100% { transform: translate(-50%, -50%) scale(1.1); opacity: 1; }
}

@keyframes footer-scroll-marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

@keyframes footer-heartbeat {
  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 5px color-mix(in oklch, var(--destructive) 50%, transparent)); }
  15%, 45% { transform: scale(1.2); filter: drop-shadow(0 0 10px color-mix(in oklch, var(--destructive) 80%, transparent)); }
  30% { transform: scale(1); }
}

.animate-footer-breathe {
  animation: footer-breathe 8s ease-in-out infinite alternate;
}

.animate-footer-scroll-marquee {
  animation: footer-scroll-marquee 40s linear infinite;
}

.animate-footer-heartbeat {
  animation: footer-heartbeat 2s cubic-bezier(0.25, 1, 0.5, 1) infinite;
}

/* Theme-adaptive Grid Background */
.footer-bg-grid {
  background-size: 60px 60px;
  background-image: 
    linear-gradient(to right, color-mix(in oklch, var(--foreground) 3%, transparent) 1px, transparent 1px),
    linear-gradient(to bottom, color-mix(in oklch, var(--foreground) 3%, transparent) 1px, transparent 1px);
  mask-image: linear-gradient(to bottom, transparent, black 30%, black 70%, transparent);
  -webkit-mask-image: linear-gradient(to bottom, transparent, black 30%, black 70%, transparent);
}

/* Theme-adaptive Aurora Glow */
.footer-aurora {
  background: transparent;
}

/* Glass Pill Theming */
.footer-glass-pill {
  background: linear-gradient(145deg, var(--pill-bg-1) 0%, var(--pill-bg-2) 100%);
  box-shadow: 
      0 10px 30px -10px var(--pill-shadow), 
      inset 0 1px 1px var(--pill-highlight), 
      inset 0 -1px 2px var(--pill-inset-shadow);
  border: 1px solid var(--pill-border);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.footer-glass-pill:hover {
  background: linear-gradient(145deg, var(--pill-bg-1-hover) 0%, var(--pill-bg-2-hover) 100%);
  border-color: var(--pill-border-hover);
  box-shadow: 
      0 20px 40px -10px var(--pill-shadow-hover), 
      inset 0 1px 1px var(--pill-highlight-hover);
  color: var(--foreground);
}

/* Giant Background Text Masking */
.footer-giant-bg-text {
  font-size: 26vw;
  line-height: 0.75;
  font-weight: 900;
  letter-spacing: -0.05em;
  color: transparent;
  -webkit-text-stroke: 1px color-mix(in oklch, var(--foreground) 5%, transparent);
  background: linear-gradient(180deg, color-mix(in oklch, var(--foreground) 10%, transparent) 0%, transparent 60%);
  -webkit-background-clip: text;
  background-clip: text;
}

/* Metallic Text Glow */
.footer-text-glow {
  color: #a855f7;
  filter: drop-shadow(0px 0px 28px rgba(168, 85, 247, 0.35));
}
`;

// -------------------------------------------------------------------------
// 2. MAGNETIC BUTTON PRIMITIVE (Zero Dependency)
// -------------------------------------------------------------------------
export type MagneticButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & 
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    as?: React.ElementType;
  };

const MagneticButton = React.forwardRef<HTMLElement, MagneticButtonProps>(
  ({ className, children, as: Component = "button", ...props }, forwardedRef) => {
    const localRef = useRef<HTMLElement>(null);

    useEffect(() => {
      if (typeof window === "undefined") return;
      const element = localRef.current;
      if (!element) return;

      const ctx = gsap.context(() => {
        const handleMouseMove = (e: MouseEvent) => {
          const rect = element.getBoundingClientRect();
          const h = rect.width / 2;
          const w = rect.height / 2;
          const x = e.clientX - rect.left - h;
          const y = e.clientY - rect.top - w;

          gsap.to(element, {
            x: x * 0.4,
            y: y * 0.4,
            rotationX: -y * 0.15,
            rotationY: x * 0.15,
            scale: 1.05,
            ease: "power2.out",
            duration: 0.4,
          });
        };

        const handleMouseLeave = () => {
          gsap.to(element, {
            x: 0,
            y: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            ease: "elastic.out(1, 0.3)",
            duration: 1.2,
          });
        };

        element.addEventListener("mousemove", handleMouseMove as any);
        element.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          element.removeEventListener("mousemove", handleMouseMove as any);
          element.removeEventListener("mouseleave", handleMouseLeave);
        };
      }, element);

      return () => ctx.revert();
    }, []);

    return (
      <Component
        ref={(node: HTMLElement) => {
          (localRef as any).current = node;
          if (typeof forwardedRef === "function") forwardedRef(node);
          else if (forwardedRef) (forwardedRef as any).current = node;
        }}
        className={cn("cursor-pointer", className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
MagneticButton.displayName = "MagneticButton";

// -------------------------------------------------------------------------
// 3. MAIN COMPONENT
// -------------------------------------------------------------------------
const MarqueeItem = () => (
  <div className="flex items-center space-x-12 px-6">
    <span>Beautiful UX Design</span> <span className="text-foreground/30">✦</span>
    <span>Modern React Development</span> <span className="text-foreground/30">✦</span>
    <span>Interactive Animations</span> <span className="text-foreground/30">✦</span>
    <span>Mobile Flutter Apps</span> <span className="text-foreground/30">✦</span>
    <span>Pixel Perfection</span> <span className="text-foreground/30">✦</span>
  </div>
);

export function CinematicFooter() {
  const footerRef = useRef<HTMLElement>(null);
  const giantTextRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!footerRef.current) return;

    // React strict mode compatible GSAP context cleanup
    const ctx = gsap.context(() => {
      // Giant Background Text Scroll Parallax
      gsap.fromTo(
        giantTextRef.current,
        { y: "15%", scale: 0.85, opacity: 0 },
        {
          y: "0%",
          scale: 1,
          opacity: 1,
          ease: "power1.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 95%",
            end: "bottom bottom",
            scrub: 1,
          },
        }
      );

      // Staggered Content Reveal
      gsap.fromTo(
        [headingRef.current, linksRef.current],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 85%",
            end: "bottom 95%",
            scrub: 1,
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (!target) return;
    const headerOffset = 96;
    const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top: targetPosition, behavior: "smooth" });
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      
      <footer 
        ref={footerRef}
        className="relative flex min-h-[90vh] md:min-h-[85vh] w-full flex-col justify-between overflow-hidden text-foreground cinematic-footer-wrapper py-24 md:py-32 px-4 md:px-12"
      >
        {/* Ambient Light & Grid Background */}
        <div className="footer-aurora absolute left-1/2 top-1/2 h-[60vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 animate-footer-breathe rounded-[50%] blur-[80px] pointer-events-none z-0" />
        <div className="footer-bg-grid absolute inset-0 z-0 pointer-events-none" />

        {/* Giant background text */}
        <div
          ref={giantTextRef}
          className="footer-giant-bg-text absolute -bottom-[2vh] left-1/2 -translate-x-1/2 whitespace-nowrap z-0 pointer-events-none select-none"
        >
          DOLMA
        </div>

        {/* 1. Diagonal Sleek Marquee (Top of footer) */}
        <div className="absolute top-12 left-0 w-full overflow-hidden border-y border-foreground/10 bg-background/60 backdrop-blur-md py-4 z-10 -rotate-2 scale-110 shadow-2xl">
          <div className="flex w-max animate-footer-scroll-marquee text-xs md:text-sm font-bold tracking-[0.3em] text-muted-foreground uppercase">
            <MarqueeItem />
            <MarqueeItem />
          </div>
        </div>

        {/* 2. Main Center Content */}
        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 mt-20 w-full max-w-5xl mx-auto">
          <h2
            ref={headingRef}
            className="text-5xl md:text-8xl font-black footer-text-glow tracking-tighter mb-12 text-center"
          >
            Ready to begin?
          </h2>

          {/* Interactive Magnetic Pills Layout */}
          <div ref={linksRef} className="flex flex-row flex-nowrap justify-start md:justify-center items-center gap-3 md:gap-4 w-full overflow-x-auto scrollbar-none py-3 px-4">
            <MagneticButton 
              onClick={() => window.dispatchEvent(new CustomEvent("open-contact-modal"))} 
              className="footer-glass-pill px-6 md:px-8 py-3.5 md:py-4 rounded-full text-foreground font-bold text-xs md:text-base flex items-center gap-2.5 group whitespace-nowrap flex-shrink-0"
            >
              <Mail className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              Get In Touch
            </MagneticButton>

            <MagneticButton 
              as="a" 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-glass-pill px-6 md:px-8 py-3.5 md:py-4 rounded-full text-foreground font-bold text-xs md:text-base flex items-center gap-2.5 group whitespace-nowrap flex-shrink-0"
            >
              <Github className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              GitHub
            </MagneticButton>

            <MagneticButton 
              as="a" 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-glass-pill px-6 md:px-8 py-3.5 md:py-4 rounded-full text-foreground font-bold text-xs md:text-base flex items-center gap-2.5 group whitespace-nowrap flex-shrink-0"
            >
              <Linkedin className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              LinkedIn
            </MagneticButton>
          </div>
        </div>

        {/* 3. Bottom Bar / Credits */}
        <div className="relative z-20 w-full flex flex-col items-center justify-center gap-4 mt-20 border-t border-border/10 pt-8">
          {/* Credits Container (Left/Right Aligned) */}
          <div 
            className="flex flex-col md:flex-row items-center justify-between gap-6 w-full text-center md:text-left px-4"
            style={{ position: "relative", left: "5px", top: "126px" }}
          >
            {/* Copyright */}
            <div className="text-muted-foreground text-xs md:text-sm font-semibold tracking-widest uppercase">
              © 2026 Dolma Lama. All rights reserved.
            </div>

            {/* "Made with Love" Badge */}
            <div className="flex items-center gap-1.5 cursor-default">
              <span className="text-muted-foreground text-xs md:text-sm font-semibold uppercase tracking-widest">Crafted with</span>
              <span className="animate-footer-heartbeat text-sm md:text-base text-destructive">❤</span>
              <span className="text-muted-foreground text-xs md:text-sm font-semibold uppercase tracking-widest">by</span>
              <span className="text-foreground font-black text-xs md:text-sm tracking-normal ml-1">Dolma Lama</span>
            </div>
          </div>

          {/* Back to top - positioned at the end of the row container */}
          <div className="sm:absolute sm:right-0 sm:bottom-0">
            <MagneticButton
              onClick={scrollToTop}
              className="w-12 h-12 rounded-full footer-glass-pill flex items-center justify-center text-muted-foreground hover:text-foreground group"
            >
              <ArrowUp className="w-5 h-5 transform group-hover:-translate-y-1.5 transition-transform duration-300" />
            </MagneticButton>
          </div>
        </div>
      </footer>
    </>
  );
}
