Feature: Footer

  Scenario Outline: Footer in <PageName> page
    Given I am on the <PageName> page
    Then I should have links in footer

    Examples:
      | PageName    |
      | home        |
      | webpack tag |
