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
    <html lang="en" className="w-full">
      <body
        className={`${jetbrainsMono.variable} ${oswald.variable} ${notoSans.variable} flex h-screen min-h-screen w-screen flex-col bg-slate-100`}
      >
        <Navbar />
        {children}
        <footer className="hidden items-center justify-between border-t bg-white px-2 pb-1 pt-0.5 text-xs leading-none lg:flex ">
          <address className="">
            Webapp built by{" "}
            <a
              className="font-bold text-stone-800 no-underline"
              target="_blank"
              href="mailto:steven.saylor@pitt.edu"
            >
              Steve Saylor
            </a>{" "}
            at the{" "}
            <a
              className="text-stone-800 no-underline "
              target="_blank"
              href="https://ucsur.pitt.edu/"
            >
              University of Pittsburgh Center for Social and Urban Research
            </a>
          </address>

          <a
            className="text-stone-800 no-underline"
            target="_blank"
            href="https://github.com/WPRDC/pdl-social-media-policy-tracker"
          >
            See Source Code
          </a>
        </footer>
      </body>
    </html>
  );
}
