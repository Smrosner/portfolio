export const theme = {
  colors: {
    primary: "text-gray-900 dark:text-white",
    secondary: "text-gray-600 dark:text-gray-300",
    background: "bg-white dark:bg-gray-900",
    surface: "bg-gray-50 dark:bg-gray-800",
    text: {
      primary: "text-gray-900 dark:text-white",
      secondary: "text-gray-600 dark:text-gray-300",
      muted: "text-gray-500 dark:text-gray-400",
    },
    border: "border-gray-200 dark:border-gray-700",
    accent: {
      blue: "text-blue-500 dark:text-blue-400",
      purple: "text-purple-500 dark:text-purple-400",
      teal: "text-teal-500 dark:text-teal-400",
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
    h1: "text-6xl font-bold tracking-tight leading-none mb-8",
    h2: "text-4xl font-bold tracking-tight mb-8",
    h3: "text-2xl font-bold tracking-tight mb-6",
    body: "text-lg leading-relaxed",
    small: "text-base opacity-90",
    link: "text-blue-400 hover:text-blue-300 transition-colors duration-200",
  },
  layout: {
    container: {
      sm: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
      lg: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
    },
    section: {
      sm: "py-16 md:py-24",
      lg: "py-24 md:py-32",
    },
    content: "space-y-8",
    grid: "grid gap-6 md:gap-8",
    flexCenter: "flex items-center justify-center",
    flexBetween: "flex items-center justify-between",
  },
  gradients: {
    primary:
      "bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black",
    card: "bg-gradient-to-br from-white to-gray-50 dark:from-gray-800/50 dark:to-gray-900/50",
    accent:
      "bg-gradient-to-br from-teal-400 to-blue-500 dark:from-teal-500 dark:to-blue-600",
  },
  components: {
    card: "rounded-lg p-6 md:p-8 shadow-lg border border-gray-200 hover:border-gray-300 dark:border-gray-700 dark:hover:border-gray-600 transition-colors duration-200",
    button:
      "px-6 py-3 rounded-lg bg-gray-900 text-white hover:bg-gray-800 dark:bg-white/10 dark:hover:bg-white/20 transition-colors duration-200",
    nav: "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-200",
    input:
      "rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent",
  },
  effects: {
    hover: "hover:scale-105 transition-transform duration-200",
    glow: "hover:shadow-lg hover:shadow-blue-500/10 dark:hover:shadow-blue-500/20 transition-shadow duration-200",
    glass: "backdrop-blur-sm bg-white/80 dark:bg-black/50",
  },
} as const;
