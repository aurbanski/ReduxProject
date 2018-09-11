const path = require('path')
module.exports = {
    devServer: {
        contentBase: path.join(__dirname, 'src')
    },
    entry: './src/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'index.js'
    },
    module: {
        rules: [
            { test: /.jsx?/, loader: 'babel-loader', exclude: /node_modules/}
        ]
    }
}