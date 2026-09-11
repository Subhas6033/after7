"use client";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp, scaleIn, staggerFast } from "@/animation";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { SignupData } from "@/context/auth";

type SignupInterestsProps = {
  data: SignupData;
  onChange: (data: Partial<SignupData>) => void;
  onBack: () => void;
  onFinish: () => void;
  isPending?: boolean;
};

type MeetPreference = SignupData["meetPreference"];

const INTERESTS = [
  "Music",
  "Art",
  "Gaming",
  "Fitness",
  "Movies",
  "Books",
  "Travel",
  "Photography",
  "Food",
  "Tech",
  "Fashion",
  "Nature",
  "Writing",
  "Sports",
  "Volunteering",
  "Spirituality",
] as const;

const MEET_OPTIONS: {
  value: MeetPreference;
  label: string;
}[] = [
  {
    value: "anyone",
    label: "Anyone",
  },
  {
    value: "similar-age & gender",
    label: "Similar age range & opposite gender",
  },
];

const GENDER = ["Male", "Female", "Others"] as const;

type Gender = (typeof GENDER)[number];

export function SignupInterests({
  data,
  onChange,
  onBack,
  onFinish,
  isPending = false,
}: SignupInterestsProps) {
  const selectedInterests = data.interests;
  const selectedMeetPreference = data.meetPreference;
  const selectedGender = data.gender;

  const toggleInterest = (interest: (typeof INTERESTS)[number]) => {
    const exists = selectedInterests.includes(interest);

    const next = exists
      ? selectedInterests.filter((item) => item !== interest)
      : [...selectedInterests, interest];

    onChange({
      interests: next,
    });
  };

  const setMeetPreference = (value: MeetPreference) => {
    onChange({
      meetPreference: value,
    });
  };

  const setGender = (value: string | null) => {
    if (value !== "Male" && value !== "Female" && value !== "Others") {
      return;
    }

    const gender: Gender = value;

    onChange({
      gender,
    });
  };

  return (
    <section className="mx-auto w-full max-w-97.5">
      <SignupHeader onBack={onBack} />

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{
          delay: 0.05,
        }}
        className="mt-7"
      >
        <h1 className="text-[24px] font-semibold leading-tight tracking-tight">
          What are you into?
        </h1>

        <motion.p
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{
            delay: 0.18,
          }}
          className="mt-2 max-w-87.5 text-[15px] leading-5 text-after7-text-muted"
        >
          Pick a few interests — this helps us find
          <br />
          people you&apos;ll click with.
        </motion.p>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{
          delay: 0.12,
        }}
        className="mt-7"
      >
        <h2 className="text-[15px] font-semibold">Interests</h2>

        <motion.div
          variants={staggerFast}
          initial="hidden"
          animate="visible"
          className="mt-3 flex flex-wrap gap-x-4 gap-y-3"
        >
          {INTERESTS.map((interest) => {
            const selected = selectedInterests.includes(interest);

            return (
              <motion.button
                key={interest}
                variants={fadeInUp}
                type="button"
                onClick={() => toggleInterest(interest)}
                aria-pressed={selected}
                className={[
                  "text-[14px] leading-5 transition-colors",
                  selected
                    ? "font-medium text-after7-accent"
                    : "text-after7-text hover:text-after7-accent",
                ].join(" ")}
                whileHover={{
                  y: -1,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                transition={{
                  duration: 0.15,
                }}
              >
                {interest}
              </motion.button>
            );
          })}
        </motion.div>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{
          delay: 0.2,
        }}
        className="mt-8"
      >
        <h2 className="text-[15px] font-semibold">Who do you want to meet?</h2>

        <motion.div
          variants={staggerFast}
          initial="hidden"
          animate="visible"
          className="mt-3 space-y-2"
        >
          {MEET_OPTIONS.map((option) => {
            const selected = selectedMeetPreference === option.value;

            return (
              <motion.button
                key={option.value}
                variants={fadeInUp}
                type="button"
                onClick={() => setMeetPreference(option.value)}
                aria-pressed={selected}
                className={[
                  "flex h-11 w-full items-center rounded-md border px-3 text-left",
                  "transition-colors",
                  selected
                    ? "border-after7-accent bg-after7-accent/10 text-after7-text"
                    : "border-border bg-after7-surface text-after7-text-muted hover:border-after7-text-subtle",
                ].join(" ")}
                whileHover={{
                  y: -1,
                }}
                whileTap={{
                  scale: 0.985,
                }}
                transition={{
                  duration: 0.15,
                }}
              >
                <motion.span
                  className={[
                    "mr-3 flex size-4 shrink-0 items-center justify-center rounded-full border",
                    selected
                      ? "border-after7-accent"
                      : "border-after7-text-subtle",
                  ].join(" ")}
                  animate={{
                    scale: selected ? 1 : 0.96,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {selected && (
                    <motion.span
                      initial={{
                        opacity: 0,
                        scale: 0.5,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      transition={{
                        duration: 0.25,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="size-2 rounded-full bg-after7-accent"
                    />
                  )}
                </motion.span>

                <span className="text-[14px]">{option.label}</span>
              </motion.button>
            );
          })}
        </motion.div>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{
          delay: 0.28,
        }}
        className="mt-7"
      >
        <h2 className="text-[15px] font-semibold">Gender</h2>

        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          transition={{
            delay: 0.34,
          }}
          className="mt-3"
        >
          <Select<string>
            value={selectedGender === "" ? null : selectedGender}
            onValueChange={setGender}
            required
          >
            <SelectTrigger className="h-11 w-full border-border bg-after7-surface text-[14px]">
              <SelectValue placeholder="Select your gender" />
            </SelectTrigger>

            <SelectContent>
              {GENDER.map((item) => (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </motion.div>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{
          delay: 0.38,
        }}
        className="mt-9"
      >
        <motion.div
          whileHover={{
            scale: 1.01,
          }}
          whileTap={{
            scale: 0.98,
          }}
          transition={{
            duration: 0.15,
          }}
        >
          <Button
            type="button"
            onClick={onFinish}
            disabled={isPending}
            className="h-11 w-full rounded-md bg-after7-accent text-[15px] font-medium text-after7-black transition-colors hover:bg-after7-accent-hover disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isPending ? "Creating account..." : "Finish setup"}
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}

function SignupHeader({ onBack }: { onBack: () => void }) {
  return (
    <motion.div variants={fadeIn} initial="hidden" animate="visible">
      <div className="flex items-center justify-between">
        <motion.button
          type="button"
          onClick={onBack}
          aria-label="Back"
          className="text-after7-text-muted transition-colors hover:text-after7-text"
          whileHover={{
            x: -2,
          }}
          whileTap={{
            scale: 0.92,
          }}
          transition={{
            duration: 0.15,
          }}
        >
          <ArrowLeft className="size-5" />
        </motion.button>

        <motion.span
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{
            delay: 0.1,
          }}
          className="text-[12px] text-after7-text-muted"
        >
          Step 2 of 2
        </motion.span>
      </div>

      <div className="mt-5 h-0.5 overflow-hidden rounded-full bg-after7-surface">
        <motion.div
          initial={{
            width: "50%",
          }}
          animate={{
            width: "100%",
          }}
          transition={{
            duration: 0.7,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="h-full rounded-full bg-after7-accent"
        />
      </div>
    </motion.div>
  );
}
