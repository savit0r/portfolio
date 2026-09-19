import type { Metadata } from "next";
import { Geist, Geist_Mono, Newsreader, Caveat } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rohit | Software Developer",
  description:
    "Software Developer & Problem Solver. Passionate about building impactful products with clean code and elegant design.",
  keywords: [
    "software developer",
    "web developer",
    "portfolio",
    "React",
    "Next.js",
    "Java",
    "full-stack",
  ],
  authors: [{ name: "Rohit" }],
  openGraph: {
    title: "Rohit | Software Developer",
    description:
      "Software Developer & Problem Solver. Passionate about building impactful products with clean code and elegant design.",
    type: "website",
    locale: "en_US",
    siteName: "Rohit Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rohit | Software Developer",
    description:
      "Software Developer & Problem Solver. Passionate about building impactful products.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable} ${caveat.variable} antialiased`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
