import type { Metadata } from "next";
import Script from "next/script";
import { JSX, ReactNode } from "react";

import Navbar from "@/components/shared/Navbar";
import { ThemeProvider } from "@/context/ThemeContext";
import { theme } from "@/styles/theme";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://shayrosner.com"),
  title: {
    default: "Shay Rosner | Senior Full-Stack Software Engineer",
    template: "%s | Shay Rosner",
  },
  description:
    "Senior full-stack software engineer specializing in React, Next.js, TypeScript, API design, performance, security-sensitive systems, and reliable product delivery.",
  openGraph: {
    title: "Shay Rosner | Senior Full-Stack Software Engineer",
    description:
      "Portfolio, project case studies, resume, and technical writing from Shay Rosner.",
    url: "https://shayrosner.com",
    siteName: "Shay Rosner Portfolio",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>): JSX.Element {
  return (
    <html lang="en" className="dark">
      <head>
        <Script id="theme-script" strategy="beforeInteractive">
          {`
            try {
              if (localStorage.theme === 'light') {
                document.documentElement.classList.remove('dark')
              } else {
                document.documentElement.classList.add('dark')
              }
            } catch (_) {}
          `}
        </Script>
      </head>
      <body
        className={`${theme.colors.background} ${theme.colors.text.primary} antialiased`}
      >
        <ThemeProvider>
          <div className="min-h-screen">
            <Navbar />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
