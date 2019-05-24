const { injectBabelPlugin } = require('react-app-rewired');
module.exports = function override(config, env) {
     //启用ES7的修改器语法（babel 7）
    config = injectBabelPlugin(['@babel/plugin-proposal-decorators', { "legacy": true }], config)   //{ "legacy": true }一定不能掉，否则报错
        //antd按需加载
    config = injectBabelPlugin(['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }], config,);

    return config;
}