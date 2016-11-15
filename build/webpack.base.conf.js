var path = require('path')
var config = require('../config')
var utils = require('./utils')
var projectRoot = path.resolve(__dirname, '../')
var webpack = require("webpack")

module.exports = {
  entry: {
    app: './src/main.js',
    vendor:['md5','base64']
  },
  output: {
    path: config.build.assetsRoot,
    publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'vue$': 'vue/dist/vue',
      'src': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'components': path.resolve(__dirname, '../src/components'),
      'base64':  path.resolve(__dirname, '../src/assets/js/lib/base64'),
      // 'jquery': path.resolve(__dirname, '../src/assets/js/lib/jquery/jquery'),//如果是本地的话
	    'md5': path.resolve(__dirname, '../src/assets/js/lib/jquery/jQuery.md5.js'),
	    // 'jquery':'jquery'
    }
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  plugins: [
    //new  webpack.optimize.CommonsChunkPlugin('common.js', ['main1', 'main2'])
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
    /*new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })*/
  ],
  externals: {
    wx:'jWeixin',
    'jquery':'jQuery',
    'base64':'base64'
  },
  module: {
    preLoaders: [
      {
        test: /\.vue$/,
        loader: 'eslint',
        include: projectRoot,
        exclude: [/node_modules/,/libs/]
      },
      {
        test: /\.js$/,
        loader: 'eslint',
        include: projectRoot,
        exclude: [/node_modules/,/libs/]
      }
    ],
    loaders: [
      /*{
        test: require.resolve('jquery'),
        loader: 'expose?$!expose?jQuery!jquery'
      },*/
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      /*{
        test: /\.scss$/,
        loader: "style!css!postcss!sass"
      },*/
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  eslint: {
    formatter: require('eslint-friendly-formatter')
  },
  vue: {
    loaders: utils.cssLoaders(),
    postcss: [
      require('autoprefixer')({
        browsers: ['last 2 versions','Android >= 4.0','iOS >=6']
      })
    ]
  }
}
