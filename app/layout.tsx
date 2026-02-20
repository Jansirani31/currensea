import type { Metadata } from "next";
import { Geist, Geist_Mono,Space_Grotesk, Inter,Chivo,Mona_Sans, } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const chivo = Chivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-chivo",
});

const mona = Mona_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mona",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),

  title: {
    default: "CurrenSea",
    template: "%s | CurrenSea",
  },

  description:
    "CurrenSea intelligently aggregates liquidity from trusted OTC desks to deliver best-price execution with reduced slippage.",

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "CurrenSea",
    description:
      "Next Gen OTC Liquidity Aggregation Platform",
    url: "/",
    siteName: "CurrenSea",
    images: [
      {
        url: "/logo-s.png",
        width: 1200,
        height: 630,
        alt: "CurrenSea",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "CurrenSea",
    description: "Next Gen OTC Liquidity Aggregation Platform",
    images: ["/logo-s.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`
        ${spaceGrotesk.variable}
        ${inter.variable}
        ${chivo.variable}
        ${mona.variable}
        ${geistSans.variable} 
        ${geistMono.variable} antialiased font-sans`}
    >
      {/* default font */}
      <body>
        {children}
      </body>
    </html>
  );
}


