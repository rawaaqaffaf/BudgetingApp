const { Given } = require('cucumber')
const { When } = require('cucumber');

var element = $('[value="car"]');

  // *** belongs to Yahoo serch feature
  Given(/^I am on the budget page$/, function() {
    browser.url('https://budget.modus.app/#/budget')
  });

   When(/^I click the category dropdoown button$/, function() {
   	 browser.selectByValue('//*[@id="root"]/main/section/table/tfoot/tr/td/form/div[1]/select',10);
  });
   

   When(/^I add a description$/, function() {
   	  browser.setValue('//*[@id="root"]/main/section/table/tfoot/tr/td/form/div[2]/input', 'Income');
  });

   When(/^I add a value$/, function() {
   	  browser.setValue('//*[@id="root"]/main/section/table/tfoot/tr/td/form/div[3]/input', '2000');
  });
   
   When(/^I click Add button$/, function() {
   	   browser.click('//*[@id="root"]/main/section/table/tfoot/tr/td/form/div[3]/button');
  }); 



   

  
   
  