module.exports = {
  reactStrictMode: true,
  transpilePackages: ["@repo/ui"],
  output: "standalone",
  images: {
    domains: ["file.rendit.io", "rendit.io"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "file.rendit.io",
      },
      {
        protocol: "https",
        hostname: "rendit.io",
      },
    ],
  },
};
