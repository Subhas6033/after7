import React from "react";
import type { Metadata } from "next";
import { LoginForm } from "@/components/auth/login/login-form";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Log in",
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  alternates: {
    canonical: `${SITE_URL}/login`,
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function LoginPage(): React.JSX.Element {
  return <LoginForm />;
}
