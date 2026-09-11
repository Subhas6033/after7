import { useMutation, type UseMutationOptions } from "@tanstack/react-query";
import { register } from "./auth.api";
import type { RegisterPayload, RegisterResponse } from "./auth.types";

export function useRegisterMutation(
  options?: UseMutationOptions<RegisterResponse, Error, RegisterPayload>,
) {
  return useMutation({
    mutationKey: ["auth", "register"],
    mutationFn: register,
    ...options,
  });
}
