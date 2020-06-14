// commonjs nodejs

// reslove 定义一个绝对路径获取函数
const path = require('path')

function resolve(dir){
    return path.join(__dirname,dir)
}
const port = 7070;
const title = 'vue项目最佳实践';

module.exports = {
   publicPath: 'best-practice',
   devServer: {
       port
   },
   configureWebpack: {
       name: title
   }
}