module.exports = {
  mode: 'jit',
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '685px' : '685px',
        '500px' : '500px',
        '2000px' : '2000px',
        '8vw' : '8vw', 
        'square' : '23vh',
        '40vw' : '40vw',
      },
      height: {
        '1150px' : '1150px',
        '1100px' : '1100px',
        '1000px' : '1000px',
        '300px' : '300px',
        '10vh' : '10vh',
        '11vh' : '11vh',
        'square' : '23vh',
        '25vh' : '25vh',
        '36vh' : '36vh',
        '44vh' : '44vh',
      },
      minHeight: {
        '400px' : '400px',
        '800px' : '800px'
      },
      fontSize: {
        'mobile-p' : 'calc(2vw + 1.5vh)',
        'mobile-h' : ['9vw', '1.1'],
        'desktop-h' : ['5vw', '1.2'],
        'desktop-p' : ['2vw', '1.4'],
        '1.3vw' : '1.3vw',
        '1.5vw' : '1.5vw',
        '2vw' : '2vw',
        '3vw' : '3vw',
        '4vw' : '4vw',
        '5vw' : '5.2vw',
        '6vw' : '6vw',
        '8vw' : '8vw',
        '9vw' : '9vw',
      },
      margin: {
        'std' : "8vw",
        '30%' : '30%',
        '20%' : "20%",
        '16%' : '17.3%',
        '15%' : '15%',
        '12%' : "12%",
        '10%' : '10%',
        '8%' : '8%',
        '6%' : '6%',
        '20vw' : '20vw',
      },
      colors: {
        'hot-pink': '#d9a3d9',
        'dk-pink' : '#D57EEB',
        'lt-teal' : '#ddf5ff',
        'lt-pink' : '#d4b4fc',
        'lt-blue' : '#7580fc',
        'dk-blue' : '#071544',
        'dk-black' : '#121212',
        'lt-clear' : 'rgba(0, 0, 0, 0.1)',
        'salmon' : 'hsla(22, 100%, 77%, 1)',
        'circle-2' : '#c880f8',
        'circle-3' : '#ff6c98',
        'circle-4' : '#2889f7',
        'btn-hover' : 'rgba(0, 0, 0, 0.2)',
        'aqua' : '#00ffff',
        'blue-border' : '#4356ff',
        'lt-grey' : '#E9E9E9',
        'dk-grey' : '#848484'
      },
      borderWidth: {
        '1px' : '1px',
      },
      boxShadow: {
        'supp-boxes' : '0 5px 10px rgba(0, 0, 0, 0.3)',
        'term-panel' : '10px 0px 5px -10px rgba(0, 0, 0, 0.2)'
      },
      gridTemplateRows: {
        'price-cards' : 'auto auto auto auto 100px'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
