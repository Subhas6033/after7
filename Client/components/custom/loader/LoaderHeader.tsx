"use client";
import { fadeIn } from "@/animation/index";
import { Flame } from "lucide-react";
import { motion } from "framer-motion";

type LoaderHeaderProps = {
  status: string;
  showStatus: boolean;
};

export function LoaderHeader({
  status,
  showStatus,
}: LoaderHeaderProps): React.JSX.Element {
  return (
    <motion.header
      className="
        flex
        h-14
        shrink-0
        items-center
        justify-between
        border-b
        border-border
        px-6
        sm:px-8
      "
      variants={fadeIn}
      initial="hidden"
      animate="visible"
    >
      {/* Brand */}
      <div className="flex items-center gap-2">
        <Flame
          className="size-3.5 text-after7-accent"
          strokeWidth={1.8}
          aria-hidden="true"
        />

        <span
          className="
            text-[11px]
            font-semibold
            tracking-[-0.02em]
            text-after7-text
          "
        >
          After7
        </span>
      </div>

      {/* Session status */}
      {showStatus && (
        <div className="flex items-center gap-1.5">
          <span
            className="
              size-1.5
              rounded-full
              bg-success
              shadow-[0_0_8px_rgba(57,200,120,0.45)]
            "
            aria-hidden="true"
          />

          <span className="text-[9px] text-after7-text-subtle">{status}</span>
        </div>
      )}
    </motion.header>
  );
}
