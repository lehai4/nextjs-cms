/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: { domains: ["lh3.googleusercontent.com", "images.pexels.com"] },
};

module.exports = nextConfig;
