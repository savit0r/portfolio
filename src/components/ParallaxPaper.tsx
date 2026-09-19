"use client";

import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "framer-motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ParallaxPaperProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export default function ParallaxPaper({
  children,
  speed = -12,
  className = "",
}: ParallaxPaperProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion || !containerRef.current) return;

    const element = containerRef.current;
    const ctx = gsap.context(() => {
      // Subtle paper parallax offset for desktop scroll
      gsap.to(element, {
        y: speed,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [speed, shouldReduceMotion]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
