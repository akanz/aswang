/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" && {
      exclude: ['error'],
    },
  },
}

module.exports = nextConfig
