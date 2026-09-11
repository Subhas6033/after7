"use client";
import { CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { SignupData } from "@/context/auth";
import {
  AuthHeader,
  AuthTitle,
  AuthField,
  PasswordField,
  AuthFooter,
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
  const canContinue = Boolean(
    data.name.trim() &&
    data.email.trim() &&
    data.password.length >= 8 &&
    data.dateOfBirth,
  );

  return (
    <section className="mx-auto w-full max-w-97.5">
      <AuthHeader step={1} totalSteps={2} />

      <AuthTitle
        title="Create your account"
        description="Let's get the basics down."
      />

      <div className="mt-7 space-y-5">
        <AuthField label="Full name">
          <Input
            value={data.name}
            onChange={(event) =>
              onChange({
                name: event.target.value,
              })
            }
            placeholder="Your name"
            autoComplete="name"
            className="h-11 border-border bg-after7-surface px-3 text-sm"
          />
        </AuthField>

        <AuthField label="Email">
          <Input
            value={data.email}
            onChange={(event) =>
              onChange({
                email: event.target.value,
              })
            }
            placeholder="you@email.com"
            type="email"
            autoComplete="email"
            className="h-11 border-border bg-after7-surface px-3 text-sm"
          />
        </AuthField>

        <AuthField label="Password">
          <PasswordField
            value={data.password}
            onChange={(password) =>
              onChange({
                password,
              })
            }
            autoComplete="new-password"
          />
        </AuthField>

        <AuthField label="Date of birth">
          <div className="relative">
            <Input
              value={data.dateOfBirth}
              onChange={(event) =>
                onChange({
                  dateOfBirth: event.target.value,
                })
              }
              type="date"
              className="h-11 border-border bg-after7-surface px-3 text-sm"
            />

            <CalendarDays className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-after7-text-subtle" />
          </div>
        </AuthField>

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
        className="mt-6 h-11 w-full rounded-md bg-after7-accent text-sm font-medium text-after7-black hover:bg-after7-accent-hover disabled:opacity-40"
      >
        Continue
      </Button>

      <AuthFooter
        question="Already have an account?"
        linkText="Log in"
        href="/login"
      />
    </section>
  );
}
