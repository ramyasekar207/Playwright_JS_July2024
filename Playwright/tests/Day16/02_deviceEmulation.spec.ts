import { chromium, devices, firefox, test } from "@playwright/test";

test('Mobile Emulator testing',async () => {
    
    // const myDevice = devices['Pixel 7'];
    const myDevice = devices['iPad Mini landscape'];
    const browser = await chromium.launch({headless :false});
     const browserContext = await browser.newContext({
        ...myDevice
     });
     const page = await browserContext.newPage();
     await page.goto("https://www.amazon.in/")

})