/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bg-image": "url('/images/background/homepage-background.png')",
        "white-bg-gradient":
          "linear-gradient(180deg, #F7F2EE 8.11%, rgba(255, 255, 255, 0.00) 100%);",

        "testimonial-image": "url('/images/background/testimonialbg2.jpeg')",
        "hero-gradient":
          "linear-gradient(0deg, #F9F6F3 0%, rgba(255, 255, 255, 0.00) 100%), linear-gradient(90deg, #0B665B 0%, #26AF9F 45.53%, #F7E36D 99.48%);",
        "hero-gradient-2":
          "linear-gradient(2deg, rgba(1, 72, 64, 0.00) 14.29%, #014840 95.89%), lightgray 50% / cover no-repeat;",
        "ourservice-gradient":
          "linear-gradient(90deg, #FFF 19.17%, #E8FFF7 97.08%);",
      },

      colors: {
        "bg-white-varient": "#F9F6F3",
        "green-theme": "#26AF9F",
      },

      animation: {},
    },
  },
  plugins: [],
};
