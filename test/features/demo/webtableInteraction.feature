Feature: Sample Feature

@demo
  Scenario Outline: 1. Sample Scenario
    # Given Login to inventory webapp
    Given As a standard user Login to inventory webapp
    Then Inventory page should show <noOfProducts> product
    Then Product price should be more than 200
    

    Examples:
      | TestcaseID | noOfProducts|
      | Demo_TC02  | 6           |
