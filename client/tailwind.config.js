/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary:'Poppins , sans-serif',
    }
  },
  container: {
    padding: {
      DEFAULT: '1rem',
      lg: '2rem',
    },
  },
  screens: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1234px'
  },
  extend: {
    colors: {
      primary: '#EAB308',
      secondary: '#EAB308',
    },
  },
  backgroundColor: {
    '1b263b' : '#1b263b',
  },
  animation: {
    'spin-slow': 'spin 6s linear infinite',
    'spin-delay': 'spin 6s linear infinite -3s',
  },
  plugins: [],
}

