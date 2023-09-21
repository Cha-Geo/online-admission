import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/*.{css,scss,sass}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: {
        primary: "var(--color-bg-primary)",
      },
      textColor: {
        primary: "var(--color-primary-foreground)",
        primary_foreground: "var(--color-primary-foreground)",
      },
      borderColor: {
        input: "var(--color-input)",
      },
    },
  },
  plugins: [],
};
export default config
