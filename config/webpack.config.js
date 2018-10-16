const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

const outputDirectory = 'dist';
const projectRoot = path.resolve(__dirname, '..');

function buildConfig(env, argv) {
  const isDevelopment = (argv.mode === 'development');

  return {
    name: 'base',
    context: projectRoot,
    entry: {
      application: './src/client/entries/application.js'
    },
    resolve: {
      extensions: ['.js', '.jsx', '.json'],
      modules: ['node_modules', "src/client"]
    },
    output: {
      path: path.join(projectRoot, outputDirectory),
      filename: isDevelopment ? '[name].js' : '[name]-[hash].js',
      chunkFilename: isDevelopment ? '[name].js' : '[name]-[hash].chunk.js',
      publicPath: isDevelopment ? '//localhost:3000/' : '/'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
          test: /\.(png|woff|woff2|eot|ttf|svg)$/,
          loader: 'url-loader?limit=100000'
        }
      ]
    },
    devtool: 'inline-source-map',
    devServer: {
      hot: true,
      port: 3000
    },
    plugins: [
      new CleanWebpackPlugin([outputDirectory]),
      new ManifestPlugin({
        writeToFileEmit: true
      }),
      new webpack.HotModuleReplacementPlugin()
    ]
  };
}
 
module.exports = buildConfig;
