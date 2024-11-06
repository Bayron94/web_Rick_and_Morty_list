/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 
        {
          100: '#EEE3FF',
          600: '#8054C7',
          700: '#5A3696',
        },
        secondary: {
          600: '#63D838',
        },
        accent: '#F59E0B',
        neutral: '#9CA3AF',   
        background: '#FFFFFF',
        gray: '#F3F4F6',
        grayBackground: '#F9FAFB',
        divider: '#E5E7EB',
        border: '#D1D5DB',
        text: {
          600: '#111827',
          400: '#6B7280',
        }
      },
      fontFamily: {
        greycliff: ['GreycliffCF', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
