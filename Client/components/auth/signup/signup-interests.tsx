"use client";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import type { SignupData } from "./signup-flow";

type SignupInterestsProps = {
  data: SignupData;
  onChange: (data: Partial<SignupData>) => void;
  onBack: () => void;
  onFinish: () => void;
};

/*
  Reuse the type from SignupData instead of creating
  another separate type that could get out of sync.
 */
type MeetPreference = NonNullable<SignupData["meetPreference"]>;

// TODO: Make this interest + meet options + availability from admin
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
    value: "similar-age",
    label: "Similar age range",
  },
  {
    value: "specific",
    label: "Specific preferences",
  },
];

const AVAILABILITY = [
  "Mornings",
  "Afternoons",
  "Evenings",
  "Weekends",
] as const;

export function SignupInterests({
  data,
  onChange,
  onBack,
  onFinish,
}: SignupInterestsProps) {
  const selectedInterests = data.interests ?? [];

  const selectedMeetPreference: MeetPreference =
    data.meetPreference ?? "similar-age";

  const selectedAvailability = data.availability ?? [];

  // Toggle the interests
  const toggleInterest = (interest: string) => {
    const exists = selectedInterests.includes(interest);

    const next = exists
      ? selectedInterests.filter((item) => item !== interest)
      : [...selectedInterests, interest];

    onChange({
      interests: next,
    });
  };

  /*
    Change the "Who do you want to meet?" option.
    Important:
    value is MeetPreference, not string.
   */
  const setMeetPreference = (value: MeetPreference) => {
    onChange({
      meetPreference: value,
    });
  };

  // Toggle availability
  const toggleAvailability = (value: string) => {
    const exists = selectedAvailability.includes(value);

    const next = exists
      ? selectedAvailability.filter((item) => item !== value)
      : [...selectedAvailability, value];

    onChange({
      availability: next,
    });
  };

  return (
    <section className="mx-auto w-full max-w-97.5">
      {/* Header */}
      <SignupHeader onBack={onBack} />

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="mt-7"
      >
        <h1 className="text-[24px] font-semibold leading-tight tracking-tight">
          What are you into?
        </h1>

        <p className="mt-2 max-w-87.5 text-[15px] leading-5 text-after7-text-muted">
          Pick a few interests — this helps us find
          <br />
          people you&apos;ll click with.
        </p>
      </motion.div>

      {/* Interests */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.08,
          duration: 0.25,
        }}
        className="mt-7"
      >
        <div className="flex flex-wrap gap-x-4 gap-y-3">
          {INTERESTS.map((interest) => {
            const selected = selectedInterests.includes(interest);

            return (
              <button
                key={interest}
                type="button"
                onClick={() => toggleInterest(interest)}
                aria-pressed={selected}
                className={[
                  "text-[14px] leading-5 transition-colors",
                  selected
                    ? "font-medium text-after7-accent"
                    : "text-after7-text hover:text-after7-accent",
                ].join(" ")}
              >
                {interest}
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* Who do you want to meet? */}
      <motion.div
        initial={{
          opacity: 0,
          y: 6,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.12,
          duration: 0.25,
        }}
        className="mt-8"
      >
        <h2 className="text-[15px] font-semibold">Who do you want to meet?</h2>

        <div className="mt-3 space-y-2">
          {MEET_OPTIONS.map((option) => {
            const selected = selectedMeetPreference === option.value;

            return (
              <button
                key={option.value}
                type="button"
                onClick={() => setMeetPreference(option.value)}
                aria-pressed={selected}
                className={[
                  "flex h-11 w-full items-center rounded-md border px-3 text-left transition-all",
                  selected
                    ? "border-after7-accent bg-after7-accent/10 text-after7-text"
                    : "border-border bg-after7-surface text-after7-text-muted hover:border-after7-text-subtle",
                ].join(" ")}
              >
                {/* Radio */}
                <span
                  className={[
                    "mr-3 flex size-4 shrink-0 items-center justify-center rounded-full border",
                    selected
                      ? "border-after7-accent"
                      : "border-after7-text-subtle",
                  ].join(" ")}
                >
                  {selected && (
                    <span className="size-2 rounded-full bg-after7-accent" />
                  )}
                </span>

                <span className="text-[14px]">{option.label}</span>
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* Availability */}
      <motion.div
        initial={{
          opacity: 0,
          y: 6,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.16,
          duration: 0.25,
        }}
        className="mt-7"
      >
        <h2 className="text-[15px] font-semibold">Availability</h2>

        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2.5">
          {AVAILABILITY.map((item) => {
            const selected = selectedAvailability.includes(item);

            return (
              <button
                key={item}
                type="button"
                onClick={() => toggleAvailability(item)}
                aria-pressed={selected}
                className={[
                  "text-[14px] leading-5 transition-colors",
                  selected
                    ? "font-medium text-after7-accent"
                    : "text-after7-text hover:text-after7-accent",
                ].join(" ")}
              >
                {item}
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* Finish setup */}
      <motion.div
        initial={{
          opacity: 0,
          y: 8,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.2,
          duration: 0.25,
        }}
      >
        <Button
          type="button"
          onClick={onFinish}
          className="mt-9 h-11 w-full rounded-md bg-after7-accent text-[15px] font-medium text-after7-black transition-colors hover:bg-after7-accent-hover"
        >
          Finish setup
        </Button>
      </motion.div>
    </section>
  );
}

// Step Headers
function SignupHeader({ onBack }: { onBack: () => void }) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={onBack}
          aria-label="Back"
          className="text-after7-text-muted transition-colors hover:text-after7-text"
        >
          <ArrowLeft className="size-5" />
        </button>

        <span className="text-[12px] text-after7-text-muted">Step 2 of 2</span>
      </div>

      {/* Progress bar */}
      <div className="mt-5 h-0.5 overflow-hidden rounded-full bg-after7-surface">
        <motion.div
          initial={{
            width: "50%",
          }}
          animate={{
            width: "100%",
          }}
          transition={{
            duration: 0.45,
            ease: "easeOut",
          }}
          className="h-full rounded-full bg-after7-accent"
        />
      </div>
    </div>
  );
}
