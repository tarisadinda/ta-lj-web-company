/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "@/styles/utils/_variables.scss";
    `,
  },
  // images: {
  //   unoptimized: true
  // }
}

module.exports = nextConfig
