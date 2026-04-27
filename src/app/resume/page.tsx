import type { Metadata } from "next";
import { type JSX } from "react";

import Resume from "@/components/Resume";
import { theme } from "@/styles/theme";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume for Shay Rosner, senior full-stack software engineer specializing in React, Next.js, TypeScript, APIs, performance, and secure systems.",
};

export default function ResumePage(): JSX.Element {
  return (
    <main className={`min-h-screen ${theme.gradients.primary}`}>
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8 md:py-32">
        <Resume />
      </div>
    </main>
  );
}
