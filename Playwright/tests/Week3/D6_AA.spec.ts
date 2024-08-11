import { Locator, test  } from "@playwright/test";

test(`Salesforce : Create Lead`, async ({page}) => {

    await page.goto("http://leaftaps.com/opentaps/control/main");

    //Enter Username
    await page.getByLabel("Username").fill("demosalesmanager",{timeout:10000});


    //Using Xpath 
    await page.fill("//input[@id='password']",'crmsfa');

    //Submit 
    page.click(".decorativeSubmit");
    await page.waitForTimeout(5000);

    //General Text - Syntax
    await page.locator("text=CRM/SFA").click();

})