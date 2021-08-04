const { Then, When } = require('@cucumber/cucumber')

Then(/^I should see theme switcher$/, async () => {
  await expect($('.react-toggle')).toBeDisplayedInViewport()
})

Then(/^Website should be in (\w+) mode$/, async (mode) => {
  await expect($(`body.${mode}-mode`)).toExist()
})

When(/^I click theme switcher$/, function () {
  $('.react-toggle').click()
})
