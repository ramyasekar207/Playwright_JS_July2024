import { test } from "@playwright/test";

test(`01: Dialog: Simple Alert`, async ({page}) => {
    await page.goto("https://www.leafground.com/alert.xhtml");
    
    //Simple Dialog : click first element
    await page.locator("//*[text()='Show']").first().click();

    //Confirm Dialog
    await page.locator(".card").filter({hasText:"Confirm Dialog"}).locator("button").filter({hasText:"Show"}).click();

    //Prompt Dialog
    let prompt =  page.locator(".card").filter({hasText:"Prompt Dialog"});
    await prompt.click();
    await prompt.locator("button").filter({hasText:"Show"}).click();
})

test(`02: Test to handle using event listeners`,async ({page}) => {
  
    await page.goto("https://www.leafground.com/alert.xhtml");

    page.on("dialog", async dialog => {
        const message = dialog.message();
        console.log(`Simple Alert Message : ${message}`);
        const type = dialog.type();
        console.log(`Type of Alert : ${type}`);
        if(type === "Confirm")
        {
            await dialog.accept();
        }
        else if( type==="Prompt")
        {
            await dialog.accept("Alert Accepted")
        }
        else{
            await dialog.dismiss();
        }     
    })

    //Simple Dialog : click first element
    await page.locator("//*[text()='Show']").first().click();

    //Confirm Dialog
    await page.locator(".card").filter({hasText:"Confirm Dialog"}).click();

    //Prompt Dialog
    let prompt =  page.locator(".card").filter({hasText:"Prompt Dialog"});
    await prompt.click();
    await prompt.locator("button").filter({hasText:"Show"}).click();

})

test.only(`03: Test to handle specific dialogs`,async ({page}) => {

    await page.goto("https://www.leafground.com/alert.xhtml");

    page.once("dialog", async dialog => {
        const message = dialog.message();
        console.log(`Alert Message : ${message}`);
        const type = dialog.type();
        console.log(`Type of Alert : ${type}`);
        dialog.accept();
    })

    //Simple Dialog : click first element
    await page.locator("//*[text()='Show']").first().click();

    page.once("dialog", async dialog => {
        const message = dialog.message();
        console.log(`Alert Message : ${message}`);
        const type = dialog.type();
        console.log(`Type of Alert : ${type}`);
        dialog.accept("TTTT");
    })

    //Prompt Dialog
    let prompt =  page.locator(".card").filter({hasText:"Prompt Dialog"});
    await prompt.click();
    await prompt.locator("button").filter({hasText:"Show"}).click();

    page.once("dialog", async dialog => {
        const message = dialog.message();
        console.log(`Alert Message : ${message}`);
        const type = dialog.type();
        console.log(`Type of Alert : ${type}`);
        dialog.dismiss();
    })


    //Confirm Dialog
    await page.locator(".card").filter({hasText:"Confirm Dialog"}).
    locator("button").filter({hasText:"Show"}).click();

    
    

})