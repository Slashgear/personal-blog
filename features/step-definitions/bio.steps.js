const { Then } = require('@cucumber/cucumber')

Then(/^I should see personal bio$/, async () => {
  await expect($('#bio')).toExist()
})
Then(/^The bio should contains image and links$/, async () => {
  await expect($('#bio img')).toExist()
  expect(await $$('#bio a').length).toBeGreaterThan(1)
})
