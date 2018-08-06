Feature: Testing the Budget Page features 

Scenario: Test Adding a new category with a description and a value.
  Given I am on the budget page
  When I click the category dropdoown button
  When I add a description
  When I add a value 
  When I click Add button

Scenario: Test Adding a new category without a value.
  Given I am on the budget page
  When I click the category dropdoown button 
  When I add a description
  When I click Add button






 