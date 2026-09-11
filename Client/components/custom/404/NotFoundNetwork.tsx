"use client";

import { fadeIn, scaleIn, softPulse, staggerFast } from "@/animation/index";
import { motion } from "framer-motion";

type NetworkNode = {
  x: string;
  y: string;
  active?: boolean;
};

type Connection = readonly [string, string, string, string];

const connections: readonly Connection[] = [
  // Upper
  ["5%", "15%", "19%", "7%"],
  ["19%", "7%", "35%", "18%"],
  ["35%", "18%", "51%", "8%"],
  ["51%", "8%", "68%", "17%"],
  ["68%", "17%", "86%", "9%"],

  // Upper-middle
  ["5%", "15%", "13%", "39%"],
  ["19%", "7%", "29%", "35%"],
  ["35%", "18%", "29%", "35%"],
  ["35%", "18%", "48%", "31%"],
  ["51%", "8%", "48%", "31%"],
  ["68%", "17%", "61%", "40%"],
  ["86%", "9%", "78%", "34%"],

  // Middle
  ["13%", "39%", "29%", "35%"],
  ["13%", "39%", "21%", "62%"],
  ["29%", "35%", "41%", "54%"],
  ["48%", "31%", "41%", "54%"],
  ["48%", "31%", "61%", "40%"],
  ["61%", "40%", "78%", "34%"],
  ["78%", "34%", "93%", "50%"],

  // Lower-middle
  ["21%", "62%", "34%", "75%"],
  ["41%", "54%", "34%", "75%"],
  ["41%", "54%", "54%", "67%"],
  ["61%", "40%", "54%", "67%"],
  ["61%", "40%", "74%", "59%"],
  ["78%", "34%", "74%", "59%"],
  ["93%", "50%", "86%", "72%"],

  // Bottom
  ["8%", "83%", "21%", "62%"],
  ["8%", "83%", "34%", "75%"],
  ["34%", "75%", "54%", "67%"],
  ["54%", "67%", "70%", "86%"],
  ["74%", "59%", "86%", "72%"],
  ["86%", "72%", "70%", "86%"],
  ["70%", "86%", "91%", "91%"],
];

const secondaryConnections: readonly Connection[] = [
  ["0%", "30%", "13%", "39%"],
  ["29%", "35%", "35%", "18%"],
  ["48%", "31%", "68%", "17%"],
  ["41%", "54%", "74%", "59%"],
  ["21%", "62%", "8%", "83%"],
  ["86%", "72%", "100%", "78%"],
];

const nodes: readonly NetworkNode[] = [
  { x: "5%", y: "15%" },
  { x: "19%", y: "7%" },
  { x: "35%", y: "18%" },
  { x: "51%", y: "8%" },
  { x: "68%", y: "17%", active: true },
  { x: "86%", y: "9%" },

  { x: "13%", y: "39%" },
  { x: "29%", y: "35%" },
  { x: "48%", y: "31%" },
  { x: "61%", y: "40%" },
  { x: "78%", y: "34%" },
  { x: "93%", y: "50%" },

  { x: "21%", y: "62%" },
  { x: "41%", y: "54%" },
  { x: "54%", y: "67%" },
  { x: "74%", y: "59%" },

  { x: "8%", y: "83%" },
  { x: "34%", y: "75%" },
  { x: "70%", y: "86%" },
  { x: "86%", y: "72%" },
  { x: "91%", y: "91%" },
];

function NetworkLines(): React.JSX.Element {
  return (
    <>
      {/* Primary connections */}
      <g
        fill="none"
        stroke="rgba(255,255,255,0.055)"
        strokeWidth="0.12"
        vectorEffect="non-scaling-stroke"
      >
        {connections.map(([x1, y1, x2, y2], index) => (
          <motion.line
            key={`${x1}-${y1}-${x2}-${y2}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            initial={{
              opacity: 0,
              pathLength: 0,
            }}
            animate={{
              opacity: 1,
              pathLength: 1,
            }}
            transition={{
              duration: 1,
              delay: index * 0.025,
              ease: "easeOut",
            }}
          />
        ))}
      </g>

      {/* Secondary connections */}
      <g
        fill="none"
        stroke="rgba(255,255,255,0.025)"
        strokeWidth="0.08"
        vectorEffect="non-scaling-stroke"
      >
        {secondaryConnections.map(([x1, y1, x2, y2]) => (
          <line
            key={`${x1}-${y1}-${x2}-${y2}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
          />
        ))}
      </g>
    </>
  );
}

function NetworkNodes(): React.JSX.Element {
  return (
    <motion.g variants={staggerFast} initial="hidden" animate="visible">
      {nodes.map((node) => (
        <motion.g key={`${node.x}-${node.y}`} variants={scaleIn}>
          {/* Outer ring */}
          <circle
            cx={node.x}
            cy={node.y}
            r={node.active ? "1.05" : "0.8"}
            fill="var(--after7-black)"
            stroke={
              node.active ? "var(--after7-accent)" : "rgba(255,255,255,0.08)"
            }
            strokeWidth="0.06"
            vectorEffect="non-scaling-stroke"
          />

          {/* Center */}
          <circle
            cx={node.x}
            cy={node.y}
            r={node.active ? "0.16" : "0.16"}
            fill={
              node.active ? "var(--after7-accent)" : "rgba(255,255,255,0.10)"
            }
          />

          {/* Active node pulse */}
          {node.active && (
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="1.8"
              fill="none"
              stroke="var(--after7-accent)"
              strokeWidth="0.045"
              vectorEffect="non-scaling-stroke"
              variants={softPulse}
              initial="initial"
              animate="animate"
            />
          )}
        </motion.g>
      ))}
    </motion.g>
  );
}

export function NotFoundNetwork(): React.JSX.Element {
  return (
    <motion.div
      aria-hidden="true"
      className="
        pointer-events-none
        absolute
        inset-0
        z-0
        overflow-hidden
      "
      variants={fadeIn}
      initial="hidden"
      animate="visible"
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <NetworkLines />
        <NetworkNodes />
      </svg>

      {/* Center readability */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(
            ellipse_at_center,
            var(--background)_0%,
            color-mix(in_srgb,var(--background)_92%,transparent)_24%,
            color-mix(in_srgb,var(--background)_55%,transparent)_42%,
            transparent_66%
          )]
        "
      />

      {/* Top fade */}
      <div
        className="
          absolute
          inset-x-0
          top-0
          h-32
          bg-linear-to-b
          from-background
          to-transparent
          opacity-60
        "
      />

      {/* Bottom fade */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-32
          bg-linear-to-t
          from-background
          to-transparent
          opacity-60
        "
      />
    </motion.div>
  );
}
