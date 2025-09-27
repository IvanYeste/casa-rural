/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx,svelte,vue}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#166a4d", light: "#1f8a62", dark: "#0e523c" },
        wood: { DEFAULT: "#8b5e3c", light: "#b07a50", dark: "#6e4a2f" },
      },
      fontFamily: { display: ["'Playfair Display'", "serif"] },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
