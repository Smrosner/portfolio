import type { Metadata } from "next";
import { JSX } from "react";

import About from "@/components/About";
import { theme as themeStyles } from "@/styles/theme";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Shay Rosner, a senior full-stack software engineer focused on reliable, performant, and secure product delivery.",
};

export default function AboutPage(): JSX.Element {
  return (
    <div className={`min-h-screen ${themeStyles.gradients.primary}`}>
      <main className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-5xl py-28 md:py-32">
          <h1 className={themeStyles.typography.h1}>About</h1>
          <section id="about" className="mb-20">
            <About showHeading={false} />
          </section>
        </div>
      </main>
    </div>
  );
}
