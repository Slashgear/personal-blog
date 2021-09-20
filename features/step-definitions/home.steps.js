const { Given, Then, When } = require('@cucumber/cucumber')

Given(/^I am on the home page$/, async () => {
  await browser.url('/')
})

Then(/^I should see a page title$/, async () => {
  await expect($('h1')).toBeExisting()
})
Then(/^I should have a canonical defined$/, async () => {
  await expect($('link[rel="canonical"]')).toBeExisting()
})

Then(/^I should have links in footer$/, async () => {
  browser.waitUntil(async () => (await $$('footer a').length) > 0)
})

Then(/^Articles should have tags$/, async () => {
  await expect($('article [data-testid="tag"]')).toExist()
})

When(/^I click on first article link$/, async () => {
  await $('article a').click()
})

Then(
  /^I should be on an article page$/,
  { wrapperOptions: { retry: 2 } },
  async () => {
    expect(await browser.getUrl()).toMatch(/\/[a-zA-Z\-1-9]*\/$/)
  }
)

Then(/^I should not be on home page$/, async () => {
  expect(await browser.getUrl()).not.toEqual(/9000\/$/)
})
