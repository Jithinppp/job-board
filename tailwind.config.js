/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        jobContainerCol: "0.5fr 1.5fr",
        // jobContainerCol: "0.5fr 1.5fr",
      },
    },
  },
  plugins: [],
};
