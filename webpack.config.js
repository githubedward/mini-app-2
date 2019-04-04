const resolve = require("path").resolve;
const webpack = require("webpack");

const BABEL_CONFIG = {
  presets: ["@babel/env", "@babel/react"],
  plugins: ["@babel/proposal-class-properties"]
};

const config = {
  mode: "development",

  entry: {
    app: resolve("./src/components/Map/Map.js")
  },

  output: {
    library: "Map"
  },

  module: {
    rules: [
      {
        // Compile ES2015 using babel
        test: /\.js$/,
        include: [resolve(".")],
        exclude: [/node_modules/],
        use: [
          {
            loader: "babel-loader",
            options: BABEL_CONFIG
          }
        ]
      }
    ]
  },

  // Optional: Enables reading mapbox token from environment variable
  plugins: [new webpack.EnvironmentPlugin(["MapboxAccessToken"])]
};
