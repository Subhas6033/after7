"use client";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { pulse } from "./variants";

type GlowProps = {
  children?: ReactNode;
  className?: string;
};

export function Glow({ children, className }: GlowProps): React.JSX.Element {
  return (
    <motion.div
      className={className}
      variants={pulse}
      initial="initial"
      animate="animate"
    >
      {children}
    </motion.div>
  );
}
