import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  experimental: {
    turbopackRustReactCompiler: true,
  },
  output: process.env.NEXT_OUTPUT === "export" ? "export" : undefined,
};

export default nextConfig;
