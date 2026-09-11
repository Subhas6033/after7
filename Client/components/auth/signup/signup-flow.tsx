"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useSignup } from "@/context/auth";
import { useCompleteSignup } from "@/data/modules/auth/use-complete-signup";
import { SignupDetails } from "./signup-details";
import { SignupInterests } from "./signup-interests";
import { useState } from "react";

export function SignupFlow() {
  const [step, setStep] = useState(1);
  const { data, updateData, isStepOneComplete, isComplete } = useSignup();
  const { submit, isPending, isSuccess, isError, error } = useCompleteSignup();

  const handleContinue = () => {
    if (!isStepOneComplete) {
      return;
    }

    setStep(2);
  };

  const handleBack = () => {
    if (isPending) {
      return;
    }

    setStep(1);
  };

  const handleFinish = () => {
    if (!isComplete || isPending) {
      return;
    }

    submit();
  };

  return (
    <main className="min-h-svh bg-background px-4 py-8 text-foreground sm:px-6">
      <div className="mx-auto flex min-h-[calc(100svh-4rem)] w-full max-w-130 items-center justify-center">
        <AnimatePresence mode="wait" initial={false}>
          {step === 1 ? (
            <motion.div
              key="details"
              initial={{
                opacity: 0,
                x: 24,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: -24,
              }}
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
              initial={{
                opacity: 0,
                x: 24,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: -24,
              }}
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
                isPending={isPending}
              />

              {isError && (
                <p
                  role="alert"
                  className="mt-4 text-center text-sm text-red-500"
                >
                  {error?.message ??
                    "Unable to create your account. Please try again."}
                </p>
              )}

              {isSuccess && (
                <p
                  role="status"
                  className="mt-4 text-center text-sm text-after7-accent"
                >
                  Account created successfully.
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
