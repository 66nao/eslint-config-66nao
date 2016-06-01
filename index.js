module.exports = {
  extends: 'eslint-config-vue',
  parserOptions: {
    ecmaVersion: 5
  },
  env: {
    browser: true
  },
  globals: {
    coolie: true,
    define: true,
    DEBUG: true,
    Vue: true,
    VueRouter: true,
    Ajax: true,
    Promise: true,
    $config: true,
    $router: true,
    laydate: true,
    _: true,
    $dom: true,
    $message: true,
    $loading: true,
    window: true
  },
  rules: {
    'semi': [2, 'always'],
    'operator-linebreak': [2, 'before']
  }
}
