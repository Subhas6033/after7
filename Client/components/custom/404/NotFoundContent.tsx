"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { fadeInUp, float, scaleIn } from "@/animation/index";
import { motion } from "framer-motion";

export function NotFoundContent(): React.JSX.Element {
  return (
    <main
      className="
        relative
        z-20
        flex
        min-h-screen
        w-full
        items-center
        justify-center
        px-6
        pb-8
      "
    >
      <div className="flex w-full max-w-2xl flex-col items-center text-center">
        {/* 404 */}
        <motion.div
          className="
            relative
            isolate
            select-none
            text-[clamp(8rem,25vw,14rem)]
            font-light
            leading-[0.72]
            tracking-[-0.08em]
            text-background
          "
          style={{
            WebkitTextStroke: "1px var(--after7-accent)",
          }}
          variants={scaleIn}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            className="relative z-10 inline-block"
            variants={float}
            initial="initial"
            animate="animate"
          >
            404
          </motion.span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="
            mt-10
            text-balance
            text-2xl
            font-semibold
            tracking-[-0.035em]
            text-after7-text
            sm:text-3xl
          "
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          This connection took a wrong turn.
        </motion.h1>

        {/* Description */}
        <motion.p
          className="
            mt-3
            max-w-md
            text-sm
            leading-6
            text-after7-text-muted
          "
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{
            delay: 0.1,
          }}
        >
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
          Let&apos;s get you back to somewhere real.
        </motion.p>

        {/* Actions */}
        <motion.div
          className="
            mt-6
            flex
            flex-wrap
            items-center
            justify-center
            gap-2
          "
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{
            delay: 0.18,
          }}
        >
          <Button
            asChild
            size="lg"
            className="
              h-9
              rounded-md
              bg-after7-accent
              px-4
              text-[11px]
              font-medium
              text-after7-accent-foreground
              hover:bg-after7-accent-hover
            "
          >
            <Link href="/">Back to home</Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="
              h-9
              rounded-md
              border-border
              bg-transparent
              px-4
              text-[11px]
              font-medium
              text-after7-text
              hover:bg-after7-surface
              hover:text-after7-text
            "
          >
            <Link href="/discover">Go to discover</Link>
          </Button>
        </motion.div>
      </div>
    </main>
  );
}
