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
      gridTemplateColumns: {
        // menu single card grid template
        extraLargeMenuGroup: "repeat(auto-fill, minmax(28rem , 1fr ))",
        largeMenuGroup: "repeat(auto-fill, minmax(18rem , 1fr ))",
        cartCategoryGroup: "repeat(auto-fill, minmax(16rem , 1fr ))",
        categoryGroup: "repeat(auto-fill, minmax(10rem , 1fr ))",
        categoryGroupSmall: "repeat(auto-fill, minmax(10rem , 1fr ))",
        defaultCategoryCols: "repeat(auto-fill, minmax(20rem , 1fr ))",

        //Recommendations
        RecGroup: "repeat(auto-fill, minmax(32rem , 1fr ))",
        RecGroupSmall: "repeat(auto-fill, minmax(20rem , 1fr ))",
        defaultRecCols: "repeat(auto-fill, minmax(16rem , 1fr ))",
      },
      screens: {
        xxs: "330px",

        xss: "365px",

        sx: '390px',

        xs: "400px",
      },
    },
  },
  plugins: [],
};
export default config
