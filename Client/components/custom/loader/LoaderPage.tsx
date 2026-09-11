"use client";
import { LoaderHeader } from "./LoaderHeader";
import { LoaderIndicator } from "./LoaderIndicator";
import { LoaderMessage } from "./LoaderMessage";
import { LoaderProgress } from "./LoaderProgress";

export type LoaderPageProps = {
  status?: string;
  title?: string;
  description?: string;
  progressLabel?: string;
  progress?: number;
  footer?: string;
  showProgress?: boolean;
  showStatus?: boolean;
  className?: string;
};

const DEFAULTS = {
  status: "Secure session",
  title: "Finding your next genuine connection",
  description: "Taking a moment to find someone who matches your pace.",
  progressLabel: "Preparing your experience",
  progress: 64,
  footer: "You can keep this tab open",
} as const;

const LoaderPage = ({
  status = DEFAULTS.status,
  title = DEFAULTS.title,
  description = DEFAULTS.description,
  progressLabel = DEFAULTS.progressLabel,
  progress = DEFAULTS.progress,
  footer = DEFAULTS.footer,
  showProgress = true,
  showStatus = true,
  className,
}: LoaderPageProps): React.JSX.Element => {
  return (
    <div
      className={[
        "fixed inset-0 z-9999 min-h-screen overflow-hidden bg-background text-foreground",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="relative flex min-h-screen w-full flex-col">
        <LoaderHeader status={status} showStatus={showStatus} />

        <main className="flex min-h-0 flex-1 items-center justify-center px-6 pb-12">
          <div className="w-full max-w-sm">
            <LoaderIndicator />

            <LoaderMessage title={title} description={description} />

            {showProgress && (
              <LoaderProgress
                label={progressLabel}
                progress={progress}
                footer={footer}
              />
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default LoaderPage;
