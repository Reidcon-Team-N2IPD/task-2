const path = require("path");
const zlib = require("zlib");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
// const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const WindiCSSWebpackPlugin = require("windicss-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
  },
  mode: "production",
  output: {
    filename: "js/[name].[contenthash].bundle.js",
    path: path.resolve(__dirname, "docs"),
    clean: true,
  },
  plugins: [
    new HTMLWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "src/index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash].css",
      chunkFilename: "css/[id].[contenthash].css",
    }),
    // new FaviconsWebpackPlugin({
    //   logo: "./src/assets/logo.png", // svg works too!
    //   mode: "webapp", // optional can be 'webapp', 'light' or 'auto' - 'auto' by default
    //   devMode: "webapp", // optional can be 'webapp' or 'light' - 'light' by default
    //   favicons: {
    //     appName: "ReidCon task 2",
    //     appDescription:
    //       "A Single Page Web Application Developed for reidcon competition task 2",
    //     developerName: "N2IPD",
    //     developerURL: null, // prevent retrieving from the nearest package.json
    //     background: "#ddd",
    //     theme_color: "#333",
    //     icons: {
    //       coast: false,
    //       yandex: false,
    //     },
    //   },
    // }),
    new WindiCSSWebpackPlugin(),
    new CompressionPlugin({
      filename: "[path][base].br",
      algorithm: "brotliCompress",
      test: /\.(js|css|html|svg)$/,
      compressionOptions: {
        params: {
          [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
        },
      },
      deleteOriginalAssets: false,
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src", "robots.txt"),
          to: path.resolve(__dirname, "docs", "robots.txt"),
        },
      ],
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
    },
    usedExports: true,
    minimizer: [
      `...`,
      new TerserPlugin({
        minify: TerserPlugin.swcMinify,
        terserOptions: {
          format: {
            comments: false,
          },
        },
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.s?css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: "asset/resource",
      },
    ],
  },
};
