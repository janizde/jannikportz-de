const merge = require("webpack-merge");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const webpackConfig = require("./webpack.config");

module.exports = merge(webpackConfig, {
  plugins: [
    new MiniCSSExtractPlugin({
      filename: 'app.[hash].css',
    }),
  ],
  module: {
    rules: [
      // CSS / SASS
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCSSExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader',
        ],
      },
    ]
  }
});
