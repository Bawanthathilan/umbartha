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

        "testimonial-image": "url('/images/background/testimonialbg.png')",
      },
    },
  },
  plugins: [],
};
