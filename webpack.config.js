module.exports = {
    // Other webpack configuration
    module: {
      rules: [
        {
          test: /\.js$/,
          enforce: "pre",
          use: ["source-map-loader"],
          exclude: /node_modules\/superstruct/, // Ignore specific packages
        },
      ],
    },
    ignoreWarnings: [
      (warning) =>
        warning.message.includes('Failed to parse source map') &&
        warning.message.includes('superstruct'),
    ],
  };
  

// module.exports = {
//     module: {
//       rules: [
//         {
//           test: /\.js$/,
//           enforce: "pre",
//           use: ["source-map-loader"],
//         },
//       ],
//     },
//   };