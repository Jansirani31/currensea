import type { Metadata } from "next";
import {
  Space_Grotesk,
  Inter,
  Chivo,
  Mona_Sans,
} from "next/font/google";
import "./globals.css";

const space = Space_Grotesk({
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
  title: "CurrenSea",
  description: "Next Gen OTC Aggregation",
  icons: {
    icon: "/favicon.ico",
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
        ${space.variable}
        ${inter.variable}
        ${chivo.variable}
        ${mona.variable}
        antialiased font-Space_Grotesk`}
    >
      {/* default font */}
      <body>
        {children}
      </body>
    </html>
  );
}


