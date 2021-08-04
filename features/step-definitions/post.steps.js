const { Given, Then } = require('@cucumber/cucumber')

Given(/^I am on the (.+) post page$/, async (post) => {
  await browser.url(`/${post}/`)
})

Then(/^I should see (\d+) related posts$/, async (count) => {
  browser.waitUntil(async () => {
    ;(await $$('[data-testid="related-post"]').length) === count
  })
})

Then(/^I should see switch lang block$/, async () => {
  await expect($('#lang-switcher')).toExist()
})

Then(/^Page h1 should contain (.+)$/, async (title) => {
  await expect($('h1')).toHaveText(title)
})
