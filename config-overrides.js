
const { override, addWebpackAlias } = require('customize-cra');
const path = require('path')

module.exports = override(
    
  // 配置路径别名，src的绝对路径可以用 @ 代替
  addWebpackAlias({
    "@": path.resolve(__dirname, 'src')
  })

);