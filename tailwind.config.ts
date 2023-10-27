import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
  content: ['docs/content/**/*.md'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        innosysBlue: {
          500: '#0f5da3',
        },
        innosysShaft: {
          500: '#252525'
        },
        innosysGray: {
          500: '#d3cdcd',
        },
      },
    },
  },
};
