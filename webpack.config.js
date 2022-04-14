const path = require('path');
//const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';
  const isDev = !isProd;
  const filename = (ext) => isProd ? `[name]. [contenthash]. bundle. ${ext}` : `[name]. bundle. ${ext}`;
  const plagins = () => {
    const base =
      [
        new BundleAnalyzerPlugin(),
          // new CopyPlugin({
          // patterns: [{ from: 'src/favicon.ico'}],
          // }),
          new HtmlWebpackPlugin({
            template: './index.html'
          }),

      new MiniCssExtractPlugin({
        filename: filename('css')
      }),
      //new CleanWebpackPlugin(),
  ]
    if (isDev) {
      base.push(new ESLintPlugin())

    }
    return base
  }
  return {
    context: path.resolve(__dirname, 'src'),
    entry: [
      'core-js/stable',
      'regenerator-runtime/runtime',
      './index.js'
    ],
    output: {
      clean: true,
      path: path.resolve(__dirname, 'dist'),
      filename: filename('js')
    },
    resolve: {
      extensions: ['.js'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@core': path.resolve(__dirname, 'src', 'core')
      }
    },
    devServer: {
      port: 3000,
      open: true,
      hot: true,
      watchFiles: './',
    },
    devtool: isDev ? 'source-map' : false,
    plugins: plagins(),
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1
              }
            },
            'postcss-loader'
          ],
          exclude: /\.module\.css$/
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: true
              }
            },
            'postcss-loader'
          ],
          include: /\.module\.css$/
        },
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.svg$/,
          use: 'file-loader'
        },
        {
          test: /\.png$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                mimetype: 'image/png'
              }
            }
          ]
        },
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


  }
}
