"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export type CursorState = "VIEW" | "OPEN" | "READ" | "DRAG" | null;

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState<CursorState>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    // Enable only on fine pointer (desktop) devices
    const mediaQuery = window.matchMedia("(pointer: fine)");
    const updateDesktop = () => setIsDesktop(mediaQuery.matches);
    updateDesktop();

    mediaQuery.addEventListener("change", updateDesktop);
    return () => mediaQuery.removeEventListener("change", updateDesktop);
  }, []);

  useEffect(() => {
    if (!isDesktop || shouldReduceMotion) return;

    let rafId: number;

    const handleMouseMove = (e: MouseEvent) => {
      rafId = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });

      const target = e.target as HTMLElement | null;
      if (!target) {
        setCursorState(null);
        return;
      }

      // Check data-cursor attribute or element tag
      const cursorTarget = target.closest("[data-cursor]") as HTMLElement | null;
      if (cursorTarget) {
        const state = cursorTarget.getAttribute("data-cursor") as CursorState;
        setCursorState(state || "VIEW");
      } else if (target.closest("a[href*='/blogs/']")) {
        setCursorState("READ");
      } else if (target.closest("a[href^='#'], button, a[target='_blank']")) {
        setCursorState("OPEN");
      } else if (target.closest("#projects, #products")) {
        setCursorState("VIEW");
      } else {
        setCursorState(null);
      }
    };

    const handleMouseLeave = () => setCursorState(null);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isDesktop, shouldReduceMotion]);

  if (!isDesktop || shouldReduceMotion || !cursorState) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={cursorState}
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.6, opacity: 0 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          style={{
            left: `${position.x + 14}px`,
            top: `${position.y + 14}px`,
          }}
          className="fixed pointer-events-none transform -translate-y-1/2"
        >
          <div className="px-2 py-0.5 bg-red-ink text-[#FAF8F3] font-mono text-[10px] font-bold uppercase tracking-wider rounded shadow-md border border-red-ink/40 whitespace-nowrap">
            {cursorState}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
