import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

import {
  Fira_Code,
  Fira_Mono,
  Inconsolata,
  JetBrains_Mono,
  Noto_Sans,
  Oswald,
  Source_Code_Pro,
  Space_Mono,
} from "next/font/google";

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

const jetbrainsMono = Source_Code_Pro({
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
        className={`${jetbrainsMono.variable} ${oswald.variable} ${notoSans.variable} flex h-screen min-h-screen flex-col bg-slate-100`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
