module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{html,js}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    backgroundImage: {
      techie: `url("./TECHIE.svg")`,
      techiesmall: `url("./TECHIEs.svg")`,
      about: `url("./ABOUT.svg")`,
      hack: `url("./HACK.svg")`,
      vision: `url("./VISION.svg")`,
    },
    extend: {
      keyframes: {
        navopen: {
          '0%': { transform: 'translate(0px, -100px)', opacity: '0%' },
          '100%': { transform: 'translate(0px, 0px)', opacity: '100%' },
        },
        navclose: {
          '100%': { transform: 'translate(0px, -100px)', opacity: '0%' },
          '0%': { transform: 'translate(0px, 0px)', opacity: '100%' },
        },
      },
      animation: {
        navopen: 'navopen 500ms ease-in-out',
        navclose: 'navclose 500ms ease-in-out',
      },
    },
  },
  plugins: [require('tw-elements/dist/plugin')],
}
