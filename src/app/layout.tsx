import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import Background from "@/old-components/Background";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zubaa Media - Build a Social Media Presence That Actually Works for Your Business",
  description: "Zubaa Media is a full-service virtual business partner for creators, coaches, consultants, and digital-first brands. We architect, install, and optimize the systems that allow creators and experts to scale beyond algorithms, launch dependency, and audience saturation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <Background/> */}
        {children}
      </body>
    </html>
  );
}
