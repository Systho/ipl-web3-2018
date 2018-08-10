const path = require("path");
const webpack = require('webpack');
const CleanWebpackPlugin = require("clean-webpack-plugin");

const outputDirectory = "dist";
const projectRoot = path.resolve(__dirname, '..');

console.log(projectRoot);

module.exports = {
  name: "base",  
  context: projectRoot,
  entry: {
    application: "./src/client/entries/application.js",
  },
  output: {
    path: path.join(projectRoot, outputDirectory),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: "url-loader?limit=100000"
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
    new webpack.HotModuleReplacementPlugin()
  ]
};
