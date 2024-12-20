import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize: {
        '2xs': '10px',
        '3xs': '8px',
      },
      fontFamily: {
        'funnel-sans': ['var(--font-funnel-sans)'],
      },
      colors: {
        'primary': '#101010',
        'secondary': '#181818',
        'tertiary': '#262626',
        'quaternary': '#B3B3B3',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
export default config;
