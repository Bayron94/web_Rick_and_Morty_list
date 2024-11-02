/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5',
        secondary: '#3B82F6',
        accent: '#F59E0B',
        neutral: '#9CA3AF',   
        background: '#F3F4F6' 
      },
      fontFamily: {
        sans: ['GreycliffCF', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
