"use client";

import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

type AuthHeaderProps = {
  step?: number;
  totalSteps?: number;
  onBack?: () => void;
  backHref?: string;
};

export function AuthHeader({
  step,
  totalSteps = 2,
  onBack,
  backHref = "/",
}: AuthHeaderProps) {
  const hasProgress = step !== undefined;

  return (
    <div>
      <div className="flex items-center justify-between">
        {onBack ? (
          <button
            type="button"
            onClick={onBack}
            aria-label="Back"
            className="text-after7-text-muted transition-colors hover:text-after7-text"
          >
            <ArrowLeft className="size-5" />
          </button>
        ) : (
          <a
            href={backHref}
            aria-label="Back"
            className="text-after7-text-muted transition-colors hover:text-after7-text"
          >
            <ArrowLeft className="size-5" />
          </a>
        )}

        {hasProgress && (
          <span className="text-xs text-after7-text-muted">
            Step {step} of {totalSteps}
          </span>
        )}
      </div>

      {hasProgress && (
        <div className="mt-5 h-1 overflow-hidden rounded-full bg-after7-surface">
          <motion.div
            initial={{
              width: step === 1 ? "0%" : "50%",
            }}
            animate={{
              width: `${(step / totalSteps) * 100}%`,
            }}
            transition={{
              duration: 0.45,
              ease: "easeOut",
            }}
            className="h-full rounded-full bg-after7-accent"
          />
        </div>
      )}
    </div>
  );
}
