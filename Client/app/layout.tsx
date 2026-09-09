import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteChrome } from "@/components/custom/site-chrome";
import { SEO } from "@/components/custom/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://after7-app.vercel.app"),

  title: {
    default: "After7 — Anonymous Q&A, Random Matching & Meaningful Connections",
    template: "%s | After7",
  },

  description:
    "After7 is a privacy-focused social platform for young people. Meet new friends through random matching, share anonymous questions, chat securely, and build genuine connections over a 7-day trust period with voice & video calling.",

  applicationName: "After7",

  authors: [
    {
      name: "After7",
      url: "https://after7-app.vercel.app",
    },
  ],

  creator: "Subhas",
  publisher: "Subhas",

  keywords: [
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
  ],

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
    canonical: "https://after7-app.vercel.app",

    languages: {
      "en-US": "https://after7-app.vercel.app",
      en: "https://after7-app.vercel.app",
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://after7-app.vercel.app",
    siteName: "After7",

    title: "After7 — Anonymous Q&A, Random Matching & Meaningful Connections",

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

    title: "After7 — Anonymous Q&A, Random Matching & Meaningful Connections",

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
    title: "After7",
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

  other: {
    "og:type": "website",
    "og:locale": "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Structured Data */}
        <SEO />

        {/* Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Social image metadata */}
        <meta property="og:image:alt" content="After7 Social Platform" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        {/* Security */}
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        {/* Additional metadata */}
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="color-scheme" content="light dark" />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      </head>

      <body className="min-h-full flex flex-col">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
