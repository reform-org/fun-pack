function patchSourceMap(config) {
  if (!config.module) return config;
  if (!config.module.rules) return config;

  return config;
}

module.exports = {patchSourceMap: patchSourceMap};
