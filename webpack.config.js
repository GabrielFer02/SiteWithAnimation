module.exports = {
  entry: ["@babel/polyfill", "whatwg-fetch", "./src/index.js"],
  output: {
    path: `${__dirname}/dist`,
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
};