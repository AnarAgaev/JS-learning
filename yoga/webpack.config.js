const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: {
        script: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist'
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            path: '/dist/*.*',
        }),
    ],
    devtool: "source-map",
    optimization: {
        minimizer: [new UglifyJsPlugin()],
    },
}
