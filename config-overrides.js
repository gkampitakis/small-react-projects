const webpack = require('webpack');

module.exports = {
  webpack: function (config, env) {
    const isEnvProduction = env === 'production'
    return {
      ...config,
      plugins: [
        ...config.plugins,
        ...[isEnvProduction && new webpack.IgnorePlugin(/spec/i)]
      ]
    };
  }
};