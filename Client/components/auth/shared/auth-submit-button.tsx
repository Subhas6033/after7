"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import type { ReactNode } from "react";

type AuthSubmitButtonProps = {
  children: ReactNode;
  disabled?: boolean;
  loading?: boolean;
};

export function AuthSubmitButton({
  children,
  disabled = false,
  loading = false,
}: AuthSubmitButtonProps) {
  return (
    <motion.div
      whileTap={{
        scale: 0.98,
      }}
    >
      <Button
        type="submit"
        disabled={disabled || loading}
        className="h-11 w-full rounded-md bg-after7-accent text-sm font-medium text-after7-black transition-colors hover:bg-after7-accent-hover disabled:opacity-40"
      >
        {loading ? "Please wait..." : children}
      </Button>
    </motion.div>
  );
}
