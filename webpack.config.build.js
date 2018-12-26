const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpackConfig = require("./webpack.config");

module.exports = merge(webpackConfig, {
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new ExtractTextPlugin('app.[hash].css'),
  ],
  module: {
    rules: [
      // CSS / SASS
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!sass-loader',
        })
      },
    ]
  }
});
