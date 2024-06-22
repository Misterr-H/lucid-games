import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        dot: '0 0 8px 0 #AAFFA9',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          'custom-gradient': 'linear-gradient(to bottom, #11FFBD 0%, #782DE8 100%)',
          'custom-gradient-1': 'linear-gradient(to bottom, #AAFFA9 0%, #AAFFA9 100%)',
      },
    },
  },
  plugins: [],
};
export default config;
