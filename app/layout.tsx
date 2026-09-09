import type { Metadata } from "next";
import { Barlow } from "next/font/google";

import "./globals.css";
import { site } from "@/lib/site";

const barlow = Barlow({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-barlow",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),

  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },

  description: site.description,

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: site.name,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
    images: [
      {
        url: "/media/hero-poster.svg",
        width: 1200,
        height: 630,
        alt: site.name,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: ["/media/hero-poster.svg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={barlow.variable}>
      <body>{children}</body>
    </html>
  );
}