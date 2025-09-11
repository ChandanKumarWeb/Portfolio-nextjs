/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // for next-themes
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: "var(--card)",
        "card-foreground": "var(--card-foreground)",
        primary: "var(--primary)",
        border: "var(--border)",
        ring: "var(--ring)",
      },
    },
  },
  plugins: [],
};
