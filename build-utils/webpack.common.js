const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.js",

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },

  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Simple React Todo App with Routing",
      template: "./src/index.html"
    })
  ],

  output: {
    path: path.resolve(__dirname, "..", "dist"),
    filename: "bundle.js"
    // publicPath: "/"
  }
};
