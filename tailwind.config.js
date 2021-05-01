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
        'desktop-h' : ['5vw', '1'],
        'desktop-p' : ['2vw', '1.4'],
        '1.5vw' : '1.5vw',
        '2vw' : '2vw',
        '3vw' : '3vw',
        '4vw' : '4vw',
        '5vw' : '5.2vw',
        '6vw' : '6vw',
      },
      margin: {
        'std' : "8vw",
        '20%' : "20%",
        '12%' : "12%",
        '10%' : '10%',
      },
      colors: {
        'hot-pink': '#d9a3d9',
        'lt-teal' : '#ddf5ff',
        'lt-pink' : '#d4b4fc',
        'lt-blue' : '#7580fc',
        'dk-blue' : '#071544',
        'dk-black' : '#121212',
        'lt-clear' : 'rgba(0, 0, 0, 0.1)',
        'circle-1' : '#4053fc',
        'circle-2' : '#c880f8',
        'circle-3' : '#ff6c98',
        'circle-4' : '#2889f7',
        'btn-hover' : 'rgba(0, 0, 0, 0.2)',
      },
      gridTemplateRows: {
        'price-cards' : 'auto auto auto auto 100px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
