/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
    container: false,
  },
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './src/**/*.{jsx,tsx,html}',
    './docs/**/*.{jsx,tsx,html}',
    'node_modules/@314oner_npm/universal-components-library/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {},
  plugins: [require('tailwindcss-animate')],
};
