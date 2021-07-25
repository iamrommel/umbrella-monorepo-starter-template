module.exports = function (api) {
  api.cache(true)

  const parentConfig = require('../../babel.config')(api)
  parentConfig.presets.push('razzle/babel')

  return parentConfig
}
