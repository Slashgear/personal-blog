const { Given, Then } = require('@cucumber/cucumber')

Given(/^I am on the rss page$/, async () => {
  await browser.url(`/rss.xml`)
})

Then(/^I should see more than one article listed$/, async () => {
  expect(await $$('item').length).toBeGreaterThan(0)
})

Then(/^I should see rss metadata tag$/, function () {
  expect($('meta[type="application/rss+xml"]')).toExist()
})
