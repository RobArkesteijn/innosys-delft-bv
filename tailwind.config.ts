import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
  content: ['docs/content/**/*.md'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        innosysblue: {
          100: '#a6c8ff',
          200: '#73a8ff',
          300: '#4078ff',
          400: '#1053cc',
          500: '#0f5da3',
          600: '#0c4b82',
          700: '#08395f',
          800: '#05263d',
          900: '#02131c',
        },
        innosysshaft: {
          100: '#f2f2f2',
          200: '#d9d9d9',
          300: '#bfbfbf',
          400: '#a6a6a6',
          500: '#8c8c8c',
          600: '#737373',
          700: '#595959',
          800: '#404040',
          900: '#252525',
        },
      },
    },
  },
};
