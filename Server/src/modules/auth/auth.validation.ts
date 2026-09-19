import { z } from "zod";
import { UserGender, MeetPreference } from "../users/user.types.ts";

export const passwordSchema = z
  .string()
  .min(8, "Password must contain at least 8 characters")
  .max(128, "Password cannot exceed 128 characters")
  .refine(
    (password) => /[A-Z]/.test(password),
    "Password must contain at least one uppercase letter",
  )
  .refine(
    (password) => /[a-z]/.test(password),
    "Password must contain at least one lowercase letter",
  )
  .refine(
    (password) => /[0-9]/.test(password),
    "Password must contain at least one number",
  );

export const registerSchema = z.object({
  email: z
    .string()
    .trim()
    .email("Please provide a valid email address")
    .toLowerCase(),

  name: z
    .string()
    .trim()
    .min(2, "Name must contain at least 2 characters")
    .max(100, "Name cannot exceed 100 characters"),

  password: passwordSchema,

  gender: z.nativeEnum(UserGender).nullable().optional(),

  dateOfBirth: z
    .string()
    .trim()
    .min(1, "Date of birth is required")
    .refine(
      (value) => !Number.isNaN(Date.parse(value)),
      "Please provide a valid date of birth",
    ),

  profileAvatar: z.string().trim().nullable().optional(),

  interests: z
    .array(z.string().trim().min(1, "Interest cannot be empty"))
    .default([]),

  meetPreference: z.nativeEnum(MeetPreference).nullable().optional(),
});

export type RegisterInput = z.infer<typeof registerSchema>;
