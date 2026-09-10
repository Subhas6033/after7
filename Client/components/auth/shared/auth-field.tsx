import type { ReactNode } from "react";

type AuthFieldProps = {
  label: string;
  children: ReactNode;
};

export function AuthField({ label, children }: AuthFieldProps) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-after7-text">
        {label}
      </span>

      {children}
    </label>
  );
}
