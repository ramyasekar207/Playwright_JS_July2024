import { chromium, expect, test } from "@playwright/test";
import fs from "fs";
import path from "path";
import { parse } from "csv-parse/sync";

//To load the data from JSON before the test starts
//It will not support large number of complesx data
const elements = parse(fs.readFileSync(path.join(__dirname,'../../data/login.csv')),{
    columns:true,//ignore the first row, ans start from secnd row
    skip_empty_lines:true

})
for (const element of elements) {
    test.only(`To read data from CSV file : ${element.Id}`, async ({page}) => {
        await page.goto(element.url);
        await page.locator("#username").fill(element.username);
        await page.locator("#password").fill(element.password);
        await page.waitForTimeout(5000);
        await page.locator("#Login").click();
        await page.waitForTimeout(5000);
        console.log(`Page URL : ${page.url()}`);
        console.log(`Page Title : ${await page.title()}`);
})
}


