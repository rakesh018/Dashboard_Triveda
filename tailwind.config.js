/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          light: '#333',  
          DEFAULT: '#000', 
          dark: '#111',    
        },
        textColor: {
          light: '#cbd5e1',     
        },
      },
      padding:{
        globalY: '2.0rem',
        globalX: '1.5rem',
      },
      fontFamily: {
        opensans: ['Open Sans','system-ui'],
     
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
