"use client";
import { fadeIn } from "@/animation/index";
import { motion } from "framer-motion";

export function NotFoundFooter(): React.JSX.Element {
  return (
    <motion.p
      className="
        absolute
        bottom-5
        left-1/2
        z-20
        -translate-x-1/2
        whitespace-nowrap
        text-[9px]
        tracking-wide
        text-after7-text-subtle
        sm:bottom-6
      "
      variants={fadeIn}
      initial="hidden"
      animate="visible"
    >
      Good connections take time.
    </motion.p>
  );
}
