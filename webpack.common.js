const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/scripts/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/templates/index.html'),
      filename: 'index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
        },
      ],
    }),
    new WebpackPwaManifest({
      name: 'Fresto | Fityan\'s French Restaurant',
      short_name: 'Fresto',
      description: 'Experience French cuisine in a different restaurant scenes',
      lang: 'en-US',
      display: 'standalone',
      orientation: 'portrait',
      inject: true,
      ios: true,
      background_color: '#ffffff',
      theme_color: '#71c9ce',
      publicPath: '/',
      start_url: '/',
      scope: '/',
      icons: [
        {
          src: path.resolve('src/public/images/logo/icon-192x192.png'),
          sizes: [96, 128, 192, 256, 384, 512],
          purpose: 'any',
        },
        {
          src: path.resolve('src/public/images/logo/icon-192x192.png'),
          sizes: [57, 60, 72, 76, 114, 120, 144, 152, 180],
          purpose: 'any',
          ios: true,
        },
      ],
    }),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
};
