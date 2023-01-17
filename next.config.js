/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env:{
    NEXT_APP_BASE_ENDPOINT:"https://62d53994d4406e523555cb56.mockapi.io",
    GREETING:"Merhaba dünya",
    GITHUB_ID:"50adb5d9f6c06af1faba",
    GITHUB_SECRET:"5f1ba2a23c50755da5a68dc4254573ea7fe97e8a"
  }
}

module.exports = nextConfig
