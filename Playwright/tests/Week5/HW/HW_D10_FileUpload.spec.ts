import {expect, test} from "@playwright/test";
import path from "path";

test(`01 File Upload: Single/Multiple upload`, async({ page}) => {
   //First Page
    // await page.goto("https://www.leafground.com/file.xhtml");

    // await page.locator(".card").filter({has:page.getByText("Basic Upload")})
    //         .locator("input[type='file']").
    //         // setInputFiles([path.join(__dirname,"index.html")]);
    //         setInputFiles([path.join(__dirname,"index.html")]);

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
    
    //Click on the Accounts application
    let value = 'Accounts';
    await page.getByPlaceholder("Search apps or items...").fill(value);
    await page.locator(`[data-label=${value}]`).click({timeout:12000});

    //click New Account link
    await page.locator("a[title=New]").click();

    //Enter Account details
    let Acc_Name ="RAccounts";
    await page.locator("input[name=Name]").fill(Acc_Name);
    //Rating == Warm
    await page.locator("//*[text()='Rating']/..//button").click();
    await page.locator("//lightning-base-combobox-item[@data-value='Warm']").click();
    //Type = Prospect
    await page.locator("//*[text()='Type']/..//button").click();
    await page.locator("//lightning-base-combobox-item[@data-value='Prospect']").click();
    //Industry = Banking
    await page.locator("//*[text()='Industry']/..//button").click();
    await page.locator("//lightning-base-combobox-item[@data-value='Banking']").click();
    
    //Click Save
    await page.locator("//button[@name='SaveEdit']").click();

    //Assertion
    let Act_title = await page.title();
    expect(Act_title).toEqual("New Account | Salesforce");

    let fileName = "index.html";
    await page.locator("input[type='file']").setInputFiles([path.join(__dirname,fileName)]);

   await expect(page.getByRole("button",{name:'Done'})).toBeEnabled({timeout:15000})
   await page.getByRole("button",{name:'Done'}).click();


 })