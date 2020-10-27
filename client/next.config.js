const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      /* development only config options here */
      env: {
        TEST: process.env.TEST,
        API_URL: 'http://192.168.86.68:8081',
      },
      pageExtensions: ['jsx',
        'js',
        'ts',
        'tsx'],
      target: 'serverless',
      webpack: (config, { webpack }) => {
        // Note: we provide webpack above so you should not `require` it
        // Perform customizations to webpack config
        // Important: return the modified config
        config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));
        return config;
      },
      webpackDevMiddleware: (config) => config
      // Perform customizations to webpack dev middleware config
      // Important: return the modified config

      ,
    };
  }

  return {
    /* config options for all phases except development here */
  };
};
