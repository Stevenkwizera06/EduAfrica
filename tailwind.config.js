/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: "#072951",
        brightYellow: "#ECDC01",
        pink: "#B42886",
      },
    },
    animation: {
      show: "show 500ms ease-out both",
      unshow: "unshow 500ms ease-out both",
    },
    keyframes: {
      show: {
        "0%": { opacity: 0, transform: translateY("-2px") },
        "100%": { opacity: 1, transform: translateY(0) },
      },
      unshow: {
        "0%": { opacity: 2 },
        25: { opacity: 1.5 },
        50: { opacity: 1 },
        "100%": { opacity: 0 },
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    // ...
  ],
};
