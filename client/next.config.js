// next.config.js
const withImages = require('next-images')
module.exports = withImages()

// const withTM = require('next-transpile-modules')([
//     'react-leaflet',
//     '@react-leaflet/core',
//     'leaflet',
// ])

// module.exports = withTM({
//     future: {
//         webpack5: true,
//     },
// })

// module.exports = {
//     webpack(config) {
//         config.module.rules.push({
//             test: /\.svg$/,
//             issuer: {
//                 test: /\.(js|ts)x?$/,
//             },
//             use: ['@svgr/webpack'],
//         })

//         return config
//     },
// }

// const withReactSvg = require('next-react-svg')
// const path = require('path')

// module.exports = withReactSvg({
//     include: path.resolve(__dirname, 'src/assets/svg'),
//     webpack(config, options) {
//         return config
//     },
// })
