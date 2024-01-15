import type { Config } from "tailwindcss";
// import sharedConfig from "@repo/tailwind-config";
import sharedConfig from "@repo/ui-preset";

const config: Config = {
  presets: [sharedConfig],
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  darkMode: ["class", '[data-mode="dark"]'],
};

export default config;
