// .eslintrc.js

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'prettier/react',
    'eslint:recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'no-console': 0,
    'no-unused-vars':1,
  },
  settings:{
    'import/resolver':{
      node:{
        moduleDirectory: ['node_modules','src']
      },
    },
  },
};
