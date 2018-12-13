// 0 - turn off
// 1 - warn
// 2 - error

module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  env: {
    node: true,
  },
  plugins: [],
  rules: {
    // 'comma-dangle': [2, 'always-multiline'],
    'no-unused-vars': ['error', {
      argsIgnorePattern: '^(res|req|next)$'
    }],
    'import/no-extraneous-dependencies': ['error', {
      'devDependencies': true
    }],
    'import/prefer-default-export': [0],
  }
};
