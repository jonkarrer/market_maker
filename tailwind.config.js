module.exports = {
  mode: 'jit',
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'primary' : ["Poppins", "sans-serif"],
        'secondary' : ["Source Sans Pro", "sans-serif"],
      },
      fontSize: {
        'mobile-p' : 'calc(2vw + 1.6vh)',
        'mobile-h' : ['10vw', '1.1'],
        '3vw' : '3vw',
        '4vw' : '4vw',
        '5vw' : '5vw',
        '6vw' : '6vw',
      },
      margin: {
        'std' : "8vw",
      },
      colors: {
        'hot-pink': '#d9a3d9',
        'lt-teal' : '#ddf5ff',
        'lt-pink' : '#d4b4fc',
        'lt-blue' : '#7580fc',
        'dk-blue' : '#071544',
        'dk-black' : '#121212',
        'lt-clear' : 'rgba(0, 0, 0, 0.1)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
