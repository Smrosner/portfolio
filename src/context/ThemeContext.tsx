"use client";

import {
  ThemeProvider as NextThemesProvider,
  useTheme as useNextTheme,
} from "next-themes";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type JSX,
  type ReactNode,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  mounted: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      <ThemeContextWrapper>{children}</ThemeContextWrapper>
    </NextThemesProvider>
  );
}

function ThemeContextWrapper({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const { setTheme, resolvedTheme } = useNextTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by only rendering theme-dependent UI after mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = (): void => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  const currentTheme = (mounted ? resolvedTheme : "dark") as Theme;

  return (
    <ThemeContext.Provider
      value={{ theme: currentTheme, toggleTheme, mounted }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
