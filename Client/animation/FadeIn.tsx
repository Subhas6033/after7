"use client";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "./variants";

type FadeInProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export function FadeIn({
  children,
  delay = 0,
  className,
}: FadeInProps): React.JSX.Element {
  return (
    <motion.div
      className={className}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
