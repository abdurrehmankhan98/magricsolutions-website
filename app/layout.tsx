import type { Metadata } from "next";
import { Inter, Jost, Lato } from "next/font/google";
import "./globals.css";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const interTight = Inter({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Web & App Development Agency | MagricSolutions",
  description:
    "MagricSolutions is a top web and app development agency, offering custom website design and mobile app development. Hire Next.js, React, and full-stack developers.",
  keywords: [
    "web development",
    "website design",
    "app development",
    "mobile app development",
    "frontend developer",
    "UI/UX designer",
    "custom website design",
    "Next.js developer",
    "React developer",
    "Vue developer",
    "JavaScript developer",
    "modern web app development",
    "full-stack development",
    "SEO-optimized website",
    "high-conversion landing pages",
    "business website development",
    "personal brand website development",
    "best web development agency in Pakistan",
    "hire Next.js developer",
    "hire React developer",
    "professional website design services",
    "affordable website development for small businesses",
    "portfolio website for creators",
    "custom web application development",
  ],
  openGraph: {
    title: "Top-Tier Web & App Development | MagricSolutions",
    description:
      "From custom website design to modern mobile app development, MagricSolutions delivers high-performance, SEO-optimized digital solutions. Serving clients in Pakistan and beyond.",
    url: "https://magricsolutions.com",
    siteName: "MagricSolutions",
    images: [
      {
        url: "/og-image.jpg", // Ensure you have this image in your /public folder
        width: 1200,
        height: 630,
        alt: "MagricSolutions – Web and App Development Agency",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web & App Development Agency | MagricSolutions",
    description:
      "Expert web and app development services. We build high-conversion, SEO-optimized websites and mobile apps using Next.js, React, and more.",
    images: ["/og-image.jpg"], // Ensure you have this image in your /public folder
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://magricsolutions.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jost.variable} ${interTight.variable} ${lato.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
