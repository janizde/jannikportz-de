const merge = require("webpack-merge");
const webpackConfig = require("./webpack.config");
const { IS_DEV, dirAssets } = require("./webpack.util");

module.exports = merge(webpackConfig, {
  devtool: "eval",
  output: {
    pathinfo: true,
    publicPath: "/",
    filename: "[name].js"
  },
  module: {
    rules: [
      // CSS / SASS
      {
        test: /\.scss/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: IS_DEV
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: IS_DEV,
              includePaths: [dirAssets]
            }
          }
        ]
      },
    ]
  }
});
