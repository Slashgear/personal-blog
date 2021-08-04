const { Given } = require('@cucumber/cucumber')

Given(/^I am on the (\w+) tag page$/, async (tag) => {
  await browser.url(`/en/${tag}`)
})

Given(
  /^I should see a (.+) element with "(.+)" as content$/,
  async (element, content) => {
    await expect($(element)).toHaveText(content)
  }
)
