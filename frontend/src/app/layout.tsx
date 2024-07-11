import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

import { Inconsolata, Noto_Sans, Oswald } from "next/font/google";

export const metadata: Metadata = {
  title: "Social Media Election Policies Tracker - Pitt Cyber ",
  description: "A timeline of major social media policy changes.",
};

const notoSans = Noto_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans",
});

const oswald = Oswald({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-oswald",
});

const jetbrainsMono = Inconsolata({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono.variable} ${oswald.variable} ${notoSans.variable} flex min-h-screen flex-col bg-white`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
