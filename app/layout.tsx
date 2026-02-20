import type { Metadata } from "next";
import { Geist, Geist_Mono , Space_Grotesk, Inter, Chivo, Mona_Sans} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const chivo = Chivo({
  subsets: ["latin"],
  variable: "--font-chivo",
});
const mona =Mona_Sans({
  subsets:["latin"],
  variable: "--font-Mona",
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
    
        className={`${geistSans.variable} ${space.variable} ${inter.variable} ${chivo.variable} ${mona.variable} ${geistMono.variable} antialiased bg-black`}>
      <body>
        {children}
      </body>
    </html>
  );
}


