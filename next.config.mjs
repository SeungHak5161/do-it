/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: ['./src/styles'],
    prependData: `@import "variable.scss";`,
  },
}

export default nextConfig
