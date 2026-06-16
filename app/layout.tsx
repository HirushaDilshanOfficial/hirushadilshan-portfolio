import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hirushadilshan.com"),
  title: "Hirusha Dilshan | IT Undergraduate & DevOps Enthusiast",
  description:
    "Portfolio of Hirusha Dilshan, an IT Undergraduate at SLIIT specializing in scalable cloud architecture, DevOps, and robust infrastructure.",
  keywords: [
    "Hirusha Dilshan",
    "Hirusha",
    "Dilshan",
    "Portfolio",
    "SLIIT",
    "DevOps",
    "Software Engineering",
    "IT Undergraduate",
    "Sri Lanka",
    "Cloud Architecture"
  ],
  authors: [{ name: "Hirusha Dilshan" }],
  creator: "Hirusha Dilshan",
  openGraph: {
    title: "Hirusha Dilshan | Portfolio",
    description: "IT Undergraduate at SLIIT | DevOps Enthusiast building scalable infrastructure.",
    url: "https://hirushadilshan.com", // Replace with actual domain when hosting
    siteName: "Hirusha Dilshan Portfolio",
    images: [
      {
        url: "/profileImage.jpeg", 
        width: 1200,
        height: 630,
        alt: "Hirusha Dilshan - Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hirusha Dilshan | Portfolio",
    description: "IT Undergraduate at SLIIT | DevOps Enthusiast building scalable infrastructure.",
    creator: "@hirushadilshan",
    images: ["/profileImage.jpeg"], 
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${syne.variable} bg-[#020817] text-slate-100 antialiased`}
      >
        {children}
        <Analytics />
        <GoogleAnalytics gaId="G-FBNND5WGHM" />
      </body>
    </html>
  );
}
