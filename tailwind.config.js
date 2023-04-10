/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pureWhite:'#FFFFFF',
        jetBlack:'#000000',
        lightGrey:'#E5E5EA',
        newlightGrey: {
          50: '#F6F6F7',
          100: '#E9E9EB',
          200: '#D3D3D8',
          300: '#BDBEC7',
          400: '#A7A9B5',
          500: '#9193A2', // default lightGrey
          600: '#7B7E90',
          700: '#65697E',
          800: '#4F546B',
          900: '#3A3F59',
        },
        darkGrey:'#8E8E93',
        lightBlue:'#007AFF',
        darkBlue:'#005A8C',
        alertRedText:'#4a0b0b',
        alertRedBG:'#c21d1d',
        alertYellowText:'#623E00',
        alertYellowBG:'#FFA000',
        alertBlueText:'#092B4A',
        alertBlueBG:'#1E88E5',
        alertGreenText:'#1C481E',
        alertGreenBG:'#388E3C'
      },
      fontFamily:{
        inter:['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
  safelist:[
    {
      pattern: /^grid-cols-/,
      variants:['lg']
    },
    {
      pattern: /^col-span-/,
      variants:['lg']
    },
    {
      pattern:/^bg-/
    },
    {
      pattern:/^mt-/
    }
  ],
}

