/** @type {import('next').NextConfig} */
// module.exports = {
//   reactStrictMode: true,
// }

const withPWA = require('next-pwa')({
  dest: 'public',
  swSrc: 'service-worker.js'
})

module.exports = withPWA({
  reactStrictMode: true
});