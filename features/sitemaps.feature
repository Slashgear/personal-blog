Feature: Sitemap

  SEO is a quite important subject on a blog page.
  This is why I wanted to expose all articles in a sitemap.

  Scenario: Sitemap should contain a lot of url
    Given I am on the sitemap page
    Then I should see more than 25 articles listed

  Scenario: Sitemap should be listed on home meta
    Given I am on the home page
    Then I should see sitemap metadata tag