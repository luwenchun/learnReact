const { override, fixBabelImports, addDecoratorsLegacy,addLessLoader } = require("customize-cra");
// const {rewireSass} = require('react-app-rewire-scss');
// override返回一个函数，该函数返回对象将作为webpack的配置对象
module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: "css"
  }),
  addDecoratorsLegacy(),
  addLessLoader({
    strictMath: true,
    noIeCompat: true,
    localIdentName: '[local]--[hash:base64:5]' // if you use CSS Modules, and custom `localIdentName`, default is '[local]--[hash:base64:5]'.
  })
);