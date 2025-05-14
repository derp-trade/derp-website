import type { Metadata } from "next";
import { Inter, Spline_Sans } from "next/font/google";
import type React from "react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Load Spline Sans for headers
const splineSans = Spline_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-spline"
});

export const metadata: Metadata = {
  title: {
    default: "derp.trade | Leverage Any Asset On-Chain",
    template: "%s | derp.trade",
  },
  description:
    "Trade any asset with leverage using DERPs - the first perpetual trading protocol designed for assets without high volume or liquidity.",
  openGraph: {
    type: "website",
    title: "derp.trade | Leverage Any Asset On-Chain",
    siteName: "derp.trade",
    images: {
      url: "/images/og1.png",
      width: 1200,
      height: 630,
    },
    locale: "en_US",
  },
  twitter: {
    title: "derp.trade | Leverage Any Asset On-Chain",
    description: "Trade any asset with leverage using DERPs - the first perpetual trading protocol designed for assets without high volume or liquidity.",
    site: "@derp_trade",
    card: "summary_large_image",
    images: "/images/og1.png",
  },
  metadataBase: new URL("https://derp.trade/"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${splineSans.variable} font-sans`}>{children}</body>
    </html>
  );
}
