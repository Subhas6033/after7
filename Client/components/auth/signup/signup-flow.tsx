"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SignupDetails } from "./signup-details";
import { SignupInterests } from "./signup-interests";

export type SignupData = {
  name: string;
  email: string;
  password: string;
  dateOfBirth: string;

  // Profile photo
  profilePhoto: File | null;
  profileAvatar: string | null;

  interests: string[];
  meetPreference: "anyone" | "similar-age" | "specific";
  availability: string[];
};

const initialData: SignupData = {
  name: "",
  email: "",
  password: "",
  dateOfBirth: "",

  profilePhoto: null,
  profileAvatar: null,

  interests: [],
  meetPreference: "similar-age",
  availability: [],
};

export function SignupFlow() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<SignupData>(initialData);

  function updateData(patch: Partial<SignupData>) {
    setData((current) => ({
      ...current,
      ...patch,
    }));
  }

  function handleContinue() {
    setStep(2);
  }

  function handleBack() {
    setStep(1);
  }

  function handleFinish() {
    console.log("Signup data:", data);
    // TODO: Later Connect this with the actual api
  }

  return (
    <main className="min-h-svh bg-background px-4 py-8 text-foreground sm:px-6">
      <div className="mx-auto flex min-h-[calc(100svh-4rem)] w-full max-w-130 items-center justify-center">
        <AnimatePresence mode="wait" initial={false}>
          {step === 1 ? (
            <motion.div
              key="details"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{
                duration: 0.22,
                ease: "easeOut",
              }}
              className="w-full"
            >
              <SignupDetails
                data={data}
                onChange={updateData}
                onContinue={handleContinue}
              />
            </motion.div>
          ) : (
            <motion.div
              key="interests"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{
                duration: 0.22,
                ease: "easeOut",
              }}
              className="w-full"
            >
              <SignupInterests
                data={data}
                onChange={updateData}
                onBack={handleBack}
                onFinish={handleFinish}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
