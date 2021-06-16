module.exports = {
  env: {
    MONGODB_USERNAME: process.env.MONGODB_USERNAME,
    MONGODB_PASSWORD: process.env.MONGODB_PASSWORD,
    MONGODB_NAME: process.env.MONGODB_NAME,
    API_KEY: process.env.API_KEY,
  },
  images: {
    domains: ['cdn2.thecatapi.com'],
  },
}
