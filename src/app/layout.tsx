import type React from "react";
import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import "./globals.css";

const pixelFont = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Derps - Leverage Any Token",
  description:
    "Derps are a new asset class designed to bring perps trading to tokens without exceptionally high volume and liquidity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={pixelFont.className}>
        {children}
      </body>
    </html>
  );
}
