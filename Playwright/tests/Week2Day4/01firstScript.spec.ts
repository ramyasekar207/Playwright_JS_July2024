import { chromium, firefox, test, webkit } from "@playwright/test";

test(`Teset 1 - Chrome or edge`, async () => {
   //Browser instance
    const browser = await chromium.launch({headless: false, channel:"chrome"});
    // const browser = await chromium.launch({headless: false, channel:"msedge"});

    //browser conext
    const browserContext = await browser.newContext();

    //New Page
 const page = await browserContext.newPage();

 //Load url
 await page.goto("http://leaftaps.com/opentaps/control/main");

 //Similar like sleep in Java
 await page.waitForTimeout(2000);

 //Get the URL of the page
 const url = page.url();
 console.log(`URL : ${url}`);
 
 //Get the title of the page
  console.log(`Page title : ${await page.title()}`);
 

 //close the page first 
 await page.close();

 //then close browser context
 await browserContext.close();

 //Then close browser instance
await browser.close()
})

test(`Test2 - Firefox`, async () => {
    const browser = await firefox.launch({headless :false});
    const browserContext = await browser.newContext();
    const page = await browserContext.newPage();
    await page.goto("https:login.salesforce.com")
    await page.waitForTimeout(2000);
    await browser.close();
})


 test(`Test3 - Webkit`, async () => {
     const browser = await webkit.launch({headless :false});
     const browserContext = await browser.newContext();
     const page = await browserContext.newPage();
     await page.goto("https:login.salesforce.com")
     await page.waitForTimeout(2000);
 })