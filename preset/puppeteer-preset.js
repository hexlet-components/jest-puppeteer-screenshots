module.exports = {
  globalSetup: require.resolve('./lib/setup.js'),
  globalTeardown: require.resolve('/lib/teardown.js'),
  testEnvironment: require.resolve('/lib/puppeteer_environment.js'),
}
