const { Given, Then } = require('@cucumber/cucumber')

Given(/^I am on the sitemap page$/, async () => {
  await browser.url(`/sitemap-pages.xml`)
})

Then(/^I should see more than (\d+) articles listed$/, async (count) => {
  browser.waitUntil(async () => (await $$('tbody tr').length) > count)
})

Then(/^I should see sitemap metadata tag$/, function () {
  expect($('link[rel="sitemap"]')).toExist()
})
