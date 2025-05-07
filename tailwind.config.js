/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
    './src/app/**/*.{js,jsx}',
  ],
  darkMode: 'class', // Ensure dark mode is class-based
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4F46E5', // Modern indigo
          50: '#EEF2FF',
          100: '#E0E7FF',
          200: '#C7D2FE',
          300: '#A5B4FC',
          400: '#818CF8',
          500: '#6366F1',
          600: '#4F46E5', // Default
          700: '#4338CA',
          800: '#3730A3',
          900: '#312E81',
        },
        secondary: {
          DEFAULT: '#10B981', // Modern emerald green
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981', // Default
          600: '#059669',
          700: '#047857',
          800: '#065F46',
          900: '#064E3B',
        },
        dark: {
          DEFAULT: '#1E1E2E', // Dark background
          paper: '#27293D', // Card background in dark mode
          light: '#383A59', // Lighter variant
          border: '#2D2F45', // Border color in dark mode
        },
        light: {
          DEFAULT: '#F9FAFB', // Light background
          paper: '#FFFFFF', // Card background in light mode
          dark: '#F3F4F6', // Darker variant
          border: '#E5E7EB', // Border color in light mode 
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'dark': '0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
        'dark-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -4px rgba(0, 0, 0, 0.2)',
      }
    },
  },
  plugins: [],
};