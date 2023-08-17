const react = require('eslint-plugin-react');

module.exports = [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      react,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      indent: ['error', 2],
      'no-multi-spaces': ['error'],
      'no-sequences': 0,
      'import/no-named-as-default': 0,
      'no-unused-vars': 0,
      'import/no-extraneous-dependencies': 0,
      'linebreak-style': 0,
      'jsx-a11y/click-events-have-key-events': 0,
      'jsx-a11y/no-static-element-interactions': 0,
      'import/prefer-default-export': 0,
      'react/destructuring-assignment': 0,
      'react/jsx-key': ['error', { checkFragmentShorthand: true, checkKeyMustBeforeSpread: true }],
      'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
      'default-param-last': 0,
      'react/function-component-definition': 0,
      'react/no-unstable-nested-components': 0,
      'react/no-unsafe-optional-chaining': 0,
      'function-paren-newline': ['error', 'consistent'],
      'function-call-argument-newline': ['error', 'consistent'],
    }
  }
];
  
