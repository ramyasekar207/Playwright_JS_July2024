import { chromium, expect, test } from "@playwright/test";
import dotenv from "dotenv";
import path from "path";

const environment = process.env.NODE_ENV || 'testing'
const env_path = path.join(__dirname,`../../data/${environment}`)
dotenv.config({path:env_path});
test(`Salesforce : Test to read the data from env file`, async ({page,context}) => {

    /**Login to Salesforce**/
const sf_url = process.env.SF_URL as string;
const sf_username = process.env.SF_USER_NAME;
const sf_password = process.env.SF_PASSWORD;
await page.goto(sf_url);
await page.locator("#username").fill(sf_username);
await page.locator("#password").fill(sf_password);
await page.waitForTimeout(5000);
await page.locator("#Login").click();
await page.waitForTimeout(5000);
console.log(`Page URL : ${page.url()}`);
console.log(`Page Title : ${await page.title()}`);

})