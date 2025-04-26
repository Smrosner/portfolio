import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { JSX, ReactNode } from "react";

import Navbar from "@/components/shared/Navbar";
import { ThemeProvider } from "@/context/ThemeContext";
import { theme } from "@/styles/theme";
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
    <html lang="en" className={`${inter.variable} dark`}>
      <head>
        <Script id="theme-script" strategy="beforeInteractive">
          {`
            try {
              if (localStorage.theme === 'light' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: light)').matches)) {
                document.documentElement.classList.remove('dark')
              } else {
                document.documentElement.classList.add('dark')
              }
            } catch (_) {}
          `}
        </Script>
      </head>
      <body
        className={`${inter.className} ${theme.colors.background} ${theme.colors.text.primary}`}
      >
        <ThemeProvider>
          <div className="min-h-screen">
            <Navbar />
            <div className="mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
