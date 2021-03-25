module.exports = {
  globalSetup: `${process.cwd()}/lib/setup.js`,
  globalTeardown: `${process.cwd()}/lib/teardown.js`,
  testEnvironment: `${process.cwd()}/lib/puppeteer_environment.js`,
}
