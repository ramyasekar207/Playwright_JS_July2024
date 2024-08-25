import { chromium, expect, test } from "@playwright/test";
import userCredential from "../../data/login.json";
import fs from "fs";
import path from "path";

//If JSON has multiple data gowith foreach statement
userCredential.forEach(element => {
    test(`Salesforce : Test to read the data from JSON file : ${element.SF_USER_NAME}`, async ({page,context}) => {

        /**Login to Salesforce**/
        
        await page.goto(element.SF_URL);
        await page.locator("#username").fill(element.SF_USER_NAME);
        await page.locator("#password").fill(element.SF_PASSWORD);
        await page.waitForTimeout(5000);
        await page.locator("#Login").click();
        await page.waitForTimeout(5000);
        console.log(`Page URL : ${page.url()}`);
        console.log(`Page Title : ${await page.title()}`);
        
        })
});


//To load the data from JSON before the test starts
//It will not support large number of complesx data
const userData = JSON.parse(fs.readFileSync(path.join(__dirname,'../../data/login.json'),'utf-8'))
for (const element of userData) {
    test.only(`To read dynamic data synchronously : ${element.SF_USER_NAME}`, async ({page}) => {
        await page.goto(element.SF_URL);
        await page.locator("#username").fill(element.SF_USER_NAME);
        await page.locator("#password").fill(element.SF_PASSWORD);
        await page.waitForTimeout(5000);
        await page.locator("#Login").click();
        await page.waitForTimeout(5000);
        console.log(`Page URL : ${page.url()}`);
        console.log(`Page Title : ${await page.title()}`);
})
}


