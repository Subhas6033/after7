import type { Metadata } from "next";

export const SITE_URL = "https://after7-app.vercel.app";

export const SITE_NAME = "After7";

export const SITE_TITLE =
  "After7 — Anonymous Q&A, Random Matching & Meaningful Connections";

export const SITE_DESCRIPTION =
  "After7 is a privacy-focused social platform for young people. Meet new friends through random matching, share anonymous questions, chat securely, and build genuine connections over a 7-day trust period with voice & video calling.";

export const SEO_KEYWORDS = [
  "After7",
  "social platform",
  "meaningful connections",
  "make new friends",
  "anonymous questions",
  "anonymous Q&A",
  "random user matching",
  "social networking",
  "real-time messaging",
  "youth social platform",
  "privacy-focused social",
  "secure chat app",
  "friendship building",
  "7-day trust period",
  "voice calling app",
  "video calling app",
  "authentic conversations",
  "online community",
  "friend discovery",
  "private messaging app",
];

export const DEFAULT_METADATA: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: SITE_TITLE,
    template: "%s | After7",
  },

  description: SITE_DESCRIPTION,

  applicationName: SITE_NAME,

  authors: [
    {
      name: SITE_NAME,
      url: SITE_URL,
    },
  ],

  creator: "Subhas",
  publisher: "Subhas",

  keywords: SEO_KEYWORDS,

  robots: {
    index: true,
    follow: true,
    nocache: false,

    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: SITE_URL,

    languages: {
      "en-US": SITE_URL,
      en: SITE_URL,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,

    title: SITE_TITLE,

    description:
      "A privacy-conscious social platform for young people. Connect through anonymous Q&A, random matching, secure real-time messaging, and build genuine friendships with voice & video calling.",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "After7 — Build Meaningful Connections Through Anonymous Interaction",
        type: "image/png",
      },
      {
        url: "/og-image-square.png",
        width: 800,
        height: 800,
        alt: "After7 Social Platform Logo",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: SITE_TITLE,

    description:
      "Privacy-focused social platform. Meet people through random matching, share anonymous questions, chat securely, and build genuine connections.",

    images: ["/og-image.png"],

    creator: "@After7",
  },

  verification: {
    google: "google-site-verification-code",
  },

  category: "Social Networking",

  referrer: "strict-origin-when-cross-origin",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: SITE_NAME,
  },

  manifest: "/manifest.json",

  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: "#ffffff",
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: "#000000",
    },
  ],

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],

    apple: "/apple-touch-icon.png",
  },
};

export const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",

  name: SITE_NAME,

  applicationCategory: "SocialNetworkingApplication",

  url: SITE_URL,

  image: `${SITE_URL}/og-image.png`,

  description:
    "A privacy-focused social platform for young people featuring anonymous Q&A, random matching, secure messaging, and voice/video calling.",

  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },

  author: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  },

  publisher: {
    "@type": "Organization",
    name: SITE_NAME,

    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.png`,
    },
  },

  featureList: [
    "Anonymous Q&A",
    "Random User Matching",
    "Real-time Private Messaging",
    "Voice Calling",
    "Video Calling",
    "Friend Requests",
    "Profile Management",
    "Media Sharing",
    "7-day Trust Period",
    "Secure Authentication",
  ],

  operatingSystem: ["Windows", "macOS", "Linux", "Android", "iOS"],

  inLanguage: "en-US",
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",

  name: SITE_NAME,

  url: SITE_URL,

  logo: `${SITE_URL}/logo.png`,

  description:
    "A privacy-focused youth social platform for authentic connections, anonymous Q&A, and secure real-time communication.",

  sameAs: [
    "https://twitter.com/After7",
    "https://instagram.com/After7",
    "https://github.com/after7",
  ],

  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    email: "support@after7-app.vercel.app",
    url: `${SITE_URL}/support`,
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",

  name: SITE_NAME,

  url: SITE_URL,

  inLanguage: "en-US",
};
