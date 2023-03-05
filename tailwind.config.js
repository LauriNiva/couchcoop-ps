/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        robotoCondensed: ['var(--font-robotoCondensed'],
      },
      gridTemplateColumns: {
        fluid: 'repeat(auto-fit, minmax(24rem, 1fr))',
      },
    },
  },
  plugins: [],
};
