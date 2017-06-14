const path = require('path');
module.exports = {
    entry: {
        index : './src/index.js'
    },
    //入口文件输出配置
    output: {
        path: path.join(__dirname, './dist/'),
        filename: 'mobile-toast.js',
        libraryTarget: 'umd',
        umdNamedDefine: true,
        library: 'mobile-toast'
    }
}