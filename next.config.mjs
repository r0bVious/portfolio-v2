/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? "/portfolio-v2/" : "",
  basePath: isProd ? "/portfolio-v2" : "",
  output: "export",
};

export default nextConfig;
