/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100ch',
            color: 'rgb(55, 65, 81)',
            h1: {
              fontWeight: '800',
              color: 'rgb(17, 24, 39)',
            },
            h2: {
              fontWeight: '700',
              color: 'rgb(17, 24, 39)',
            },
            h3: {
              fontWeight: '600',
              color: 'rgb(17, 24, 39)',
            },
          },
        },
        dark: {
          css: {
            color: 'rgb(209, 213, 219)',
            h1: {
              color: 'rgb(255, 255, 255)',
            },
            h2: {
              color: 'rgb(255, 255, 255)',
            },
            h3: {
              color: 'rgb(255, 255, 255)',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}