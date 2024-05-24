/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {},
    container:{
      padding:{
        md: "10rem",
      },
    }
  },
  plugins: [],
};

