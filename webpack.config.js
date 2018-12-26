const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { dirApp, dirNode, dirAssets, IS_DEV } = require("./webpack.util");

/**
 * Webpack Configuration
 */
module.exports = {
  entry: {
    app: [
      path.join(dirApp, "index.js"),
    ],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.[hash].js',
  },
  resolve: {
    modules: [dirNode, dirApp, dirAssets]
  },
  plugins: [
    new webpack.DefinePlugin({
      IS_DEV: IS_DEV
    }),
    new webpack.ProvidePlugin({
      // lodash
      '_': 'lodash'
    }),
    new CopyWebpackPlugin([
      {
        from: path.join(dirAssets, 'images'),
        to: 'assets/images',
      },
      /* {
        from: path.join(dirAssets, 'favicon.ico'),
        to: 'favicon.ico',
      }*/
    ]),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "index.ejs"),
    }),
  ],
  module: {
    rules: [
      // EJS
      {
        test: /\.ejs$/,
        loader: "ejs-loader"
      },
      // IMAGES
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]"
        }
      }
    ]
  }
};
