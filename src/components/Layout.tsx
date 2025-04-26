import { JSX, ReactNode } from "react";

import { theme } from "@/styles/theme";

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

export default function Layout({
  children,
  className = "",
}: LayoutProps): JSX.Element {
  return (
    <div className={`min-h-screen ${theme.gradients.primary}`}>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 ${theme.effects.glass} ${theme.colors.border}`}
      >
        <div
          className={`${theme.layout.container.lg} h-20 flex items-center justify-between`}
        >
          <a href="#" className="text-2xl font-bold">
            SR
          </a>
          <div className="flex items-center gap-8">
            {/* Nav content will go here */}
          </div>
        </div>
      </nav>
      <main className={`${theme.layout.container.lg} py-32 ${className}`}>
        <div className="max-w-4xl">{children}</div>
      </main>
    </div>
  );
}
