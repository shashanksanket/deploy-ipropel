// If you want to use other PostCSS plugins, see the following:
// https://tailwindcss.com/docs/using-with-preprocessors

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              url: true, // or { filter: someFilterFunction }
              import: true, // or { filter: someFilterFunction }
            },
          },
          "postcss-loader",
        ],
      },
    ],
  },
};
