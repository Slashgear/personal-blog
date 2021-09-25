const { Given, Then, When } = require('@cucumber/cucumber')

Given(/^I am on the (.+) post page$/, async (post) => {
  await browser.url(`/${post}/`)
})

Then(/^I should see (\d+) related posts$/, async (count) => {
  browser.waitUntil(
    async () => (await $$('[data-testid="related-post"]').length) === count
  )
})

Then(/^I should see switch lang block$/, async () => {
  await expect($('#lang-switcher')).toExist()
})

Then(/^Page h1 should contain (.+)$/, async (title) => {
  browser.waitUntil(() => expect($('h1')).toHaveText(title))
})

When(/^I click on lang switcher link$/, async () => {
  $('#lang-switcher a').click()
})

Then(/^I should be on (.+) post page$/, async (page) => {
  browser.waitUntil(() => expect(browser).toHaveUrlContaining(page))
})

Then(/^I should see a table of content$/, async () => {
  browser.waitUntil(() => expect($('#table-of-content')).toExist())
})
