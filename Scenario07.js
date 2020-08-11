var webdriver = require('selenium-webdriver');
var assert = require('assert');
const { title } = require('process');
function searchTextOnGoogle()
{
 var driver=new webdriver.Builder().forBrowser('chrome').build();

 driver.get('https://www.opencart.com/').then(function()
 {
	 //page title 

 //Title Varification test
   
    	driver.getTitle().then(function(title)
	{
	setTimeout(function()
		{
		console.log("Title is :"+title);
		//Positive Scenario title varification
		assert.equal('OpenCart - Open Source Shopping Cart Solution',title,"\nActual title and expected title is not same!!\n");

		/*Negative scenario title varification
		assert.equal('OpenCart - Open Source Shopping Cart Solution!!!',title,"\nActual title and expected title is not same!!\n");
		*/
        
   //if(title="OpenCart - Open Source Shopping Cart Solution")
	  // {
	//	console.log("pass");
		// }
		//driver.quit();
		},10000); 
		
		
	});

	//Login Test 
	//valid login text
	/*driver.findElement(webdriver.By.linkText('Login')).click().then(function()
   {
	driver.findElement(webdriver.By.id('input-email')).sendKeys("dipak78@abc.com");
	driver.findElement(webdriver.By.id('input-password')).sendKeys("dipak123");
	driver.findElement(webdriver.By.className('btn btn-primary btn-lg hidden-xs')).click();

	console.log("Logged in successfully"); 
   });
   */

   //invalid login test
   driver.findElement(webdriver.By.linkText('Login')).click().then(function()
   {
	driver.findElement(webdriver.By.id('input-email')).sendKeys("dipak78@a12bc.com");
	driver.findElement(webdriver.By.id('input-password')).sendKeys("dipak1234");
	driver.findElement(webdriver.By.className('btn btn-primary btn-lg hidden-xs')).click();

	console.log("Loging faild\n"); 
	
	//Error varification
	
	//var errorMessage=driver.findElement(webdriver.By.xpath('//div[@class='+'alert alert-danger'+']')).getText();

	//console.log("Error message is :"+errorMessage); 
	//assert.equal('No match for E-Mail and/or Password.',errorMessage,"\nActual title and expected title is not same!!\n");
	
   });
//input#FirstName



});

}
searchTextOnGoogle();    