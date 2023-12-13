// shared config (dev and prod)
const { resolve } = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  devtool: 'source-map',
  // plugins: [
  //   new webpack.optimize.UglifyJsPlugin({
  //     minimize: true,
  //     sourceMap: true,
  //     include: /\.min\.js$/,
  //   })
  // ],
  module: {
    rules: [
      {
        test: [/\.jsx?$/, /\.tsx?$/, /\.ts?$/],
        use: {
          loader: 'babel-loader',
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          'style-loader',
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
                relativeUrls: false,
                modifyVars: {
                  '@body-background': '#E5E5E5',
                  '@layout-header-height': '50px',
                  '@layout-body-background': '#E5E5E5',
                  '@layout-header-background': '#2A316B',
                  '@layout-sider-background': '#FFFFFF',
                  '@primary-color': '#2A316B', // primary color for all components
                  '@link-color': '#1060fd',
                  '@table-header-bg': '#FFFFFF',
                  '@select-border-color': '#d9e2ec',
                  '@input-border-color': '#d9e2ec',
                },
              },
            },
          },
        ],
      },
    ],
  },
}
