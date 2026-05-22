"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface FloatingConsultButtonProps {
  /** Outer ring diameter in px — defaults to 128 mobile / 160 desktop */
  buttonSize?: number;
  /** Center avatar diameter in px — defaults to 80 mobile / 96 desktop */
  imageSize?: number;
  imageSrc?: string;
  imageAlt?: string;
  /** Text that spins around the ring */
  revolvingText?: string;
  /** Seconds for one full rotation (default: 10) */
  revolvingSpeed?: number;
  /** Fixed position overrides */
  position?: {
    bottom?: string;
    right?: string;
    left?: string;
    top?: string;
  };
}

export function FloatingConsultButton({
  buttonSize,
  imageSize,
  imageSrc = "/image/1.jpg",
  imageAlt = "Get in touch",
  revolvingText = "GET IN TOUCH · LET'S TALK · FREE CONSULT · ",
  revolvingSpeed = 10,
  position = { bottom: "2rem", right: "2rem" },
}: FloatingConsultButtonProps) {
  const [hovered, setHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Do not show in the hero section (when scrollY is less than 150px)
      if (window.scrollY > 150) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Run check on mount
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const lgBtn = buttonSize ?? 160;
  const smBtn = buttonSize ? Math.round(buttonSize * 0.8) : 128;
  const lgImg = imageSize ?? 96;
  const smImg = imageSize ? Math.round(imageSize * 0.833) : 80;

  const openContact = () => {
    window.dispatchEvent(new CustomEvent("open-contact-modal"));
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed z-50"
          style={position as React.CSSProperties}
          initial={{ scale: 0, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0, opacity: 0, y: 50 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 15,
          }}
        >
          {/* ── Main button ── */}
          <motion.button
            data-fcb-outer="true"
            aria-label="Open contact form"
            title="Get in touch"
            className="relative cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-full block"
            style={{ width: smBtn, height: smBtn }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onClick={openContact}
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
          >
            {/* ── Rotating text ring ── */}
            <motion.div
              className="absolute inset-0"
              animate={{ rotate: 360 }}
              transition={{
                duration: hovered ? revolvingSpeed * 0.5 : revolvingSpeed,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <defs>
                  <path
                    id="fcb-circle"
                    d="M100,100 m-75,0 a75,75 0 1,1 150,0 a75,75 0 1,1 -150,0"
                  />
                </defs>
                <text
                  className="fill-foreground/60 font-medium"
                  fontSize="18"
                  letterSpacing="2"
                >
                  <textPath href="#fcb-circle" startOffset="0%">
                    {revolvingText}
                  </textPath>
                </text>
              </svg>
            </motion.div>

            {/* ── Center avatar ── */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                data-fcb-inner="true"
                className="rounded-full overflow-hidden ring-2 ring-border shadow-xl transition-shadow group-hover:shadow-2xl"
                style={{ width: smImg, height: smImg }}
              >
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  width={lgImg}
                  height={lgImg}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </motion.button>

          {/* ── Responsive upgrade for lg screens via inline style tag ── */}
          <style>{`
            @media (min-width: 1024px) {
              [data-fcb-outer] {
                width: ${lgBtn}px !important;
                height: ${lgBtn}px !important;
              }
              [data-fcb-inner] {
                width: ${lgImg}px !important;
                height: ${lgImg}px !important;
              }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

