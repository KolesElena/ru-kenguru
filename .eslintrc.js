module.exports = {
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.native.js'],
        paths: ['src'],
      },
    },
  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    indent: ['error', 2],
    'no-multi-spaces': ['error'],
    "@typescript-eslint/no-unused-vars": ["error"],
    'react/jsx-key': ['error', { checkFragmentShorthand: true, checkKeyMustBeforeSpread: true }],
    'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
    'function-paren-newline': ['error', 'consistent'],
    'function-call-argument-newline': ['error', 'consistent'],
    'react/function-component-definition': 0,
  },
};
