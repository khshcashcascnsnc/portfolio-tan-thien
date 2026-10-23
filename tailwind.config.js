/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#f6f6f4',
          100: '#e9e8e4',
          200: '#d3d1ca',
          300: '#b1aea3',
          400: '#888477',
          500: '#6b6759',
          600: '#534f45',
          700: '#3d3a33',
          800: '#2a2823',
          900: '#1a1815',
          950: '#0d0c0a',
        },
        accent: {
          50: '#fdf5ee',
          100: '#fbe9d8',
          200: '#f6d1b0',
          300: '#efb07d',
          400: '#e88a4a',
          500: '#e06a28',
          600: '#cc531f',
          700: '#a93f18',
          800: '#863319',
          900: '#6c2b17',
          950: '#3a150a',
        },
        sand: {
          50: '#faf8f3',
          100: '#f3eee0',
          200: '#e7dcc2',
          300: '#d6c49a',
          400: '#c3aa6e',
          500: '#b39655',
          600: '#9f8347',
          700: '#81693a',
          800: '#6b5633',
          900: '#5a492d',
        },
        sage: {
          50: '#f4f6f2',
          100: '#e7ebe2',
          200: '#cfd9c8',
          300: '#a9bd9e',
          400: '#7e9b70',
          500: '#5d7d50',
          600: '#47633c',
          700: '#3a4f33',
          800: '#30402b',
          900: '#293625',
        },
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'marquee': 'marquee 30s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};
