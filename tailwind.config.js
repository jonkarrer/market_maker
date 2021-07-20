module.exports = {
  mode: 'jit',
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        '3xl' : '2200px'
      },
      backgroundImage: {
        'splash' : 'linear-gradient(110deg, #00beb3, #5653ff)',
      },
      minWidth: {
        '2xl' : '1500px'
      },
      width: {
        '100' : '400px',
        '110' : '450px',
        '115' : '475px',
        '120' : '500px',
        '130' : '550px',
        '140' : '600px',
        '150' : '650px',
        '160' : '700px',
        '170' : '750px',
        '180' : '800px',
        '190' : '850px',
        '200' : '900px',
        '210' : '950px',
        '220' : '1000px',
        '86%' : '86%',
        '95%' : '95%',
        '528px' : '528px',
        '864px' : '864px',
        '500px' : '500px',
        '2000' : '2000px',
        '8vw' : '8vw', 
        'square' : '23vh',
        '40vw' : '40vw',
      },
      height: {
        '85' : '376px',
        '100' : '400px',
        '110' : '450px',
        '115' : '475px',
        '120' : '500px',
        '130' : '550px',
        '140' : '600px',
        '150' : '650px',
        '160' : '700px',
        '170' : '750px',
        '180' : '800px',
        '190' : '850px',
        '200' : '900px',
        '210' : '950px',
        '220' : '1000px',
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
      maxHeight: {
        '3xl' : '1200px'
      },
      minHeight: {
        'lg' : '600px',
        '400px' : '400px',
        '800px' : '800px'
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
        'gradAqua': "#00beb3",
        "gradBlue" : "#5653ff"
      },
      borderWidth: {
        '1px' : '1px',
      },
      boxShadow: {
        'supp-boxes' : '0 5px 10px rgba(0, 0, 0, 0.3)',
        'term-panel' : '10px 0px 5px -10px rgba(0, 0, 0, 0.2)'
      },
      gridTemplateRows: {
        'price-cards' : 'auto auto auto auto 100px',
        'large-cards' : 'auto auto auto auto 150px'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
