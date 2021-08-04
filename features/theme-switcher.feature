Feature: Theme switcher

  As I use dark mode, the blog should handle it but it should allow user to override theme with a switcher

  Scenario Outline: Switcher in <PageName> page
    Given I am on the <PageName> page
    Then I should see theme switcher
    And Website should be in light mode

    When I click theme switcher
    And Website should be in dark mode

    When I click theme switcher
    Then Website should be in light mode

    Examples:
      | PageName                                    |
      | home                                        |
      | webpack tag                                 |
      | react-redux-pitfalls-and-best-pratices post |