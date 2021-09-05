Feature: Foundation

  I decided to add a message on each page of my blog in order to present a foundation I personally support.

  Scenario Outline: Foundation block in <PageName> page
    Given I am on the <PageName> page
    Then I should see a foundation block

    When I click on the foundation block
    Then I should be on foundation page
    And I should see a donation button

    Examples:
      | PageName                                    |
      | home                                        |
      | react-redux-pitfalls-and-best-pratices post |
