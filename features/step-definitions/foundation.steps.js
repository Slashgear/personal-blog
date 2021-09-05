const { Then, When } = require('@cucumber/cucumber')

Then(/^I should see a foundation block$/, async () => {
  await expect($('#foundation')).toExist()
})

Then(/^Foundation block should be a link to (.+)$/, async (url) => {
  expect($('#foundation')).toHaveLink(url)
})

When(/^I click on the foundation block$/, () => {
  $('#foundation').click()
})

Then(/^I should be on foundation page$/, () => {
  expect(browser).toHaveUrlContaining('abbe-pierre')
})

Then(/^I should see a donation button$/, async () => {
  await expect($('#donate-button')).toExist()
})
