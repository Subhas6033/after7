import type { Metadata } from "next";
import { SignupFlow } from "@/components/auth/signup/signup-flow";
import {
  SITE_URL,
  SITE_NAME,
  softwareApplicationSchema,
  organizationSchema,
  websiteSchema,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: `Create Your Account | ${SITE_NAME}`,

  description:
    "Create your After7 account and start meeting new people through meaningful conversations, anonymous Q&A, random matching, and secure messaging.",

  alternates: {
    canonical: `${SITE_URL}/signup`,
  },

  openGraph: {
    title: `Create Your Account | ${SITE_NAME}`,

    description:
      "Create your After7 account and start meeting new people through meaningful conversations and genuine connections.",

    url: `${SITE_URL}/signup`,

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "After7 — Create your account",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: `Create Your Account | ${SITE_NAME}`,

    description:
      "Create your After7 account and start building meaningful connections.",

    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const signupPageSchema = {
  "@context": "https://schema.org",

  "@type": "WebPage",

  name: `Create Your Account | ${SITE_NAME}`,

  url: `${SITE_URL}/signup`,

  description:
    "Create your After7 account and start meeting new people through meaningful conversations.",

  isPartOf: {
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
  },
};

export default function SignupPage(): React.JSX.Element {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(signupPageSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />

      <SignupFlow />
    </>
  );
}
