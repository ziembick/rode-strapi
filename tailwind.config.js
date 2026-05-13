// tailwind.config.js
const {nextui} = require("@nextui-org/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(calendar|button|ripple|spinner).js",
  ],
  theme: {
    extend: {
      colors: {
        'rode-bg': '#E8ECF7',
        'rode-nav': '#EFF2FA',
        'rode-sage': '#809B92',
        'rode-coral': '#E77F80',
        'rode-blue': '#154aea',
        'rode-sky': '#81C0DD',
        'rode-purple': '#ae006f',
      },
      fontFamily: {
        baloo: ['var(--font-baloo2)'],
        lato: ['var(--font-lato)'],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};