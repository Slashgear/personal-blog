Feature: Bio

  Scenario Outline: Display bio in <PageName> page
    Given I am on the <PageName> page
    Then I should see personal bio
    And The bio should contains image and links

    Examples:
      | PageName                                    |
      | home                                        |
      | react-redux-pitfalls-and-best-pratices post |