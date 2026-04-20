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
  metadataBase: new URL("https://tanqhoang-portfolio.vercel.app"),
  openGraph: {
    title: "Tan Hoang — Full-Stack Engineer",
    description:
      "Junior Full-Stack Engineer building scalable enterprise systems with AI.",
    type: "website",
    locale: "en_US",
    url: "https://tanqhoang-portfolio.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tan Hoang — Full-Stack Engineer",
    description:
      "Junior Full-Stack Engineer building scalable enterprise systems with AI.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Tan Hoang",
  url: "https://tanqhoang-portfolio.vercel.app",
  email: "hoangquoctan.1996@gmail.com",
  jobTitle: "Junior Full-Stack Engineer",
  description:
    "Junior Full-Stack Engineer building scalable enterprise systems with AI. Aiming to become a Senior Enterprise Infrastructure Architect.",
  sameAs: [
    "https://github.com/tanhoang0803",
    "https://www.linkedin.com/in/tanqhoang080396/",
    "https://leetcode.com/u/tanhoang0803/",
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a href="#hero" className="skip-to-content">
          Skip to content
        </a>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
