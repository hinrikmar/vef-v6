require('dotenv').config();

const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  },
  publicRuntimeConfig: {
    apiUrl: 'http://127.0.0.1:3000',//process.env.API_URL,
  },
});