module.exports = {
  globalSetup: require.resolve('./preset/lib/setup.js'),
  globalTeardown: require.resolve('./preset/lib/teardown.js'),
  testEnvironment: require.resolve('./preset/lib/puppeteer_environment.js'),
}
