import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/data/client/api-client";
import { authKeys } from "./auth.keys";

export type CurrentUser = {
  id: string;
  name: string;
  email: string;
};

async function getCurrentUser(): Promise<CurrentUser> {
  return apiClient<CurrentUser>("/auth/me", {
    method: "GET",
  });
}

export function useCurrentUser() {
  return useQuery({
    queryKey: authKeys.user(),
    queryFn: getCurrentUser,
    retry: false,
  });
}
