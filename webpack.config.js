const path = require("path");

module.exports = {
  // Other configurations...
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              svgo: false, // disable SVGO optimization if needed
            },
          },
          {
            loader: "url-loader",
            options: {
              limit: 8192, // Convert images < 8kb to base64 strings
              name: "assets/[name].[hash:8].[ext]",
            },
          },
        ],
      },
      // Other rules...
    ],
  },
  resolve: {
    alias: {
      assets: path.resolve(__dirname, "assets"),
    },
  },
};
