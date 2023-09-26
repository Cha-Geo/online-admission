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
        "btn-primary": "var(--btn_color_bg_primary)",
        "btn-secondary": "var(--btn_color_bg_secondary)",
        "btn-destructive": "var(--btn_color_bg_destructive)",
        "btn-outline": "var(--btn_color_bg_outline)",
        "btn-ghost": "var(--btn_color_bg_ghost)",
        "btn-link": "var(--btn_color_bg_link)",
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
