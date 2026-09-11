import type { LoaderPageProps } from "./LoaderPage";

export const loaderPresets = {
  matching: {
    title: "Finding your next genuine connection",
    description: "Taking a moment to find someone who matches your pace.",
    progressLabel: "Preparing your experience",
    footer: "You can keep this tab open",
  },

  profile: {
    title: "Preparing your profile",
    description: "Putting everything together for your After7 experience.",
    progressLabel: "Building your profile",
    footer: "Almost there",
  },

  discover: {
    title: "Finding people worth meeting",
    description: "We're discovering connections that fit your preferences.",
    progressLabel: "Preparing discover",
    footer: "This should only take a moment",
  },

  session: {
    title: "Securing your session",
    description: "We're safely preparing your After7 experience.",
    progressLabel: "Authenticating",
    footer: "Please keep this tab open",
    status: "Secure session",
  },
} satisfies Record<string, Partial<LoaderPageProps>>;
