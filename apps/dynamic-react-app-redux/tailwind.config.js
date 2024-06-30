/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'wcag-green': '#428500',
      },
    },
  },
  plugins: [require('flowbite/plugin'), require('tailwind-scrollbar')],
};
