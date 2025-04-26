import { JSX } from "react";

import { theme } from "@/styles/theme";

export default function ComingSoon(): JSX.Element {
  return (
    <div className={`min-h-screen ${theme.gradients.primary}`}>
      <main className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl py-32">
          <div className="text-center">
            <h2 className={theme.typography.h2}>Content Coming Soon</h2>
            <p className={`${theme.typography.body} opacity-90`}>
              Stay tuned for exciting content and updates.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
