import { chromium, devices, firefox, test } from "@playwright/test";

test('Dev Tool : Console Log',async ({page}) => {

    page.on('console',message => {
        console.log(`Message : ${message.type()} and ${message.text()}`);   
    })

    await page.goto(`https://www.redbus.in`)
    await page.waitForTimeout(5000)
    
})
