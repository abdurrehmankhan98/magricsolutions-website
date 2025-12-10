import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'jost': ['var(--font-jost)'],
        'interTight': ['var(--font-inter-tight)'],
        'lato': ['var(--font-lato)'],
      },
    },
  },
  plugins: [],
};
export default config;
