Feature: Sample Feature

  @demo
  Scenario Outline: 1. <TestID> Search external customers
    Given Get list of users from reqres.in
    When An admin user logs in to ncommerce site
    When Search user in customers list
    Then Verify if all users exist in customers list
    

    Examples:
      | TestID    | 
      | Demo_TC02 |            
