exports.config = {
  ...require('./wdio.conf').config,
  user: process.env.BROWSER_STACK_USER,
  key: process.env.BROWSER_STACK_KEY,
  updateJob: false,
  exclude: [],
  maxInstances: 10,
  commonCapabilities: {
    build: process.env.BROWSER_BUILD,
  },
  capabilities: [
    {
      device: 'Iphone 11',
      os_version: '14',
      browserName: 'ios',
      realMobile: 'true',
    },
    {
      device: 'Samsung Galaxy S21 Ultra',
      os_version: '11.0',
      browserName: 'android',
      realMobile: 'true',
    },
    {
      browser: 'firefox',
      browser_version: 'latest',
      os: 'Windows',
      os_version: '10',
    },
    {
      browser: 'chrome',
      browser_version: 'latest',
      os: 'Windows',
      os_version: '10',
    },
    {
      browser: 'edge',
      browser_version: 'latest',
      os: 'Windows',
      os_version: '10',
    },
    {
      browser: 'safari',
      browser_version: 'latest',
      os: 'OS X',
      os_version: 'Big Sur',
    },
    {
      browser: 'chrome',
      browser_version: 'latest',
      os: 'OS X',
      os_version: 'Big Sur',
    },
    {
      browser: 'firefox',
      browser_version: 'latest',
      os: 'OS X',
      os_version: 'Big Sur',
    },
  ],
  services: [
    [
      'browserstack',
      {
        preferScenarioName: true,
      },
    ],
  ],
  baseUrl: 'https://slashgear.github.io',
  logLevel: 'warn',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  host: 'hub.browserstack.com',
  // Code to mark the status of test on BrowserStack based on the assertion status
  afterTest: function (
    test,
    context,
    { error, result, duration, passed, retries }
  ) {
    if (passed) {
      browser.executeScript(
        'browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"passed","reason": "Assertions passed"}}'
      )
    } else {
      browser.executeScript(
        'browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"failed","reason": "At least 1 assertion failed"}}'
      )
    }
  },
}
// Code to support common capabilities
exports.config.capabilities.forEach(function (caps, index) {
  for (var i in exports.config.commonCapabilities)
    caps[i] = caps[i] || exports.config.commonCapabilities[i]
  exports.config.capabilities[index] = {
    ...caps,
    ...(caps['browser'] && { browserName: caps['browser'] }),
  }
})
