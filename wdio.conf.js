const headlessArgs = [...(process.env.WITH_HEAD ? [] : ['--headless'])]

exports.config = {
  specs: ['./features/**/*.feature'],
  exclude: [],
  maxInstances: 10,
  capabilities: [
    {
      maxInstances: 5,
      browserName: 'chrome',
      acceptInsecureCerts: true,
      'goog:chromeOptions': {
        args: [...headlessArgs, '--disable-gpu', '--disable-dev-shm-usage'],
      },
    },
    {
      maxInstances: 5,
      browserName: 'firefox',
      acceptInsecureCerts: true,
      'moz:firefoxOptions': {
        args: [...headlessArgs],
      },
    },
  ],
  logLevel: 'warn',
  bail: 0,
  baseUrl: 'http://localhost:9000',
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ['chromedriver', 'selenium-standalone'],
  framework: 'cucumber',
  reporters: ['spec'],
  specFileRetries: 1,
  cucumberOpts: {
    require: ['./features/step-definitions/*.steps.js'],
    backtrace: false,
    // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
    requireModule: [],
    // <boolean> invoke formatters without executing steps
    dryRun: false,
    // <boolean> abort the run on first failure
    failFast: false,
    // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
    format: ['pretty'],
    // <boolean> hide step definition snippets for pending steps
    snippets: true,
    // <boolean> hide source uris
    source: true,
    // <string[]> (name) specify the profile to use
    profile: [],
    // <boolean> fail if there are any undefined or pending steps
    strict: false,
    // <string> (expression) only execute the features or scenarios with tags matching the expression
    tagExpression: '',
    // <number> timeout for step definitions
    timeout: 60000,
    // <boolean> Enable this config to treat undefined definitions as warnings.
    ignoreUndefinedDefinitions: false,
  },
}
