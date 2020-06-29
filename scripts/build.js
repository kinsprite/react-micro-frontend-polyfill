const scripts = require('react-micro-frontend-scripts');

function build() {
  // --- ENV for 'production' only ---
  process.env.PUBLIC_ROOT_URL = '/';
  process.env.GENERATE_SOURCEMAP = 'false';
  // process.env.INLINE_RUNTIME_CHUNK = 'true';
  // process.env.MINIMIZE_IN_PRODUCTION = 'true';

  // --- ENV for ALL ---
  process.env.ENSURE_NO_EXPORTS = 'true';
  // process.env.IMAGE_INLINE_SIZE_LIMIT = '1000';
  // process.env.REACT_MICRO_FRONTEND_SHORT = 'rmf';
  process.env.SPLIT_CHUNKS = 'false';
  process.env.RUNTIME_CHUNK = 'false';

  scripts.runWebpack(scripts.envProduction, (config) => {
    const newConfig = scripts.helper.webpackConfigCallback(config);
    newConfig.entry['polyfill-ie9'] = [scripts.resolvePath('src/polyfill-ie9')];
    newConfig.entry['polyfill-ie11'] = [scripts.resolvePath('src/polyfill-ie11')];
    return newConfig;
  });
}

build();
