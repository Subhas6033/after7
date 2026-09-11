"use client";
import { useSignup } from "@/context/auth";
import { useRegisterMutation } from "./auth.mutations";
import { toRegisterPayload } from "./auth.types";

export function useCompleteSignup() {
  const { data, resetSignup, isComplete } = useSignup();

  const mutation = useRegisterMutation({
    onSuccess: () => {
      resetSignup();
    },
  });

  const submit = () => {
    if (!isComplete) {
      return;
    }

    const payload = toRegisterPayload(data);

    mutation.mutate(payload);
  };

  return {
    submit,
    isPending: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,
    response: mutation.data,
    reset: mutation.reset,
  };
}
