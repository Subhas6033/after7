import type { SignupData } from "@/context/auth";

export type BackendGender =
  | "male"
  | "female"
  | "non_binary"
  | "other"
  | "prefer_not_to_say";

export type RegisterPayload = {
  email: string;
  name: string;
  password: string;
  gender?: BackendGender | null;
};

export type RegisterUser = {
  id: string;
  email: string;
  name: string;
  gender: BackendGender | null;
  role: string;
  status: string;
  emailVerified: boolean;
  emailVerifiedAt: string | null;
  lastLoginAt: string | null;
  createdAt: string;
  updatedAt: string;
};

export type RegisterResponse = {
  statusCode: number;
  data: {
    user: RegisterUser;
  };
  message: string;
};

export function toBackendGender(
  gender: SignupData["gender"],
): BackendGender | null {
  switch (gender) {
    case "Male":
      return "male";

    case "Female":
      return "female";

    case "Others":
      return "other";

    default:
      return null;
  }
}

export function toRegisterPayload(data: SignupData): RegisterPayload {
  return {
    email: data.email.trim().toLowerCase(),
    name: data.name.trim(),
    password: data.password,
    gender: toBackendGender(data.gender),
  };
}
