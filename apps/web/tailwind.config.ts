// tailwind config is required for editor support
/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";
import sharedConfig from "../../packages/ui-preset";

const config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "../../packages/ui/src/**/*.{tsx,ts,js}",
  ],
  presets: [sharedConfig],
  darkMode: "class",
};

export default config;
