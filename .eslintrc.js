module.exports = {
    root: true,
    env: {
      node: true,
      node: true,
      es6: true,
    },
    'extends': [
      'plugin:vue/essential',
      // '@vue/standard'
    ],
    rules: {
      'no-debugger' : 'off',
       'no-unused-vars': 'warn',
      'vue/no-unused-vars': "off",
      'vue/no-v-for-template-key': 'off',
      "no-undef": 'off',
      "vue/no-mutating-props":'off'
    },
    parserOptions: {
      parser: 'babel-eslint'
    }
  }