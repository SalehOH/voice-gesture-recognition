import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ParentProvider from "./ParentWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WaveTalk",
  description: "WaveTalk is a voice controlled social media platform. It allows you to create and read posts using only your voice!. Use Your hands to scroll through the posts!.",
};

export default function RootLayout({children,}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " flex flex-col min-h-[100 svh] scroll-smooth"}>
        <ParentProvider>
          {children}
        </ParentProvider>
      </body>
    </html>
  );
}
