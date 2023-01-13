/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env:{
    NEXT_APP_BASE_ENDPOINT:"https://62d53994d4406e523555cb56.mockapi.io",
    GREETING:"Merhaba dünya"
  }
}

module.exports = nextConfig
