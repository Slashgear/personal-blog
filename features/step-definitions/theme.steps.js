const { Then, When, Given } = require('@cucumber/cucumber')

Then(/^I should see theme switcher$/, async () => {
  await expect($('.react-toggle')).toBeDisplayedInViewport()
})

Then(/^Website should be in (\w+) mode$/, async (mode) => {
  const body = await $(`body.${mode}-mode`)
  return body.isExisting()
})

When(/^I click theme switcher$/, () => {
  $('.react-toggle').click()
})

Given(/^I force light mode$/, async () => {
  await browser.execute(() => localStorage.setItem('darkMode', 'false'))
})
