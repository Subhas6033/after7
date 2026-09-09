"use client";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { FadeIn, Float, Glow, scaleIn, softPulse } from "@/animation/index";
import { ProfileCard } from "./ProfileCard";

export function HeroMockup(): React.JSX.Element {
  return (
    <FadeIn className="relative mx-auto w-full max-w-md">
      <Glow className="absolute -inset-8 rounded-[2rem] bg-[#f0a247]/5 blur-3xl" />

      <Float>
        <Card className="relative rounded-[2rem] border-white/10 bg-[#0b0b0b] p-3 shadow-2xl shadow-black/50">
          <div className="rounded-[1.4rem] border border-white/[0.07] bg-[#111] p-4">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-xs tracking-wide text-white/35">
                  YOUR AFTER7
                </p>

                <p className="mt-1 text-sm font-medium text-white">Tonight</p>
              </div>

              <motion.div
                className="rounded-full bg-[#f0a247]/10 px-2.5 py-1 text-[10px] text-[#f0a247]"
                variants={softPulse}
                initial="initial"
                animate="animate"
              >
                Day 3 / 7
              </motion.div>
            </div>

            <ProfileCard />

            <div className="mt-3 grid grid-cols-2 gap-3">
              <StatCard label="Questions" value="12" />

              <StatCard label="Connection" value="Strong" />
            </div>
          </div>
        </Card>
      </Float>
    </FadeIn>
  );
}

type StatCardProps = {
  label: string;
  value: string;
};

function StatCard({ label, value }: StatCardProps): React.JSX.Element {
  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
      }}
      className="rounded-xl border border-white/6 bg-white/2.5 p-3"
    >
      <p className="text-[10px] uppercase tracking-wider text-white/30">
        {label}
      </p>

      <p className="mt-1 text-lg font-semibold text-white">{value}</p>
    </motion.div>
  );
}
