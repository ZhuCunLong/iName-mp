module.exports = {
  "extends": ["taro/react"],
  "rules": {
    'indent': ['error', 2],
    'linebreak-style': 0,
    'quotes': ['warn', 'single'],
    'no-unused-vars': 1,
    'semi': ['error', 'never'],
    'no-trailing-spaces': 2,
    'no-spaced-func': 2,
    'comma-spacing': [2, {
      'before': false,
      'after': true
    }],
    'no-multi-spaces': 2, //不能用多余的空格
    'no-irregular-whitespace': 2, //不能有不规则的空格
    'object-curly-spacing': [2, 'always'], //大括号内是否允许不必要的空格
    'space-before-blocks': [2, 'always']
  }
}
