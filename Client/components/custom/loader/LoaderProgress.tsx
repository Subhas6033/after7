"use client";
import { fadeInUp } from "@/animation/index";
import { motion } from "framer-motion";

type LoaderProgressProps = {
  label: string;
  progress?: number;
  footer?: string;
};

function clampProgress(value: number): number {
  return Math.min(100, Math.max(0, value));
}

export function LoaderProgress({
  label,
  progress = 0,
  footer,
}: LoaderProgressProps): React.JSX.Element {
  const value = clampProgress(progress);

  return (
    <motion.div
      className="mt-6"
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      transition={{
        delay: 0.16,
      }}
    >
      {/* Label + percentage */}
      <div className="mb-2 flex items-center justify-between">
        <span className="text-[9px] text-after7-text-subtle">{label}</span>

        <span className="text-[9px] font-medium text-after7-accent">
          {value}%
        </span>
      </div>

      {/* Progress track */}
      <div
        className="
          relative
          h-1
          w-full
          overflow-hidden
          rounded-full
          bg-after7-text
        "
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={value}
        aria-label={label}
      >
        <motion.div
          className="
            absolute
            inset-y-0
            left-0
            rounded-full
            bg-after7-accent
          "
          initial={{ width: "0%" }}
          animate={{ width: `${value}%` }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </div>

      {/* Footer */}
      {footer && (
        <p className="mt-5 text-center text-[8px] text-after7-text-subtle">
          {footer}
        </p>
      )}
    </motion.div>
  );
}
