# Application to be tested:
Budgeting App application.

# Description of the Application:
It’s a web based budgeting app built with Production-ready React + Webpack architecture implemented on consumer web apps of some of the most successful enterprises in the world. Perceived performance and development experience are key factors in this setup. You can use this code base for learning or to scaffold your mission-critical project.
The is a simple budget management application. It tracks inflow and outflow, shows remaining budget, and interesting reports with charts. As such, it offers more features than the usual Todo App.
Budgeting app is a showcase project that demonstrates important decisions in architecture and development of a modern React application.
Feel free to use it as a reference app or a starter kit.

# Browser used in testing:
Chrome browser.

# App features: 

This app has 2 basic features:
1.Budget app feature where you can add your inflow and outflow values in categories, give the categories a description and add it to your list where you can a result of your working balance  calculated by (Total Inflow – Total Outflow) values.
2.Second feature is the reports : 
Where you can sort out your total Inflow vs your total Outflow.
Sorting out your spending based on the category.

# Conditions :
1. Try adding a category without assigning a value.
2. Try to add a category without adding a description.
3. Try adding a description with special chars, numbers.
4. Try adding a word in the value box.
5. Click the add button.
6. Reload the page and check if those values where added.
For the Reports feature:
Check if report value matches the values from the inflow, outflow
Make sure all category values are added from the table. (Not all of them are shwoing).

# Test Cases:
Now we will build test cases to check all the scenarios introduced above. 

Test case 1: 
1. Launching the Budgeting login page URL.
2. Pick the Budget tab.
3. From the Category dropdown, select a category.
4. Fill a description in the Description text box.
5. Fill in the amount of money in the value text box.
6. Click on the ADD button.
7. Check if the new item was added successfully.

Test Case 2: 
1. Launching the Budgeting login page URL.
2. Pick the Budget tab.
3. From the Category dropdown, select a category.
4. Leave the description text box empty.
5. Fill in the amount of money in the value text box.
6. Click on the ADD button.
7. Check if the new item was added successfully.

Test Case 3:
1. Launching the Budgeting login page URL.
2. Pick the Budget tab.
3. From the Category dropdown, select a category.
4. Fill a description in the Description text box.
5. Leave the value box empty
6. Click on the ADD button.
7. Check if the new item was added successfully.

Test Case 4:
1. Launching the Budgeting login page URL.
2. Pick the Budget tab.
3. From the Category dropdown, select a category.
4. Fill a description in the Description text box with special chars.
5. Try adding a word in the value box.
6. Click on the ADD button.
7. Check if the new item was added successfully.

Test Case 5:
1. Launching the Budgeting login page URL.
2. Pick the Budget tab.
3. From the Category dropdown, select a category.
4. Fill a description in the Description text box.
5. Try adding a word in the value box.
6. Click on the ADD button.
7. Check if the new item was added successfully.
Test Case 6:
1. Launching the Budgeting login page URL.
2. Pick the Budget tab.
3. From the Category dropdown, select a category where it’s an inflow.
4. Fill a description in the Description text box.
5. Try adding a word in the value box.
6. Click on the ADD button.
7. Check if the new item was added successfully and the value showing in Green and with a positive value.

Test Case 7: 
1. Launching the Budgeting login page URL.
2. Pick the Budget tab.
3. From the Category dropdown, select a category where it’s an Outflow.
4. Fill a description in the Description text box.
5. Try adding a word in the value box.
6. Click on the ADD button.
7. Check if the new item was added successfully and the value showing in Red and with a negative value.

Test case 8: 
1. Launching the Budgeting login page URL.
2. Pick the Budget tab.
3. From the Values tab, sum all values in red (outflow) and sum all values in green (Inflow) .
4. Calculate the Working Balance (Total Inflow- Total Outflow) and double if it matches the value in the working balance box.

Test Case 9:
1. Launching the Budgeting login page URL.
2. Click the Reports tab.
3. Click the Inflow vs outflow tab.
4. Check if the chart line values for the total Inflow and Total Outflow matches the numbers your added in your budget tab.
5. 

Test Case 10:
1. Launching the Budgeting login page URL.
2. Click the Reports tab.
3. Click the Spending by Category tab.
4. Check if the pie chart categories values showing matches the numbers your added in your budget tab.
5. Check that all categories added in the budget tab, are showing on the pie chart on the Reports tab.


9. close the tab.
10. Move to the chart tab.
11.Check of the ammuont added by you is showing in the pie chart

 
 # How to run the test cases?
 1. Clone the reposotiry to your local machine.
 2. change the directory to your local cloned folder.
 3.open a command line interface.
 4.make sure you are on the root directory of the folder cloned.
 5.run npm run test.
 
 All tests will be run for you!
