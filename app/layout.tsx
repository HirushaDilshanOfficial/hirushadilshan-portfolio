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
  title: "Hirusha Dilshan",
  description:
    "IT Undergraduate at SLIIT | DevOps Enthusiast specializing in scalable cloud architecture and robust infrastructure.",
  keywords: [
    "Hirusha Dilshan",
    "Undergraduate",
    "SLIIT",
    "DevOps",
    "IT Student",
  ],
  authors: [{ name: "Hirusha Dilshan" }],
  openGraph: {
    title: "Hirusha Dilshan",
    description:
      "IT Undergraduate at SLIIT | DevOps Enthusiast",
    type: "website",
  },
};

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
      </body>
    </html>
  );
}
