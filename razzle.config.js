const webpack = require('webpack')
const MomentTimezoneDataPlugin = require('moment-timezone-data-webpack-plugin')

const momentIgnoreLocale = new webpack.IgnorePlugin({
  resourceRegExp: /^\.\/locale$/,
  contextRegExp: /moment$/,
})

const americaTimezoneOnly = new MomentTimezoneDataPlugin({
  startYear: 2020,
  endYear: 2030,
})

module.exports = {
  plugins: ['scss', 'bundle-analyzer', momentIgnoreLocale],
  modifyWebpackConfig(opts) {
    const config = opts.webpackConfig
    config.plugins.push(momentIgnoreLocale)
    config.plugins.push(americaTimezoneOnly)

    return config
  },
  options: {
    verbose: true,
  },
}
