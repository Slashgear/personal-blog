Feature: Blog home page

  I want to keep a dedicate home page by language in order to list all articles available in this language.

  Scenario: Page title
    Given I am on the home page
    Then I should see a page title

  Scenario: Metadata
    Given I am on the home page
    Then I should have a canonical defined

  Scenario: Article list
    Given I am on the home page
    Then I should have more than 10 articles listed
    And Articles should have tags

    When I click on first article link
    Then I should be on an article page
    And I should not be on home page