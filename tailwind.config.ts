import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: {
          '50': 'hsl(217, 28%, 15%)',
          '100': 'hsl(218, 28%, 13%)',
          '200': 'hsl(216, 53%, 9%)',
          '300': 'hsl(219, 30%, 18%) ',
        },
        accent: {
          '100': 'hsl(176, 68%, 64%)',
          '200': 'hsl(198, 60%, 50%)',
          '300': 'hsl(0, 100%, 63%)',
        },
      },
      backgroundImage: {
        quotes: "url('./src/assets/bg-quotes.png')",
        'curvy-mobile': "url('./src/assets/bg-curvy-mobile.svg')",
        'curvy-desktop': "url('./src/assets/bg-curvy-desktop.svg')",
      },
      backgroundSize: {
        '50%': '50%',
      },
      backgroundPosition: {
        'top-2': 'left 2rem top',
      },
      screens: {
        xs: '375px',
      },
    },
    fontFamily: {
      sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
      raleway: ['Raleway'],
    },
  },
  plugins: [],
} satisfies Config;
