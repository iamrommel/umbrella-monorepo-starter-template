module.exports = function (api) {
  api.cache(true)

  return {
    targets: {
      browsers: ['last 2 versions', 'safari > 8', 'not ie < 11'],
    },
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: ['@babel/plugin-proposal-class-properties', 'lodash'],
    env: {
      production: {
        plugins: [['transform-remove-console', { exclude: ['error', 'warn', 'info'] }]],
        ignore: ['**/*.stories.js', '**/*.spec.js'],
      },
    },
  }
}
