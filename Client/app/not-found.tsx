"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Compass, Flame } from "lucide-react";

import { Button } from "@/components/ui/button";
import { fadeInUp, float, scaleIn, softPulse } from "@/animation";

function ConnectionMap() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 size-full"
      viewBox="0 0 900 520"
      fill="none"
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="connection-line" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="var(--after7-accent)" stopOpacity="0.03" />
          <stop offset="0.5" stopColor="var(--after7-accent)" stopOpacity="0.18" />
          <stop offset="1" stopColor="var(--after7-accent)" stopOpacity="0.03" />
        </linearGradient>
      </defs>

      <g stroke="url(#connection-line)" strokeWidth="1">
        <motion.line
          x1="650"
          y1="145"
          x2="770"
          y2="210"
          initial={reduceMotion ? false : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.4, delay: 0.2 }}
        />
        <motion.line
          x1="770"
          y1="210"
          x2="845"
          y2="155"
          initial={reduceMotion ? false : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        />
        <motion.line
          x1="770"
          y1="210"
          x2="835"
          y2="315"
          initial={reduceMotion ? false : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.3, delay: 0.7 }}
        />
        <motion.line
          x1="835"
          y1="315"
          x2="760"
          y2="390"
          initial={reduceMotion ? false : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.1, delay: 0.9 }}
        />
        <motion.line
          x1="650"
          y1="145"
          x2="545"
          y2="115"
          initial={reduceMotion ? false : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.1, delay: 0.3 }}
        />
      </g>

      <motion.g
        variants={float}
        initial="initial"
        animate={reduceMotion ? undefined : "animate"}
      >
        <circle cx="650" cy="145" r="4" fill="var(--after7-accent)" opacity="0.12" />
        <circle cx="770" cy="210" r="4" fill="var(--after7-accent)" opacity="0.9" />
        <circle cx="845" cy="155" r="3.5" fill="var(--after7-accent)" opacity="0.08" />
        <circle cx="835" cy="315" r="4" fill="var(--after7-accent)" opacity="0.08" />
        <circle cx="760" cy="390" r="3.5" fill="var(--after7-accent)" opacity="0.08" />
        <circle cx="545" cy="115" r="3.5" fill="var(--after7-accent)" opacity="0.05" />
      </motion.g>
    </motion.svg>
  );
}

export default function NotFound(): React.JSX.Element {
  return (
    <main className="relative isolate flex min-h-svh overflow-hidden bg-background text-foreground">
      <ConnectionMap />

      <div className="relative z-10 flex min-h-svh w-full flex-col px-6 py-7 sm:px-10 sm:py-9">
        <motion.div
          className="flex items-center gap-2 text-sm font-medium text-after7-text"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            className="text-after7-accent"
            variants={softPulse}
            initial="initial"
            animate="animate"
          >
            <Flame aria-hidden="true" className="size-3.5 fill-current" strokeWidth={1.5} />
          </motion.span>
          <span>After7</span>
        </motion.div>

        <div className="flex flex-1 items-center justify-center">
          <div className="flex w-full max-w-2xl flex-col items-center text-center">
            <motion.div
              className="select-none text-[7rem] leading-none font-light tracking-[-0.08em] text-after7-accent sm:text-[9rem] md:text-[10rem]"
              variants={scaleIn}
              initial="hidden"
              animate="visible"
            >
              404
            </motion.div>

            <motion.div
              className="mt-4 flex max-w-xl flex-col items-center"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.12 }}
            >
              <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                This connection took a wrong turn.
              </h1>
              <p className="mt-3 max-w-md text-sm leading-6 text-after7-text-muted sm:text-[0.95rem]">
                The page you&apos;re looking for doesn&apos;t exist or may have moved. Let&apos;s get you
                back to somewhere meaningful.
              </p>
            </motion.div>

            <motion.div
              className="mt-7 flex flex-wrap items-center justify-center gap-2"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.22 }}
            >
              <Button asChild size="lg">
                <Link href="/home">Back to home</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/discover">
                  <Compass aria-hidden="true" />
                  Go to discover
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>

        <motion.p
          className="pb-1 text-center text-[0.7rem] text-after7-text-subtle"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.35 }}
        >
          Good connections take time.
        </motion.p>
      </div>
    </main>
  );
}
