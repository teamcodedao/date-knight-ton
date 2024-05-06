import type {Config} from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        knight: ['var(--font-knight)', 'sans-serif'],
      },
      colors: {
        primary: '#2892E8',
      },
    },
  },
  plugins: [require('tailwindcss-multi')],
};
export default config;
