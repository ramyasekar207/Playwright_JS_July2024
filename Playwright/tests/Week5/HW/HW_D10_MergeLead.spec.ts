import { chromium, expect, test } from "@playwright/test";
import { link } from "fs";

test.only(`01_D10:ServiceNow Login page`, async ({context,page}) =>{

//Navigate into Leaftaps applicaion by using given credentials     
await page.goto("http://leaftaps.com/opentaps/control/main");
await page.getByLabel("Username").fill("Demosalesmanager");
await page.getByLabel("Password").fill("crmsfa");
await page.click(".decorativeSubmit");

//Click CRMSFA
await page.click(".crmsfa");
        
//Click Lead 
await page.getByRole("link",{name:'Leads'}).click();

//Click Merge Lead
await page.getByRole("link",{name:'Merge Leads'}).click();
await page.waitForTimeout(3000);
let title1= await page.title();
expect(title1).toEqual("Merge Leads | opentaps CRM");

//First lookup
const [FromLead_Selection] = await Promise.all([
    context.waitForEvent('page'),
    page.locator(".twoColumnForm td a").first().click()
])
await FromLead_Selection.locator('.x-grid3-body td a').first().click();

//Second lookup
const [ToLead_Selection] = await Promise.all([
    context.waitForEvent("page"),
    page.locator(".twoColumnForm td a").nth(1).click()
])
await ToLead_Selection.locator(".x-grid3-body td.x-grid3-td-partyId a").nth(1).click();


//Alert Handling
page.once('dialog', async dialog =>
{
console.log(`Alert Message : ${dialog.message()}`);
dialog.accept();
console.log(`Alert Accepted`);
})
await page.locator("//a[text()='Merge']").click();
await page.waitForTimeout(5000);
let title2 = await page.title();
expect(title2).toEqual("View Lead | opentaps CRM");

})