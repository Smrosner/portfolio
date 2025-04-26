import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { JSX, ReactNode } from "react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Your Name - Portfolio",
  description: "Personal portfolio and resume",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>): JSX.Element {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className}`}>
        <div className="mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
      </body>
    </html>
  );
}
