"use client";

import { motion, useReducedMotion } from "framer-motion";

interface AnnotationDrawProps {
  type: "underline" | "arrow" | "circle";
  className?: string;
}

export default function AnnotationDraw({
  type,
  className = "",
}: AnnotationDrawProps) {
  const shouldReduceMotion = useReducedMotion();

  if (type === "underline") {
    return (
      <svg
        viewBox="0 0 200 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full max-w-[200px] h-3 ${className}`}
      >
        <motion.path
          d="M2 9C50 3 150 4 198 8"
          stroke="#B21F1F"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={shouldReduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      </svg>
    );
  }

  if (type === "arrow") {
    return (
      <svg
        viewBox="0 0 40 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-10 h-6 ${className}`}
      >
        <motion.path
          d="M4 12H34M24 4L34 12L24 20"
          stroke="#B21F1F"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={shouldReduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 100 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-24 h-10 ${className}`}
    >
      <motion.path
        d="M5 20C5 10 25 5 50 5C75 5 95 12 95 22C95 32 75 36 48 36C20 36 7 28 8 18"
        stroke="#B21F1F"
        strokeWidth="2"
        strokeLinecap="round"
        initial={shouldReduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
    </svg>
  );
}
