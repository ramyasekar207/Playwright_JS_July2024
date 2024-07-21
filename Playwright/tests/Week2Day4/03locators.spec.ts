import { test } from "@playwright/test";

test(`Using Locators get into the application`, async ({page})=> {
    // const browser = await chromium.launch();
    // const browserContext = await browser.newContext();
    // const page = await browserContext.newPage();
    await page.goto("http://leaftaps.com/opentaps/control/main");

    //Locators
    await page.locator("#username").fill("demosalesmanager");
    await page.locator("#password").fill("crmsfa");
    await page.locator(".decorativeSubmit").click();
    await page.waitForTimeout(5000);


})