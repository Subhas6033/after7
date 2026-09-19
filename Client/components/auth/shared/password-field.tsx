"use client";
import { Eye, EyeOff, Lock } from "lucide-react";
import { useId, useState } from "react";
import { Input } from "@/components/ui/input";

type PasswordFieldProps = {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
  autoComplete?: string;
} & Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange" | "type" | "placeholder" | "autoComplete"
>;

export function PasswordField({
  value,
  onChange,
  label = "Password",
  placeholder = "Enter your password",
  autoComplete = "current-password",
  ...props
}: PasswordFieldProps) {
  const [visible, setVisible] = useState(false);
  const id = useId();

  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-xs font-medium text-after7-text">
        {label}{" "}
        <span className="text-after7-accent" aria-hidden="true">
          *
        </span>
      </label>

      <div className="relative">
        <Lock className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-after7-text-subtle" />

        <Input
          id={id}
          type={visible ? "text" : "password"}
          value={value}
          placeholder={placeholder}
          autoComplete={autoComplete}
          onChange={(event) => onChange(event.target.value)}
          className="h-11 px-10 text-sm"
          {...props}
        />

        <button
          type="button"
          onClick={() => setVisible((current) => !current)}
          className="
            absolute right-2 top-1/2
            flex size-7 -translate-y-1/2
            items-center justify-center
            rounded-md
            text-after7-text-subtle
            transition-colors
            hover:bg-after7-accent-soft
            hover:text-after7-text
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-after7-accent
          "
          aria-label={visible ? "Hide password" : "Show password"}
        >
          {visible ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
        </button>
      </div>
    </div>
  );
}
