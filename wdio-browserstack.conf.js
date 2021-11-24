exports.config = {
  ...require('./wdio.conf').config,
  user: process.env.BROWSER_STACK_USER,
  key: process.env.BROWSER_STACK_KEY,
  updateJob: false,
  exclude: ['./features/rss.feature', './features/theme-switcher.feature'],
  maxInstances: 10,
  commonCapabilities: {
    build: process.env.BROWSER_BUILD,
    project: 'blog',
  },
  capabilities: [
    {
      browser: 'chrome',
      browser_version: 'latest',
      os: 'Windows',
      os_version: '10',
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
  afterTest(test, context, { error, result, duration, passed, retries }) {
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
exports.config.capabilities.forEach((caps, index) => {
  for (const i in exports.config.commonCapabilities)
    caps[i] = caps[i] || exports.config.commonCapabilities[i]
  exports.config.capabilities[index] = {
    ...caps,
    ...(caps.browser && { browserName: caps.browser }),
  }
})
