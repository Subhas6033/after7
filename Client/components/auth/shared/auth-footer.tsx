type AuthFooterProps = {
  question: string;
  linkText: string;
  href: string;
};

export function AuthFooter({ question, linkText, href }: AuthFooterProps) {
  return (
    <div className="mt-4 text-center">
      <p className="text-sm text-after7-text-muted">{question}</p>

      <a
        href={href}
        className="mt-1 inline-block text-sm text-after7-accent transition-colors hover:text-after7-accent-hover"
      >
        {linkText}
      </a>
    </div>
  );
}
