Feature: Post pages

  Scenario: Related post
    Given I am on the react-redux-pitfalls-and-best-pratices post page
    Then I should see 3 related posts

  Scenario: Lang switcher in translated articles
    Given I am on the react-redux-pitfalls-and-best-pratices post page
    Then I should see switch lang block

    When I click on lang switcher link
    Then I should be on react-redux-pieges-bonnes-pratiques post page

  Scenario: Post should have h1 element
    Given I am on the react-redux-pitfalls-and-best-pratices post page
    Then Page h1 should contain React/Redux: pitfalls and best practices

  Scenario: Table of content
    Given I am on the react-redux-pitfalls-and-best-pratices post page
    Then I should see a table of content
