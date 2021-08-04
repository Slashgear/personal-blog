Feature: Tag pages

  In order to group article, I wanted to add tags that allow me to generate custom pages.

  Scenario: Page content
    Given I am on the webpack tag page
    And I should have more than 5 articles listed
    And I should see a h1 element with "#webpack" as content
