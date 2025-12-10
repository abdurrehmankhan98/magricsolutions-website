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
  title:
    "Personal Brand Website Design | High-Conversion Websites for Coaches & Creators",
  description:
    "MagricSolutions builds high-conversion personal brand websites for Coaches, CEOs, Creators, and Consultants. Modern, SEO-optimized websites designed to build trust, clarity, and consistent client growth.",
  keywords: [
    "personal brand website",
    "website design for coaches",
    "creator website design",
    "high converting website",
    "web design agency",
    "SEO friendly websites",
    "coach website designer",
    "personal brand web development",
  ],
  openGraph: {
    title:
      "Personal Brand Website Design | High-Conversion Websites for Coaches & Creators",
    description:
      "Get a premium, SEO-optimized personal brand website designed to convert your audience into clients. Made for Coaches, CEOs, Creators & Consultants.",
    url: "https://magricsolutions.com",
    siteName: "MagricSolutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MagricSolutions – Personal Brand Website Design",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Personal Brand Website Design | High-Conversion Websites for Coaches & Creators",
    description:
      "Premium personal brand websites crafted to convert. Perfect for Coaches, CEOs, Creators & Consultants.",
    images: ["/og-image.jpg"],
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
