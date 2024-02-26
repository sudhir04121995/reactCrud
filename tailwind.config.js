/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
 
  theme: {
    extend: {
      gap: {
        '11': '2.75rem',
      },
      scrollMargin: {
        '96': '24rem',
      },
      
      spacing: {
        '96': '24rem',
      }
    },
  },
  plugins: [require("daisyui") ],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  
}

