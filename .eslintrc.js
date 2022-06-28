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
      "vue/no-mutating-props":'off',
      "vue/multi-word-component-names":'off',
      "vue/no-template-key": 'off',
      "vue/valid-v-for":'off',
      "vue/no-v-model-argument":'off',
      "no-unused-vars":'off',
    },
    parserOptions: {
      parser: 'babel-eslint'
    }
  }