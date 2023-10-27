import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'archisticonormal': ['archisticonormal', 'cursive'],
        'typewriter': ['Courier','Courier New', 'Didot', 'Serif'],
      },
    },
  },
  plugins: [],
}
export default config
