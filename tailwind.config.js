/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,php}"],
  theme: {
    extend: {
      colors: {
        popo:{
          100:"#F5DD61",
          200:"#F4538A",
        },
      },
    },
  },
  plugins: [],
};
