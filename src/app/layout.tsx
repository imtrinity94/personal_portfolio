import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { portfolioData } from "@/data/portfolio";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: portfolioData.personal.name + " | " + portfolioData.personal.role,
  description: portfolioData.personal.summary,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
