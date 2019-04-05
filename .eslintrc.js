module.exports = {
  env: {
    'browser': true,
    'es6': true,
    'commonjs': true
  },
  extends: [
    'airbnb-base',
    'plugin:react/recommended'
  ],
  parser: 'babel-eslint',
  parserOptions: {
    'ecmaVersion': 9,
    'ecmaFeatures': {
      'jsx': true
    },
    'sourceType': 'module'
  },
  plugins: ['import', 'react'],
  rules: {
    'react/prop-types': 0,
    'react/jsx-uses-vars': [2],
    'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
    'linebreak-style': 0,
    'object-curly-newline': ['error', {
      'ExportDeclaration': { 'multiline': true, 'minProperties': 4 }
    }]
  }
};