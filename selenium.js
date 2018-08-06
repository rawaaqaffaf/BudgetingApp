var webdriverio = require('webdriverio');

var options = {
    desiredCapabilities: {
        browserName: 'chrome'
    }
};

webdriverio
  .remote(options)
  .init()
  .url('https://budget.modus.app/#/budget')
  .saveScreenshot('BudgetApp.png') 
  .end();