import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'retro-blue': {
          50: '#e6f7ff',
          100: '#bae7ff',
          200: '#91d5ff',
          300: '#69c0ff',
          400: '#40a9ff',
          500: '#1890ff',
          600: '#096dd9',
          700: '#0050b3',
          800: '#003a8c',
          900: '#002766',
        },
        'cyber-blue': {
          50: '#e0f2ff',
          100: '#b3e0ff',
          200: '#80ccff',
          300: '#4db8ff',
          400: '#1aa3ff',
          500: '#0088ff',
          600: '#006dd9',
          700: '#0052b3',
          800: '#003d8c',
          900: '#002966',
        },
      },
      boxShadow: {
        'neon-blue': '0 0 20px rgba(0, 136, 255, 0.5), 0 0 40px rgba(0, 136, 255, 0.3)',
        'neon-cyan': '0 0 20px rgba(0, 255, 255, 0.5), 0 0 40px rgba(0, 255, 255, 0.3)',
        'retro': '4px 4px 0px rgba(0, 80, 179, 0.3)',
      },
      animation: {
        'scan-line': 'scanline 8s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        glow: {
          'from': { textShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #0088ff, 0 0 40px #0088ff' },
          'to': { textShadow: '0 0 20px #fff, 0 0 30px #40a9ff, 0 0 40px #40a9ff, 0 0 50px #40a9ff' },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "#FFFFFF",
            foreground: "#002766",
            primary: {
              50: "#e0f2ff",
              100: "#b3e0ff",
              200: "#80ccff",
              300: "#4db8ff",
              400: "#1aa3ff",
              500: "#0088ff",
              600: "#006dd9",
              700: "#0052b3",
              800: "#003d8c",
              900: "#002966",
              foreground: "#FFFFFF",
              DEFAULT: "#0088ff",
            },
            secondary: {
              DEFAULT: "#006dd9",
              foreground: "#FFFFFF",
            },
            success: {
              DEFAULT: "#00ffff",
              foreground: "#002766",
            },
          },
        },
        dark: {
          colors: {
            background: "#000814",
            foreground: "#FFFFFF",
            primary: {
              50: "#001d3d",
              100: "#003566",
              200: "#005b99",
              300: "#0077b3",
              400: "#1aa3ff",
              500: "#0088ff",
              600: "#40a9ff",
              700: "#69c0ff",
              800: "#91d5ff",
              900: "#bae7ff",
              foreground: "#FFFFFF",
              DEFAULT: "#0088ff",
            },
            secondary: {
              DEFAULT: "#00ffff",
              foreground: "#000814",
            },
          },
        },
      },
    }),
  ],
}
