Feature: Sample Feature

  @demo
  Scenario Outline: 1. <TestID> Sample Scenario
    # Given Login to inventory webapp
    Given As a standard user Login to inventory webapp
      | Usertype    | Username                |
      | NormalUser  | standard_user           |
      | ProblemUser | problem_user            |
      | PerfUser    | performance_glitch_user |
    Then Inventory page should show <noOfProducts> product
    Then Product price should be more than 200

    Examples:
      | TestID    | noOfProducts |
      | Demo_TC02 |            6 |
