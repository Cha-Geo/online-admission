import type { Config } from 'tailwindcss'
const plugin = require('tailwindcss/plugin');

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      minHeight: {
        "screen-75": "75vh",
      },
      backgroundColor: {
        "btn-primary": "var(--btn_color_bg_primary)",
        "btn-secondary": "var(--btn_color_bg_secondary)",
        "btn-destructive": "var(--btn_color_bg_destructive)",
        "btn-outline": "var(--btn_color_bg_outline)",
        "btn-ghost": "var(--btn_color_bg_ghost)",
        "btn-link": "var(--btn_color_bg_link)",
      },
      fontSize: {
        55: "55rem",
      },
      opacity: {
        80: ".8",
      },


      height: {
        "95-px": "95px",
        "70-px": "70px",
        "350-px": "350px",
        "500-px": "500px",
        "600-px": "600px",
      },


      maxHeight: {
        "860-px": "860px",
      },


      maxWidth: {
        "100-px": "100px",
        "120-px": "120px",
        "150-px": "150px",
        "180-px": "180px",
        "200-px": "200px",
        "210-px": "210px",
        "580-px": "580px",
      },

      backgroundSize: {
        full: "100%",
      },
      screens: {
        xxs: "330px",

        xss: "365px",

        sx: "390px",

        xs: "400px",
      },
    },
  },
  variants: [
    "responsive",
    "group-hover",
    "focus-within",
    "first",
    "last",
    "odd",
    "even",
    "hover",
    "focus",
    "active",
    "visited",
    "disabled",
  ],
  plugins: [
    plugin(function ({ addComponents, theme }: any) {
      const screens = theme("screens", {});
      addComponents([
        {
          ".container": { width: "100%" },
        },
        {
          [`@media (min-width: ${screens.xxs})`]: {
            ".container": {
              "max-width": "640px",
            },
          },
        },
        {
          [`@media (min-width: ${screens.sm})`]: {
            ".container": {
              "max-width": "640px",
            },
          },
        },
        {
          [`@media (min-width: ${screens.md})`]: {
            ".container": {
              "max-width": "768px",
            },
          },
        },
        {
          [`@media (min-width: ${screens.lg})`]: {
            ".container": {
              "max-width": "1024px",
            },
          },
        },
        {
          [`@media (min-width: ${screens.xl})`]: {
            ".container": {
              "max-width": "1280px",
            },
          },
        },
        {
          [`@media (min-width: ${screens["2xl"]})`]: {
            ".container": {
              "max-width": "1280px",
            },
          },
        },
      ]);
    }),
  ],
};
export default config
