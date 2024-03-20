/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
        fontFamily: {
            'poppins': ['Poppins', 'sans-serif'],
        },
        textDecoration: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
        boxDecorationBreak: ['clone'],
        boxShadow: {
            'white-blur': '0 0 4px 3px rgba(255, 255, 255, 0.9)',
        },
        textShadow: {
            'yellow-glow': '0 0 8px #ffff00, 0 0 10px #ffff00, 0 0 20px #ffff00, 0 0 20px #ffff00',
            'white-glow': '0 0 8px rgba(255, 255, 255, 0.4), 0 0 20px rgba(255, 255, 255, 0.4), 0 0 30px rgba(255, 255, 255, 0.4), 0 0 40px rgba(255, 255, 255, 0.4)',
            'simple-shadow': '2px 2px #000000',
        }
    },
  },
  plugins: [
      require('tailwindcss-textshadow')
  ],
}

