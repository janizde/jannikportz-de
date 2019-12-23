const merge = require("webpack-merge");
const webpackConfig = require("./webpack.config");
const { dirAssets } = require("./webpack.util");

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
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              sassOptions: {
                includePaths: [dirAssets]
              },
            }
          }
        ]
      },
    ]
  }
});
