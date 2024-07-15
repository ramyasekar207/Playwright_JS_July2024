// 

import { chromium, test } from "@playwright/test";
test(`Launch the browser`, async () => {
    const browser =  await chromium.launch({headless: false});
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://login.salesforce.com");
})