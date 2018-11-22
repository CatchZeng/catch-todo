const path = require("path");
const HTMLPlugin = require("html-webpack-plugin");

const config = {
  entry: {
    app: path.join(__dirname, "../src/app.js")
  },
  output: {
    filename: "[name].[hash].js",
    path: path.join(__dirname, "../dist"),
    publicPath: "" //ex. /public =》 /public/app.hash.js
  },
  module: {
    rules: [
      {
        test: /.jsx$/,
        loader: "babel-loader"
      },
      {
        test: /.js$/,
        loader: "babel-loader",
        exclude: [path.join(__dirname, "../node_modules")]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new HTMLPlugin({
      template: path.join(__dirname, "../src/template.html")
    })
  ]
};

module.exports = config;
