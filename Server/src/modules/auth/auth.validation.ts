import { z } from "zod";
import { UserGender } from "../users/user.types.ts";

/*
  Password validation rules.
 */
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

/*
  Registration request validation.
 */
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

  gender: z.nativeEnum(UserGender).nullable().optional(),

  password: passwordSchema,
});

/*
  Type inferred directly from the registration schema.
 */
export type RegisterInput = z.infer<typeof registerSchema>;
