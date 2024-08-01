import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        appearkf: {
          "0%": { opacity: "0", scale: "1.5" },
          "100%": { opacity: "1", scale: "1" },
        },
      },
      animation: {
        appear: "appearkf 1s ease",
      },
    },
  },
};
export default config;