import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nexura Solutions",
  description: "One Nexus. Endless Solutions",
  generator: "Nexura",
  icons: {
    icon: [
      {
        url: "/nexura-removebg-preview.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/nexura-removebg-preview.png",
        sizes: "64x64",
        type: "image/png",
      },
      {
        url: "/nexura-removebg-preview.png",
        sizes: "128x128",
        type: "image/png",
      },
    ],
    apple: "/nexura-removebg-preview.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className={`dark ${GeistSans.className}`}>{children}</body>
    </html>
  );
}
