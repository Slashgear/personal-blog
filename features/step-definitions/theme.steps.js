const { Then, When, Given } = require('@cucumber/cucumber')

Then(/^I should see theme switcher$/, async () => {
  await expect($('[data-testid="theme-switcher"]')).toBeDisplayedInViewport()
})

Then(/^Website should be in (\w+) mode$/, async (mode) => {
  const body = await $(`body.${mode}-mode`)
  return body.isExisting()
})

When(/^I click on (\w+) switcher$/, (theme) => {
  $(`[data-testid="theme-switcher"] input[value="${theme}"]`).click()
})

Given(/^I force light mode$/, async () => {
  await browser.execute(() => localStorage.setItem('darkMode', 'false'))
})
