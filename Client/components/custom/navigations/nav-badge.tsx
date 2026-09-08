type NavBadgeProps = {
  count: number;
  compact?: boolean;
};

export function NavBadge({ count, compact = false }: NavBadgeProps) {
  if (compact) {
    return (
      <span
        aria-label={`${count} unread`}
        className="absolute right-1 top-1 size-1.5 rounded-full bg-after7-accent"
      />
    );
  }

  return (
    <span
      aria-label={`${count} unread`}
      className="ml-auto flex min-w-4 items-center justify-center rounded-full bg-after7-accent px-1 text-[9px] font-bold leading-4 text-after7-accent-foreground"
    >
      {count > 9 ? "9+" : count}
    </span>
  );
}
