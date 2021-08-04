const { Given, When, Then } = require('@cucumber/cucumber')

Given(/^I am on the home page$/, async () => {
  await browser.url(`/`)
})

Then(/^I should see a page title$/, async () => {
  await expect($('h1')).toBeExisting()
})
