module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    // staging などでログを出したいなどの用途があるので off にしている
    // https://eslint.org/docs/rules/no-console
    'no-console': 'off',
  },
};
