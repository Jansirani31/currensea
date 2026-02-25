import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Space_Grotesk,
  Inter,
  Chivo,
  Mona_Sans,
  Urbanist,
} from "next/font/google";
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

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-urbanist",
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
  title: "CurrenSea",
  description:
    "CurrenSea intelligently aggregates liquidity from trusted OTC desks to deliver best-price execution with reduced slippage.",
  openGraph: {
    title: "CurrenSea",
    description: "Next Gen OTC Liquidity Aggregation Platform",
    url: "https://www.currensea.in/",
    siteName: "CurrenSea",
    images: [
      {
        url: "https://www.currensea.in/images/logo-s.png",
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
    images: ["https://www.currensea.in/images/logo-s.png"],
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
        ${geistMono.variable} antialiased font-sans
      `}
    >
      <body className="overflow-x-hidden min-h-screen">{children}</body>
    </html>
  );
}
