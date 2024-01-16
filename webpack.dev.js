const { merge:webpackMerge } = require('webpack-merge')
const path = require('path')

const common = require('./webpack.common')


module.exports = webpackMerge(common(), {
    mode:'development',
    output:{
        path:path.join(path.resolve(__dirname),"public"),
        filename:'[name].bundle.js',
        chunkFilename:'[name].js'
    },
    devtool:'inline-source-map', // for source code mapping in case of error
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        }
    },
    plugins:[
        
    ]

})