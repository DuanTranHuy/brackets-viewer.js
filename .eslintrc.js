module.exports = {
  overrides: [
    {
      files: ['*.ts'],
      extends: ['prettier'],
      parserOptions: {
        project: './tsconfig.json'
      }
    }
  ],
  ignorePatterns: ['dist/', 'webpack.config.js'],
  extends: ['prettier', 'plugin:jsdoc/recommended'],
  rules: {
    'prettier/prettier': ['error']
  }
}
