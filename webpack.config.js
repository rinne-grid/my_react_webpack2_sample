const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('bundle.css');

module.exports = {
    entry: {
        app: './src/main.js',
        style: './src/style.css'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: path.resolve(__dirname, '/node_modules/'),
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: extractCSS.extract({
                    use: ['css-loader?modules&importLoaders=1', 'postcss-loader']
                })
            }
        ]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                context: path.resolve(__dirname),
                postcss: [
                    require('autoprefixer'),
                    require('postcss-easy-import')({ glob: true })
                ]
            }
        }),
        extractCSS
    ],
    devServer: {
        contentBase: './dist',
        port: 8080,
        inline: true,
        historyApiFallback: true
    }
}