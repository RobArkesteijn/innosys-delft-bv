import type { Config } from 'tailwindcss'

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
        innosysred: {
          50: '#fff1f1',
          100: '#ffdfdf',
          200: '#ffc5c5',
          300: '#ff9d9d',
          400: '#ff6566',
          500: '#ff3435',
          600: '#ee2829',
          700: '#c70e0f',
          800: '#a41011',
          900: '#881415',
          950: '#4a0505',
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
}
