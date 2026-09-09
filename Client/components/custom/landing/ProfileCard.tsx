"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { UserRound } from "lucide-react";
import { Card } from "@/components/ui/card";
import { ambientGlow, iconFloat, softPulse } from "@/animation/index";

type RandomUser = {
  login: {
    uuid: string;
  };
  picture: {
    thumbnail: string;
  };
};

type RandomUserResponse = {
  results: RandomUser[];
};

export function ProfileCard(): React.JSX.Element {
  const [avatars, setAvatars] = useState<string[]>([]);

  useEffect(() => {
    async function fetchAvatars(): Promise<void> {
      try {
        const [maleResponse, femaleResponse, randomResponse] =
          await Promise.all([
            fetch("https://randomuser.me/api/?gender=male&results=1"),
            fetch("https://randomuser.me/api/?gender=female&results=1"),
            fetch("https://randomuser.me/api/?results=1"),
          ]);

        if (!maleResponse.ok || !femaleResponse.ok || !randomResponse.ok) {
          throw new Error("Failed to fetch avatars");
        }

        const [maleData, femaleData, randomData]: RandomUserResponse[] =
          await Promise.all([
            maleResponse.json(),
            femaleResponse.json(),
            randomResponse.json(),
          ]);

        const newAvatars = [
          maleData.results[0]?.picture.thumbnail,
          femaleData.results[0]?.picture.thumbnail,
          randomData.results[0]?.picture.thumbnail,
        ].filter((avatar): avatar is string => Boolean(avatar));

        // Randomize avatar order on every page load.
        newAvatars.sort(() => Math.random() - 0.5);

        setAvatars(newAvatars);
      } catch (error) {
        console.error("Failed to load avatars:", error);
      }
    }

    fetchAvatars();
  }, []);

  return (
    <Card className="relative overflow-hidden rounded-2xl border-white/10 bg-[#151515] p-4 shadow-2xl shadow-black/40">
      {/* Ambient glow */}
      <motion.div
        className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#f0a247]/10 blur-3xl"
        variants={ambientGlow}
        initial="initial"
        animate="animate"
      />

      <div className="relative flex items-center justify-between">
        <div className="flex items-center gap-3">
          <motion.div
            className="flex size-11 items-center justify-center rounded-full bg-[#2b241b]"
            variants={iconFloat}
            initial="initial"
            animate="animate"
          >
            <UserRound size={19} className="text-[#f0a247]" />
          </motion.div>

          <div>
            <p className="text-sm font-medium text-white">Someone new</p>

            <p className="text-xs text-white/40">Matched just now</p>
          </div>
        </div>

        <motion.span
          className="rounded-full bg-[#f0a247]/10 px-2.5 py-1 text-[10px] font-medium text-[#f0a247]"
          variants={softPulse}
          initial="initial"
          animate="animate"
        >
          92% match
        </motion.span>
      </div>

      <div className="mt-5 rounded-xl bg-black/50 p-4">
        <p className="text-xs uppercase tracking-[0.18em] text-white/30">
          Anonymous question
        </p>

        <p className="mt-2 text-sm leading-6 text-white/80">
          &quot;What is something you wish more people understood about
          you?&quot;
        </p>
      </div>

      <div className="mt-4 flex items-center gap-2">
        <div className="flex -space-x-2">
          {avatars.length > 0
            ? avatars.map((avatar, index) => (
                <motion.img
                  key={`${avatar}-${index}`}
                  src={avatar}
                  alt=""
                  className="size-6 rounded-full border-2 border-[#151515] object-cover"
                  variants={iconFloat}
                  initial="initial"
                  animate="animate"
                  transition={{
                    delay: index * 0.15,
                  }}
                />
              ))
            : [0, 1, 2].map((item) => (
                <motion.div
                  key={item}
                  className="size-6 rounded-full border-2 border-[#151515] bg-[#252525]"
                  variants={iconFloat}
                  initial="initial"
                  animate="animate"
                  transition={{
                    delay: item * 0.15,
                  }}
                />
              ))}
        </div>

        <span className="text-[11px] text-white/35">
          Building real connections
        </span>
      </div>
    </Card>
  );
}
