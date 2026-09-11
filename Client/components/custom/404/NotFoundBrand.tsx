"use client";
import { fadeIn } from "@/animation/index";
import { motion } from "framer-motion";

export function NotFoundBrand(): React.JSX.Element {
  return (
    <motion.div
      className="
        absolute
        left-5
        top-5
        z-20
        flex
        items-center
        gap-2
        sm:left-8
        sm:top-7
      "
      variants={fadeIn}
      initial="hidden"
      animate="visible"
    >
      <span className="text-xs font-medium tracking-[-0.01em] text-after7-text">
        After7
      </span>
    </motion.div>
  );
}
