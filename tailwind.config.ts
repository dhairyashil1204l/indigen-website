import type { Config } from "tailwindcss";

const config: Config = {

  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {

    extend: {

      colors: {

        brand: {
          DEFAULT: "#334DAF",
          dark: "#091F5C",
          light: "#7096D1",
        },

        surface: {
          DEFAULT: "#F9FBFF",
          light: "#E8F2FE",
          blue: "#D0E4FE",
        },

      },


      fontFamily: {

        heading:[
          "var(--font-sora)",
          "sans-serif"
        ],

        body:[
          "var(--font-plex)",
          "sans-serif"
        ],

      },


      boxShadow:{

        card:
        "0 10px 30px rgba(9,31,92,0.08)",

      },


    },

  },

  plugins: [],

};


export default config;