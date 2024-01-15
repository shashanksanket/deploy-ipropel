import type { StorybookConfig } from "@storybook/nextjs";
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
import { join, dirname } from "path";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "storybook-dark-mode",
    "@storybook/addon-docs",
    "@storybook/addon-designs",
    "@storybook/addon-styling",
    // "@storybook/addon-a11y",
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-onboarding"),
    getAbsolutePath("@storybook/addon-interactions"),
    {
      name: "@storybook/addon-postcss",
      options: {
        cssLoaderOptions: {
          // When you have splitted your css over multiple files
          // and use @import('./other-styles.css')
          importLoaders: 1,
        },
        postcssLoaderOptions: {
          // When using postCSS 8
          implementation: require("postcss"),
        },
      },
    },
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  // webpackFinal: (config) => {
  //   config.resolve.plugins = config.resolve.plugins || [];
  //   config.resolve.plugins.push(
  //     new TsconfigPathsPlugin({
  //       configFile: path.resolve(__dirname, "../tsconfig.json"),
  //     })
  //   );
  //   return config;
  // },
  webpackFinal: async (config) => {
    // Add your Next.js specific configurations here
    config.resolve.modules.push(process.cwd() + "/src");

    return config;
  },
};
export default config;
