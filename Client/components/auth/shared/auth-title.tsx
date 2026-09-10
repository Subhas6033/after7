"use client";

import { motion } from "framer-motion";

type AuthTitleProps = {
  title: string;
  description?: string;
};

export function AuthTitle({ title, description }: AuthTitleProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 8,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.25,
      }}
      className="mt-7"
    >
      <h1 className="text-2xl font-semibold leading-tight tracking-tight">
        {title}
      </h1>

      {description && (
        <p className="mt-2 text-sm leading-5 text-after7-text-muted">
          {description}
        </p>
      )}
    </motion.div>
  );
}
