/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

        "primary": "#4bf25e",          


        "secondary": "#7bce52",             


        "accent": "#61dd6b",              


        "neutral": "#362442",              


        "base-100": "#f3f4f6",             


        "info": "#9fbfe5",            


        "success": "#16BB9D",               


        "warning": "#A0800E",              


        "error": "#E13D58",       },
      },
    ],
  },
  plugins: [require("daisyui")],
}
