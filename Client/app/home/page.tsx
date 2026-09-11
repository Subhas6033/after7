"use client";
import React, { useState, useEffect } from "react";
import LoaderPage from "@/components/custom/loader/LoaderPage";
import { loaderPresets } from "@/components/custom/loader/loader-presets";

export default function Home(): React.JSX.Element {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (showLoader) {
    return <LoaderPage {...loaderPresets.matching} progress={64} />;
  }

  return (
    <div className="flex min-h-screen items-center justify-center text-2xl">
      Home page
    </div>
  );
}
