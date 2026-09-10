import { cn } from "@/lib/utils";

type AuthShellProps = {
  children: React.ReactNode;
  className?: string;
};

export function AuthShell({ children, className }: AuthShellProps) {
  return (
    <main
      className={cn(
        "min-h-svh w-full px-5 py-8 sm:px-6 md:flex md:items-center md:justify-center",
        className,
      )}
    >
      <div className="w-full max-w-105">{children}</div>
    </main>
  );
}
