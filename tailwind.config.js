/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      animation: {
        // Define a new animation named 'marquee-slow'
        'marquee-slow': 'marquee 30s linear infinite',
      },
      keyframes: {
        // Define the marquee keyframes
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }, // CRITICAL: Moves 100%
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-gold-metallic': {
          // 1. Gold Gradient Definition
          'background-image':
            'linear-gradient(to bottom, #cfc09f 25%, #ffecb3 40%, #a8893d 50%, #3a2c0f 75%)',

          // 2. Clip the gradient to the text shape
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',

          // Fallbacks for non-webkit browsers
          'background-clip': 'text',
          color: 'transparent',
          'text-fill-color': 'transparent',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
