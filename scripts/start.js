const scripts = require('react-micro-frontend-scripts');

function start() {
  // --- ENV for 'development' only ---
  // process.env.DISABLE_DEV_SERVER = 'true';

  // --- ENV for ALL ---
  process.env.ENSURE_NO_EXPORTS = 'true';
  // process.env.IMAGE_INLINE_SIZE_LIMIT = '1000';
  // process.env.REACT_MICRO_FRONTEND_SHORT = 'rmf';
  process.env.SPLIT_CHUNKS = 'false';
  process.env.RUNTIME_CHUNK = 'false';

  scripts.runWebpack(scripts.envDevelopment, scripts.helper.webpackConfigCallback);
}

start();
