Feature: Fundation

  I decided to add a message on each page of my blog in order to present a fundation I personally support.

  Scenario Outline: Foundation block in <PageName> page
    Given I am on the <PageName> page
    Then I should see a foundation block
    And Foundation block should be a link to https://www.fondation-abbe-pierre.fr/

    Examples:
      | PageName                                    |
      | home                                        |
      | react-redux-pitfalls-and-best-pratices post |
