import { apiClient } from "@/data/client/api-client";
import type { RegisterPayload, RegisterResponse } from "./auth.types";

export async function register(
  payload: RegisterPayload,
): Promise<RegisterResponse> {
  return apiClient<RegisterResponse>("/api/v1/auth/register", {
    method: "POST",
    body: payload,
  });
}
