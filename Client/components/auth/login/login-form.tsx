"use client";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AuthShell } from "../shared/auth-shell";
import { AuthTitle } from "../shared/auth-title";
import { PasswordField } from "../shared/password-field";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const canContinue = Boolean(email.trim() && password.trim());

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!canContinue) return;

    // TODO: connect your authentication logic here.
    console.log({
      email,
      password,
      remember,
    });
  }

  return (
    <AuthShell>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <AuthTitle
          title="Welcome back"
          description="Sign in to continue to After7"
        />

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          {/* Email */}
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-xs font-medium text-after7-text"
            >
              Email
            </label>

            <div className="relative">
              <Mail className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-after7-text-subtle" />

              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="h-11 pl-10 text-sm"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <PasswordField
              value={password}
              onChange={setPassword}
              label="Password"
              placeholder="Enter your password"
              autoComplete="current-password"
            />

            <div className="mt-2 text-right">
              <Link
                href="/forgot-password"
                className="text-xs font-medium text-after7-text-muted transition-colors hover:text-after7-text"
              >
                Forgot password?
              </Link>
            </div>
          </div>

          {/* Remember me */}
          <label className="flex cursor-pointer items-center gap-2.5">
            <input
              type="checkbox"
              checked={remember}
              onChange={(event) => setRemember(event.target.checked)}
              className="
                size-4 rounded
                border-border
                accent-after7-accent
                focus:ring-after7-accent
              "
            />

            <span className="text-xs text-after7-text-muted">Remember me</span>
          </label>

          {/* Submit */}
          <Button
            type="submit"
            disabled={!canContinue}
            className="
              h-11 w-full
              bg-after7-accent
              text-after7-black
              transition-all
              hover:bg-after7-accent-hover
              disabled:cursor-not-allowed
              disabled:opacity-50
            "
          >
            Sign in
            <ArrowRight className="size-4" />
          </Button>
        </form>

        {/* Signup */}
        <p className="mt-8 text-center text-sm text-after7-text-muted">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="font-medium text-after7-text transition-colors hover:text-after7-accent"
          >
            Create one
          </Link>
        </p>
      </motion.div>
    </AuthShell>
  );
}
