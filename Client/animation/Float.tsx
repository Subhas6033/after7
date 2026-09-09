"use client";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { float } from "./variants";

type FloatProps = {
  children: ReactNode;
  className?: string;
};

export function Float({ children, className }: FloatProps): React.JSX.Element {
  return (
    <motion.div
      className={className}
      variants={float}
      initial="initial"
      animate="animate"
    >
      {children}
    </motion.div>
  );
}
