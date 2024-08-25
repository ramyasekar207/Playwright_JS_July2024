import { chromium, expect, test } from "@playwright/test";

test.only(`TC_1:Chrome: Lead to opportunity Conversion`, async ({context,page}) =>{
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

const [page2] = await Promise.all([
    context.waitForEvent("page"),
    page.click("//*[text()='Learn More']/..")

])

await page2.click("//button[text()='Confirm']");
let page2Title = await page2.title();
console.log(`Page 2 Title : ${page2Title}`);
expect(page2Title).toEqual("Service Cloud: Unified Customer Service Agent Console - Salesforce.com US");
})