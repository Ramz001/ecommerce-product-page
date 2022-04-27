module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        orange: "hsl(26, 100%, 55%)",
        "pale-orange": 'hsl(25, 100%, 94%)',
        'very-dark-blue': "hsl(220, 13%, 13%)",
        'dark-grayish-blue': "hsl(219, 9%, 45%)",
        'light-grayish-blue': "hsl(220, 14%, 75%)",
        'black-low-opacity': "rgba(0,0,0,.75)"
      },
      fontFamily:{
        main: ["Kumbh Sans", 'sans-serif'],
      }
    },
  },
  plugins: [],
}