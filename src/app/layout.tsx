import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tan Hoang — Full-Stack Engineer",
  description:
    "Junior Full-Stack Engineer building scalable enterprise systems with AI. Aiming to become a Senior Enterprise Infrastructure Architect.",
  keywords: [
    "Full-Stack Engineer",
    "Next.js",
    "TypeScript",
    "React",
    "NestJS",
    "Enterprise Architecture",
    "AI",
    "SaaS",
  ],
  authors: [{ name: "Tan Hoang", url: "https://github.com/tanhoang0803" }],
  openGraph: {
    title: "Tan Hoang — Full-Stack Engineer",
    description:
      "Junior Full-Stack Engineer building scalable enterprise systems with AI.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tan Hoang — Full-Stack Engineer",
    description:
      "Junior Full-Stack Engineer building scalable enterprise systems with AI.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0a] text-[#f9fafb]`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
