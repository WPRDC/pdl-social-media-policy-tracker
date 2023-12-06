import "./globals.css";
import type { Metadata } from "next";
import { cooper, jetbrainsMono, openSans, rubik } from "@/lib/fonts";
import Navbar from "@/components/Navbar";
import { SSRProvider } from "@/components/client-components";

export const metadata: Metadata = {
  title: "Social Media Policy Tracker - Pitt Cyber ",
  description: "A timeline of major social media policy changes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SSRProvider>
      <html lang="en">
        <body
          className={`${jetbrainsMono.variable} ${openSans.variable}  ${cooper.variable} ${rubik.variable} flex min-h-screen flex-col bg-white`}
        >
          <Navbar />
          {children}
        </body>
      </html>
    </SSRProvider>
  );
}
