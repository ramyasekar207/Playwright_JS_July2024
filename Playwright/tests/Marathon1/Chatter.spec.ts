import { chromium, expect, test } from "@playwright/test";

test.only(`TC_1:Chrome: Lead to opportunity Conversion`, async ({page}) =>{
    page.setDefaultTimeout(100000);
/**Login to Salesforce**/
await page.goto("https://login.salesforce.com/");
await page.locator("#username").fill("ramya@testleaf.com");
await page.locator("#password").fill("Password@1");
await page.waitForTimeout(5000);
await page.locator("#Login").click();
await page.waitForTimeout(5000);
console.log(`Page URL : ${page.url()}`);
console.log(`Page Title : ${await page.title()}`);


/**Click AppLauncher**/
await page.click(".appLauncher button");
await page.getByText("View All").click();
/**Click on the Service application**/
await page.getByPlaceholder("Search apps or items...").fill("Service",{timeout:10000});
await page.locator("[role='application'] one-app-launcher-app-tile").first().click({timeout:8000});
/**Click Case from Service dashboard**/
await page.locator("//*[text()='Cases']/..").click();
/**Click on the New button to create a lead.**/
await page.locator("//a[@title='New']").click({timeout:3000});
/**Enter Case Details**/
await page.click("//button[@aria-label='Case Origin']")
await page.click("//span[text()='Phone']");
/**Save**/
await page.click("//button[text()='Save']");
/**Assert the Toast message**/
await expect(page.locator('.toastMessage')).toBeVisible();



/**Add new Contact details**/
await page.click("//*[@title='Edit Contact Name']/span");
await page.click("//input[@placeholder='Search Contacts...']");
await page.click("[title='New Contact']")
await page.locator("//button[@name='salutation']").click();
await page.locator("//span[text()='Mrs.']").click();
/**Enter First & Last Name**/
let fName = "Ramya S Dinesh";
let lName = "Contact";
await page.locator('[name=firstName]').fill(fName,{timeout:5000});
await page.locator('[name=lastName]').fill(lName,{timeout:5000});
/**Save the Details**/
await page.locator("//*[text()='Contact Information']/../..//following::*[@name='SaveEdit']").click();
/**Assert the Toast message**/
await expect(page.locator('.toastMessage')).toBeVisible();

await page.waitForTimeout(5000);

/****Add new Account details****/
await page.click("//input[@placeholder='Search Accounts...']");
await page.click("[title='New Account']");
/**Enter Account Name and Act Number**/
await page.locator('[name=Name]').fill('RamyaDinesh Account',{timeout:5000});
await page.locator("[name='AccountNumber']").fill('980214751247');
await page.locator("//*[text()='Rating']/..//button").click();
await page.locator("//lightning-base-combobox-item[@data-value='Hot']").click();
/**Save the Details**/
await page.locator("//*[text()='Account Information']/../..//following::*[@name='SaveEdit']").click();
/**Assert the Toast message**/
await expect(page.locator('.toastMessage')).toBeVisible();
/*** Add Case details ***/
await page.locator("//*[text()='Priority']/..//button").click();
await page.locator("//lightning-base-combobox-item[@data-value='High']").click();
/*** Case Orgin ***/
await page.locator("//*[text()='Case Origin']/..//button").click();
await page.locator("//lightning-base-combobox-item[@data-value='Email']").click();
/***Enter Subject Details */
await page.locator("[name='Subject']").fill("Product Return Request");
await page.locator("//label[text()='Description']/..//textarea").fill("Requesting a return for a defective product");
await page.click("//button[@name='SaveEdit']");


/** Click the edit icon */
await page.locator("//*[@field-label='Status']//button/span[contains(@class,'inline-edit-trigger-icon')]").click({timeout:5000});
/***Edit the status and change it to 'Escalated' */
await page.locator("//*[text()='Status']/..//button").click();
await page.locator("//lightning-base-combobox-item[@data-value='Escalated']").click();
await page.click("//button[@name='SaveEdit']",{timeout:3000});
await page.waitForTimeout(10000);
await page.reload();


/**Share an update details */
await page.locator("//*[text()='Share an update...']").dblclick({timeout:3000});
await page.fill("//*[@data-placeholder='Share an update...']/p","update comments here..",{timeout:3000});
await page.waitForTimeout(5000);
await page.click("//button[text()='Share']");
await page.waitForTimeout(3000);

let share = await page.locator("//*[@data-type='TextPost']//div[contains(@data-aura-class,'forceChatterFeedBodyText')]").first().innerText();
expect(share).toEqual("update comments here..");










})




