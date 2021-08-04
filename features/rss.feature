Feature: Rss

  I want to list all articles in a RSS file to help my user be aware of new content.

  Scenario: List article pages
    Given I am on the rss page
    Then I should see more than one article listed

  Scenario: Rss feed listed in meta data
    Given I am on the home page
    Then I should see rss metadata tag