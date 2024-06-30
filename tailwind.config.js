/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.html', './src/pages/**/*.js'],
  theme: {
    fontFamily: {
      poppins: ['"Poppins"', 'serif']
    },
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    ({ addComponents }) => {
      addComponents({
        '.custom-radio': {
          appearance: 'none !important',
          '-webkit-appearance': 'none !important',
          backgroundColor: '#fff !important',
          border: '2px solid #ccc !important',
          borderRadius: '50% !important',
          width: '28px !important',
          height: '28px !important',
          position: 'relative !important',
          cursor: 'pointer !important',
          marginLeft: '12px !important'
        },
        '.custom-radio:checked': {
          backgroundColor: '#fff !important',
          borderColor: '#000 !important'
        },
        '.custom-radio:checked::after': {
          content: '"" !important',
          display: 'block !important',
          width: '18px !important',
          height: '18px !important',
          backgroundColor: '#000 !important',
          borderRadius: '50% !important',
          position: 'absolute !important',
          top: '50% !important',
          left: '50% !important',
          transform: 'translate(-50%, -50%) !important'
        }
      });
    }
  ]
}

