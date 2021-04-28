module.exports = {
  mode: 'jit',
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      margin: {
        'std': "8vw",
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
