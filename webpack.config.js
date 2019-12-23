const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { dirApp, dirNode, dirAssets } = require("./webpack.util");

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
    new CopyWebpackPlugin([
      {
        from: path.join(dirAssets, 'images'),
        to: 'assets/images',
      },
    ]),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "index.ejs"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      // EJS
      {
        test: /\.ejs$/,
        loader: "ejs-loader"
      },
      // IMAGES
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]"
        }
      }
    ]
  }
};
