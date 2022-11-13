// const { colors: defaultColors } = require('tailwindcss/defaultTheme');

// const colors = {
//   ...defaultColors,
//   ...{
//     primary: '#23A6F0',
//     'primary-dark': '#2A7CC7',
//     'primary-disabled': '#8EC2F2',
//     success: '#2DC071',
//     'success-dark': '#1EB062',
//     alert: '#E77C40',
//     'alert-dark': '#CA652C',
//     danger: '#E74040',
//     'danger-dark': '#BB2C2C',
//     muted: '#BDBDBD',
//     'text-color': '#252B42',
//   },
// };

module.exports = {
  purge: {
    content: ['./src/components/**/*.tsx', './src/components/**/*.styled.tsx'],
    enabled: process.env.NODE_ENV === 'publish',
  },
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: '#23A6F0',
        'primary-dark': '#2A7CC7',
        'primary-disabled': '#8EC2F2',
        success: '#2DC071',
        'success-dark': '#1EB062',
        alert: '#E77C40',
        'alert-dark': '#CA652C',
        danger: '#E74040',
        'danger-dark': '#BB2C2C',
        muted: '#BDBDBD',
        'text-color': '#252B42',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
