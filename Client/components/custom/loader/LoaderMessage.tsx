"use client";
import { fadeInUp } from "@/animation/index";
import { motion } from "framer-motion";

type LoaderMessageProps = {
  title: string;
  description: string;
};

export function LoaderMessage({
  title,
  description,
}: LoaderMessageProps): React.JSX.Element {
  return (
    <div className="text-center">
      <motion.h1
        className="
          mx-auto
          max-w-xs
          text-balance
          text-xl
          font-semibold
          leading-tight
          tracking-[-0.035em]
          text-after7-text
          sm:text-2xl
        "
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        {title}
      </motion.h1>

      <motion.p
        className="
          mx-auto
          mt-3
          max-w-sm
          text-xs
          leading-5
          text-after7-text-muted
        "
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{
          delay: 0.08,
        }}
      >
        {description}
      </motion.p>
    </div>
  );
}
