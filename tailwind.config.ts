import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#fff", //#fff
        secondary:"#f8fafb", //#fff
        theme:"#23b8ed"//#a358fd
      },
      fontFamily:{
        SpaceGrotesk:"Space Grotesk"
      },
    },
  },
  plugins: [require('tailwindcss-dotted-background')],
};
export default config;
