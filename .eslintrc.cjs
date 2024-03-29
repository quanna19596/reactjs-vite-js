module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.js'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', 'prettier'],
  rules: {
    'arrow-body-style': 'off',
    'click-events-have-key-events': 'off',
    'radix': 'off',

    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'simple-import-sort/imports': 'off',
    'simple-import-sort/exports': 'off',

    'no-shadow': 'off',
    'no-static-element-interactions': 'off',
    'no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_'
      }
    ],

    'react/react-in-jsx-scope': 'off',
    'react/jsx-no-target-blank': 'warn',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/button-has-type': 'off',

    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',

    'prettier/prettier': [
      'error',
      {
        arrowParens: 'always',
        trailingComma: 'none',
        tabWidth: 2,
        endOfLine: 'auto',
        useTabs: false,
        singleQuote: true,
        printWidth: 140,
        jsxSingleQuote: true
      }
    ]
  },
}
