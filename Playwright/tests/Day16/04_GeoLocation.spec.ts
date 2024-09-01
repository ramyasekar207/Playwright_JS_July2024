import { chromium, devices, firefox, test } from "@playwright/test";

test('Geo Location',async ({}) => {
    const browser = await chromium.launch({headless :false});
     const browserContext = await browser.newContext({
       geolocation: {
        latitude :46.8182 ,
        longitude : 8.2275
       },
       permissions:['geolocation']
     });
     const page = await browserContext.newPage();
     await page.goto("https://maps.google.com/");
     await page.waitForTimeout(5000);
     await page.click('#sVuEFc');
     await page.waitForTimeout(10000);
     


})