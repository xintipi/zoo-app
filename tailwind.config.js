//tailwind.config.js
/** @type {import('tailwindcss').Config} */

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `var(${variableName})`
  }
}

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        13: '13px',
        15: '15px',
        20: '20px',
      },
      textColor: {
        skin: {
          'dark-1': withOpacity('--color-dark-1'),
          'dark-2': withOpacity('--color-dark-2'),
          'dark-3': withOpacity('--color-dark-3'),
          'dark-4': withOpacity('--color-dark-4'),
          'dark-5': withOpacity('--color-dark-5'),
          'white-1': withOpacity('--color-white-2'),
          'white-2': withOpacity('--color-white-1'),
          'blue-1': withOpacity('--color-blue-1'),
          'blue-2': withOpacity('--color-blue-2'),
          'blue-3': withOpacity('--color-blue-3'),
          red: withOpacity('--color-red'),
        },
      },
      backgroundColor: {
        skin: {
          'dark-1': withOpacity('--color-dark-1'),
          'dark-2': withOpacity('--color-dark-2'),
          'dark-3': withOpacity('--color-dark-3'),
          'dark-4': withOpacity('--color-dark-4'),
          'dark-5': withOpacity('--color-dark-5'),
          'white-1': withOpacity('--color-white-2'),
          'white-2': withOpacity('--color-white-1'),
          'blue-1': withOpacity('--color-blue-1'),
          'blue-2': withOpacity('--color-blue-2'),
          'blue-3': withOpacity('--color-blue-3'),
          red: withOpacity('--color-red'),
        },
      },
    },
  },
}
