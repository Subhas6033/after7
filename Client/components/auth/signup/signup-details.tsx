"use client";
import { CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { SignupData } from "@/context/auth";
import {
  AuthHeader,
  AuthTitle,
  AuthFooter,
  PasswordField,
} from "../shared/index";

import { ProfilePhotoPicker } from "./profile-photo-picker";

type SignupDetailsProps = {
  data: SignupData;
  onChange: (data: Partial<SignupData>) => void;
  onContinue: () => void;
};

export function SignupDetails({
  data,
  onChange,
  onContinue,
}: SignupDetailsProps) {
  const canContinue =
    data.name.trim().length >= 2 &&
    data.email.trim().length > 0 &&
    data.password.length >= 8 &&
    data.dateOfBirth.trim().length > 0;

  return (
    <section className="mx-auto w-full max-w-97.5">
      <AuthHeader step={1} totalSteps={2} />

      <AuthTitle
        title="Create your account"
        description="Let's get the basics down."
      />

      <div className="mt-7 space-y-5">
        {/* Full name */}
        <div>
          <label
            htmlFor="signup-name"
            className="mb-2 block text-[14px] font-medium"
          >
            Full name <span className="text-after7-accent">*</span>
          </label>

          <Input
            id="signup-name"
            value={data.name}
            onChange={(event) =>
              onChange({
                name: event.target.value,
              })
            }
            placeholder="Your name"
            autoComplete="name"
            required
            aria-required="true"
            className="h-11 border-border bg-after7-surface px-3 text-sm"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="signup-email"
            className="mb-2 block text-[14px] font-medium"
          >
            Email <span className="text-after7-accent">*</span>
          </label>

          <Input
            id="signup-email"
            value={data.email}
            onChange={(event) =>
              onChange({
                email: event.target.value,
              })
            }
            placeholder="you@email.com"
            type="email"
            autoComplete="email"
            required
            aria-required="true"
            className="h-11 border-border bg-after7-surface px-3 text-sm"
          />
        </div>

        {/* Password
            PasswordField already renders its own label.
        */}
        <PasswordField
          value={data.password}
          onChange={(password) =>
            onChange({
              password,
            })
          }
          autoComplete="new-password"
          required
        />

        {/* Date of birth */}
        <div>
          <label
            htmlFor="signup-date-of-birth"
            className="mb-2 block text-[14px] font-medium"
          >
            Date of birth <span className="text-after7-accent">*</span>
          </label>

          <div className="relative">
            <Input
              id="signup-date-of-birth"
              value={data.dateOfBirth}
              onChange={(event) =>
                onChange({
                  dateOfBirth: event.target.value,
                })
              }
              type="date"
              required
              aria-required="true"
              className="h-11 border-border bg-after7-surface px-3 pr-10 text-sm"
            />

            <CalendarDays className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-after7-text-subtle" />
          </div>
        </div>

        {/* Profile photo is optional */}
        <ProfilePhotoPicker
          photo={data.profilePhoto}
          avatar={data.profileAvatar}
          onPhotoChange={(profilePhoto) =>
            onChange({
              profilePhoto,
            })
          }
          onAvatarChange={(profileAvatar) =>
            onChange({
              profileAvatar,
            })
          }
        />
      </div>

      <Button
        type="button"
        disabled={!canContinue}
        onClick={onContinue}
        className="mt-6 h-11 w-full rounded-md bg-after7-accent text-sm font-medium text-after7-black hover:bg-after7-accent-hover disabled:cursor-not-allowed disabled:opacity-40"
      >
        Continue
      </Button>

      {!canContinue && (
        <p className="mt-3 text-center text-xs text-after7-text-muted">
          Complete all required fields to continue.
        </p>
      )}

      <AuthFooter
        question="Already have an account?"
        linkText="Log in"
        href="/login"
      />
    </section>
  );
}
