module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    // turns off the rules which may conflict with prettier
    'prettier',
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    // disable explicit return types
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
}
