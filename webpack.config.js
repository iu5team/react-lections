const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const src = path.resolve(__dirname, 'src');
const build = path.resolve(__dirname, 'build');

module.exports = {
    entry: path.resolve(src, 'index.js'),
    output: {
        filename: 'bundle.js',
        path: build,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(src, 'index.html'),
            filename: 'index.html',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                ]
            }
        ]
    },
    devServer: {
        hot: true,
        inline: true,
        contentBase: false,
    }
};
