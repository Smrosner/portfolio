export const theme = {
  colors: {
    primary: "text-zinc-900 dark:text-zinc-100",
    secondary: "text-zinc-700 dark:text-zinc-300",
    background: "bg-zinc-50 dark:bg-black",
    surface: "bg-white dark:bg-zinc-900",
    text: {
      primary: "text-zinc-900 dark:text-zinc-100",
      secondary: "text-zinc-700 dark:text-zinc-300",
      muted: "text-zinc-500 dark:text-zinc-400",
    },
    border: "border-zinc-200 dark:border-zinc-800",
    accent: {
      blue: "border border-cyan-500/40 text-cyan-700 dark:text-cyan-300 dark:border-cyan-400/50 bg-cyan-500/5 dark:bg-cyan-500/10 hover:bg-cyan-500/15",
      purple: "text-fuchsia-600 dark:text-fuchsia-300",
      teal: "text-teal-700 dark:text-teal-300",
    },
  },
  spacing: {
    xs: "0.5rem",
    sm: "1rem",
    md: "1.5rem",
    lg: "2rem",
    xl: "3rem",
    "2xl": "4rem",
    "3xl": "6rem",
    section: "6rem",
    container: "max-w-4xl mx-auto px-6 md:px-8",
  },
  typography: {
    h1: "text-4xl md:text-6xl font-semibold leading-tight mb-8",
    h2: "text-3xl md:text-4xl font-semibold mb-8",
    h3: "text-xl md:text-2xl font-semibold mb-6",
    body: "text-lg leading-relaxed text-zinc-700 dark:text-zinc-300",
    small: "text-base opacity-90",
    link: "text-cyan-700 dark:text-cyan-300 hover:text-cyan-600 dark:hover:text-cyan-200 transition-colors duration-200",
  },
  layout: {
    container: {
      sm: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
      lg: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
    },
    section: {
      sm: "py-16 md:py-12",
      lg: "py-24 md:py-24",
    },
    content: "space-y-8",
    grid: "grid gap-6 md:gap-8",
    flexCenter: "flex items-center justify-center",
    flexBetween: "flex items-center justify-between",
  },
  gradients: {
    primary: "bg-zinc-100 dark:bg-black",
    card: "bg-white/95 dark:bg-zinc-900/70",
    accent: "bg-cyan-500 dark:bg-cyan-500",
  },
  components: {
    card: "rounded-lg p-7 md:p-10 shadow-md dark:shadow-[0_18px_45px_rgba(0,0,0,0.42)] ring-1 ring-zinc-200/70 dark:ring-zinc-800/70 transition-all duration-250",
    button:
      "px-6 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white/80 dark:bg-zinc-900/70 text-zinc-900 dark:text-zinc-100 hover:border-cyan-400/50 hover:text-cyan-700 dark:hover:text-cyan-200 hover:bg-cyan-500/5 dark:hover:bg-cyan-500/10 transition-colors duration-200",
    nav: "text-zinc-700 hover:text-cyan-700 dark:text-zinc-300 dark:hover:text-cyan-300 transition-colors duration-200",
    input:
      "rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-4 py-2 focus:ring-2 focus:ring-cyan-400 focus:border-transparent",
  },
  effects: {
    hover:
      "hover:-translate-y-0.5 hover:scale-[1.005] transition-transform duration-100",
    glow: "hover:shadow-xl hover:shadow-cyan-500/12 dark:hover:shadow-cyan-400/20 transition-shadow duration-200",
    glass: "backdrop-blur-sm bg-zinc-50/80 dark:bg-black/70",
  },
} as const;
