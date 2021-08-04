const { Then } = require('@cucumber/cucumber')

Then(/^I should see a foundation block$/, async () => {
  await expect($('#foundation')).toExist()
})

Then(/^Foundation block should be a link to (.+)$/, async (url) => {
  expect($('#foundation')).toHaveLink(url)
})
