"use client";
import { ambientGlow, iconFloat, scaleIn } from "@/animation/index";
import { Flame } from "lucide-react";
import { motion } from "framer-motion";

export function LoaderIndicator(): React.JSX.Element {
  return (
    <motion.div
      className="relative mx-auto mb-6 flex size-20 items-center justify-center"
      variants={scaleIn}
      initial="hidden"
      animate="visible"
    >
      {/* Ambient glow */}
      <motion.div
        aria-hidden="true"
        className="
          absolute
          inset-0
          rounded-full
          bg-after7-accent-soft
          blur-xl
        "
        variants={ambientGlow}
        initial="initial"
        animate="animate"
      />

      {/* Outer ring */}
      <div
        className="
          absolute
          inset-0
          rounded-full
          border
          border-after7-accent/20
          bg-background
        "
      />

      {/* Inner accent ring */}
      <motion.div
        className="
          absolute
          inset-1.75
          rounded-full
          border
          border-after7-accent/10
        "
        variants={ambientGlow}
        initial="initial"
        animate="animate"
      />

      {/* Icon */}
      <motion.div
        className="relative z-10"
        variants={iconFloat}
        initial="initial"
        animate="animate"
      >
        <Flame
          className="size-6 text-after7-accent"
          strokeWidth={1.8}
          aria-hidden="true"
        />
      </motion.div>
    </motion.div>
  );
}
