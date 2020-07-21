module.exports = {
  env: {
    browser: true,
    es6: true, // EcmaScript2015
    // "node": true
  },

  extends: 'eslint:recommended',

  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },

  rules: {
    'no-unused-vars': 1, // warning, use 0 to ignore
    'no-var': 2,
    'no-console': 2, // error
    semi: ['error', 'always'], // require semicolons
    quotes: ['error', 'double'], // require double quotes
    'prefer-const': 2,
    'no-undef': 0,
  },

  overrides: [
    {
      files: ['src/**/*.js', 'spec/*.js'],
      rules: {
        'prefer-const': 0,
      },
    },
  ],
};
