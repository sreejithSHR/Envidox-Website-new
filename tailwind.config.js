/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        'light-gray': '#f8f9fa',
      },
      animation: {
        'particle-float': 'particle-float 20s ease-in-out infinite',
        'particle-glow': 'particle-glow 3s ease-in-out infinite',
      },
      keyframes: {
        'particle-float': {
          '0%, 100%': { transform: 'translate(0, 0)', opacity: '0.8' },
          '50%': { transform: 'translate(10px, -10px)', opacity: '1' },
        },
        'particle-glow': {
          '0%, 100%': { boxShadow: '0 0 5px rgba(59, 130, 246, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.8)' },
        },
      },
    },
  },
  plugins: [],
};
