module.exports = {
  purge: {
    content: ['./src/components/**/*.tsx', './src/components/**/*.styled.tsx'],
    enabled: process.env.NODE_ENV === 'publish',
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
