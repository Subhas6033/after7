"use client";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "./variants";

type StaggerProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function Stagger({
  children,
  className,
  delay = 0,
}: StaggerProps): React.JSX.Element {
  return (
    <motion.div
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        delayChildren: delay,
      }}
    >
      {children}
    </motion.div>
  );
}
