import type { NextConfig } from "next";
import type { Configuration as WebpackConfig } from "webpack";

const nextConfig: NextConfig = {
  reactCompiler: true,
  experimental: {
    // No unsupported properties here
  },
  webpack(config: WebpackConfig) {
    if (config.module?.rules) {
      config.module.rules.push({
        test: /\.(glsl|vs|fs|vert|frag)$/,
        type: "asset/source",
      });
    }
    return config;
  },
};

export default nextConfig;
