/** @type {import('next').NextConfig} */
const nextConfig = {
  // 🚀 Force Webpack, disable Turbopack
  experimental: {
    serverMinification: false,
  },

  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      type: "asset/source",
    });
    return config;
  },
};

export default nextConfig;
