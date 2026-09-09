"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Eye, EyeOff, Loader2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/animation/index";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000";

type FormState = { name: string; email: string; password: string; gender: string };

const passwordRules = [
  ["8+ characters", (v: string) => v.length >= 8],
  ["One uppercase", (v: string) => /[A-Z]/.test(v)],
  ["One lowercase", (v: string) => /[a-z]/.test(v)],
  ["One number", (v: string) => /[0-9]/.test(v)],
] as const;

export function SignupForm(): React.JSX.Element {
  const [form, setForm] = useState<FormState>({ name: "", email: "", password: "", gender: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const update = (field: keyof FormState, value: string) =>
    setForm((current) => ({ ...current, [field]: value }));

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password,
          gender: form.gender || null,
        }),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => null);
        throw new Error(body?.message ?? "We couldn't create your account. Please try again.");
      }

      window.location.href = "/login";
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-5 py-10 text-[#f5f3ef]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          aria-hidden
          className="absolute -left-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-[#f0a247]/10 blur-[100px]"
          animate={{ x: [0, 35, 0], y: [0, 25, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute -bottom-48 -right-32 h-[32rem] w-[32rem] rounded-full bg-[#f0a247]/8 blur-[120px]"
          animate={{ x: [0, -30, 0], y: [0, -25, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:44px_44px]" />
      </div>

      <FadeIn className="relative z-10 w-full max-w-md">
        <motion.div
          className="after7-surface rounded-2xl p-6 shadow-2xl shadow-black/50 sm:p-8"
          initial={{ opacity: 0, y: 22, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div className="mb-8 text-center">
            <Link href="/" className="mb-7 inline-flex items-center gap-2 text-sm font-semibold tracking-[0.2em] text-[#f5f3ef]">
              <span className="grid size-8 place-items-center rounded-lg bg-[#f0a247] text-black">7</span>
              AFTER7
            </Link>
            <div className="mb-3 flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-[#f0a247]">
              <Sparkles className="size-3.5" /> Start your journey
            </div>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Create your account</h1>
            <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-[#9b9b9b]">A calmer way to understand yourself, connect, and move forward.</p>
          </div>

          <form onSubmit={submit} className="space-y-4">
            <Field label="Name" type="text" placeholder="Your name" value={form.name} onChange={(v) => update("name", v)} autoComplete="name" />
            <Field label="Email" type="email" placeholder="you@example.com" value={form.email} onChange={(v) => update("email", v)} autoComplete="email" />

            <div>
              <label htmlFor="gender" className="mb-1.5 block text-xs font-medium text-[#d7d3cc]">Gender <span className="text-[#6f6f6f]">(optional)</span></label>
              <select id="gender" value={form.gender} onChange={(e) => update("gender", e.target.value)} className="h-11 w-full rounded-lg border border-white/10 bg-[#111] px-3 text-sm transition-colors focus:border-[#f0a247]/60">
                <option value="">Prefer not to say</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="non_binary">Non-binary</option>
              </select>
            </div>

            <div>
              <label htmlFor="password" className="mb-1.5 block text-xs font-medium text-[#d7d3cc]">Password</label>
              <div className="relative">
                <input id="password" type={showPassword ? "text" : "password"} placeholder="Create a strong password" value={form.password} onChange={(e) => update("password", e.target.value)} autoComplete="new-password" required className="h-11 w-full rounded-lg border border-white/10 bg-[#111] px-3 pr-11 text-sm transition-colors focus:border-[#f0a247]/60 focus:ring-2 focus:ring-[#f0a247]/10" />
                <button type="button" onClick={() => setShowPassword((v) => !v)} className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-2 text-[#777] hover:text-[#f5f3ef]" aria-label={showPassword ? "Hide password" : "Show password"}>
                  {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                </button>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {passwordRules.map(([label, valid]) => (
                  <div key={label} className={`flex items-center gap-1.5 text-[11px] ${valid(form.password) ? "text-[#39c878]" : "text-[#6f6f6f]"}`}>
                    <Check className="size-3.5" /> {label}
                  </div>
                ))}
              </div>
            </div>

            {error && <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="rounded-lg border border-[#ef6464]/20 bg-[#ef6464]/10 px-3 py-2 text-xs text-[#ef8b8b]">{error}</motion.p>}

            <Button type="submit" disabled={loading} size="lg" className="mt-2 h-11 w-full bg-[#f0a247] font-semibold text-black hover:bg-[#f5ad57]">
              {loading ? <Loader2 className="size-4 animate-spin" /> : <>Create account <ArrowRight className="size-4 transition-transform group-hover/button:translate-x-0.5" /></>}
            </Button>
          </form>

          <p className="mt-6 text-center text-xs leading-5 text-[#6f6f6f]">By creating an account, you agree to our terms and privacy policy.</p>
          <div className="my-6 h-px bg-white/[0.07]" />
          <p className="text-center text-sm text-[#9b9b9b]">Already have an account? <Link href="/login" className="font-medium text-[#f0a247] hover:text-[#f5ad57]">Sign in</Link></p>
        </motion.div>
      </FadeIn>
    </main>
  );
}

function Field({ label, type, placeholder, value, onChange, autoComplete }: { label: string; type: string; placeholder: string; value: string; onChange: (value: string) => void; autoComplete: string }): React.JSX.Element {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium text-[#d7d3cc]">{label}</label>
      <input type={type} placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} autoComplete={autoComplete} required className="h-11 w-full rounded-lg border border-white/10 bg-[#111] px-3 text-sm transition-colors focus:border-[#f0a247]/60 focus:ring-2 focus:ring-[#f0a247]/10" />
    </div>
  );
}
