const { Then } = require('@cucumber/cucumber')

Then(/^I should have more than (\d+) articles listed$/, async (count) => {
  browser.waitUntil(async () => (await $$('article').length) > count)
})
