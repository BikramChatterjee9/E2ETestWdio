Feature: Sample Feature

@demo
  Scenario Outline: 1. Sample Scenario
    Given google page is opened
    When search with <searchItem>
    Then click on first link
    And url should match <searchItem>

    Examples:
      | TestcaseID | searchItem | searchItem            |
      | Demo_TC01  | wdio       | https://webdriver.io/ |
