import { chromium, expect, test } from "@playwright/test";

test.only(`TC_1:Chrome: Lead to opportunity Conversion`, async ({page}) =>{
    page.setDefaultTimeout(20000);
//Login to Salesforce
// const browser = await chromium.launch({headless: false});
// const browserContext = await browser.newContext();
// const page = await browserContext.newPage();
await page.goto("https://login.salesforce.com/");
await page.locator("#username").fill("ramya@testleaf.com");
await page.locator("#password").fill("Password@1");
await page.waitForTimeout(5000);
await page.locator("#Login").click();
await page.waitForTimeout(5000);
console.log(`Page URL : ${page.url()}`);
console.log(`Page Title : ${await page.title()}`);


//Click AppLauncher
await page.click(".appLauncher button");
await page.getByText("View All").click();

//Click on the Marketing application
await page.getByPlaceholder("Search apps or items...").fill("Marketing");
await page.locator("[role='application'] one-app-launcher-app-tile").click({timeout:12000});

//Click Lead from Marketing dashboard
await page.locator("[title='Leads']").click();

//Click on the New button to create a lead.
await page.locator("[name='New']").click({timeout:5000});

//Enter Salutation - 
/* This is also Working
let salutation = await page.locator('[name=salutation]').click();
await page.keyboard.press('ArrowDown');
await page.keyboard.press('Enter')
*/

//Enter Salutation
await page.locator("//button[@name='salutation']").click();
await page.locator("//span[text()='Mrs.']").click();

//Enter First & Last Name
let fName = "Ramya S";
let lName = "Dinesh";
await page.locator('[name=firstName]').fill(fName,{timeout:5000});
await page.locator('[name=lastName]').fill(lName,{timeout:5000});

//Company
await page.locator('[name=Company]').fill("RBS");

//Save the Details
await page.locator('[name=SaveEdit]').click();

console.log(`After Lead creation : ${await page.title()}`);

//Assert verify the page title

expect(await page.title()).toEqual(`New Lead | Salesforce`);

await page.locator("//lightning-button-menu//*[text()='Show more actions']").last().click();

await page.keyboard.press('ArrowUp')
await page.keyboard.press('Enter')

await page.waitForTimeout(3000);

//Convert the created Lead to Opportunity
expect(await page.locator(".modal-header h1").innerText()).toEqual("Convert Lead");

//Enter the opportunity details
await page.click("//*[text()='Opportunity']/..//lightning-primitive-icon");
await page.locator("//*[text()='Opportunity Name']/../../input").fill("RBS-Opportunity",{timeout:20000});

await page.getByRole("button",{name:'Convert'}).click();

let lead_conversion = await page.locator(".panel.runtime_sales_leadConvertedConfirmationDesktop h2").innerText({timeout:2000});

console.log(`${lead_conversion}`);

expect(lead_conversion).toEqual("Your lead has been converted");

await page.click("//button[text()='Go to Leads']");

// expect(await page.title()).toEqual("Lead Intelligence View | Leads | Salesforce");

await page.locator("//*[text()='Opportunities']/..").click();

await page.fill("[name='Opportunity-search-input']","RBS");
await page.keyboard.press("Enter");

let opp_data = page.locator("//tbody/tr/th//a[@title='RBS-Opportunity']");
let count = await opp_data.count();
expect(count).toBeGreaterThan(1);

})




