import { chromium, test } from "@playwright/test";

test.only(`Multiple Browser Context`, async () => {
    const browser = await chromium.launch();
    
    /**Create multiple browser context and 
     * multiple page creation */
    const browserContext1 = await browser.newContext();
    const page1 = await browserContext1.newPage();
    const page2 = await browserContext1.newPage();
    await page1.goto("http://leaftaps.com/opentaps/control/main");
    await page2.goto("https://www.flipkart.com/");
    page2.close();
    page1.close();

   /* const browserContext2 = await browser.newContext();
    const page3 = await browserContext2.newPage();
    const page4 = await browserContext2.newPage();
    await page3.goto("http://leaftaps.com/opentaps/control/main");
    await page4.goto("https:login.salesforce.com");
    page3.close();
    page4.close();
    */



})