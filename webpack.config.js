const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//onst webpack = require('webpack');
// const WebpackDevServer = require('webpack-dev-server');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
        clean: true,
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            components: path.resolve (__dirname, 'src/components'),
            core: path.resolve (__dirname, 'src/core')
        }
    },
    mode: 'development',
    devServer: {
        port: 3000,
        open: true,
        hot: true,
        watchFiles: './',
    },

        plugins: [
            new HtmlWebpackPlugin({
                title: 'Excel project',
                template: path.resolve(__dirname, './src/index.html'),
                filename: 'index.html',
            }),
            new MiniCssExtractPlugin(),
            new ESLintPlugin()

        ],

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
                },

                {
                    test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                    type: 'asset/resource',
                },

                {
                    test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                    type: 'asset/inline',
                },

                {
                    test: /\.css$/i,
                    use: [ MiniCssExtractPlugin.loader, "css-loader"],
                },

                {
                    test: /\.(scss|css)$/,
                    use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
                },

            ],
        },

}