exports.config = {
  ...require('./wdio.conf').config,
  specs: ['./features/**/*.feature'],
  capabilities: [
    {
      maxInstances: 5,
      browserName: 'chrome',
      acceptInsecureCerts: true,
      'goog:chromeOptions': {
        args: ['--headless', '--disable-gpu', '--disable-dev-shm-usage'],
      },
    },
  ],
  reporters: ['spec'],
}
