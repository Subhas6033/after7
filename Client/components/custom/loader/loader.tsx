import LoaderPage from "@/components/custom/loader/LoaderPage";

export default function LoaderRoute(): React.JSX.Element {
  return (
    <LoaderPage
      title="Finding your next genuine connection"
      description="Taking a moment to find someone who matches your pace."
      progressLabel="Preparing your experience"
      progress={64}
      footer="You can keep this tab open"
      status="Secure session"
    />
  );
}
