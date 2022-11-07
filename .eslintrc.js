// ESlint 检查配置
module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module'
    },
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    extends: ['plugin:vue/recommended', 'eslint:recommended'],

    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        //关闭eslint检查文件名是否为驼峰命名
        'vue/multi-word-component-names': 'off'
    }

}