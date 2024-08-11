import { expect, Locator, test  } from "@playwright/test";

test(`Auto Wait : Functionality`, async ({page}) => {

    //Wait for visibility
    await page.goto("https://www.leafground.com/waits.xhtml");
    
    
    // let card = page.locator(".card").filter({hasText:"Wait for Visibility"});
    // //Locator chaining
    // let button1 = card.getByRole("button").filter({hasText:"Click"});
    // await button1.click();
    // await expect(page.locator(".card").filter({hasText:"Wait for Visibility"}).getByRole("button",{name:"I am here"})).toBeVisible();

    // // Wait for Invisiblity
    // let card2 = page.locator(".card").filter({hasText:'Wait for Invisibility'});
    // let button2 = card2.getByRole("button",{name:"Click"}).click();
    // await expect(card2.getByRole("button",{name:"I am about to hide"})).toBeVisible({visible:false});
    // //instead, we can use '.tobehidden()'
    

    //Wait for Text Change
    let card3 = page.locator(".card").filter({hasText:'Wait for Text Change'});
    let button3 = card3.getByRole("button",{name:'Click'}).click();
    await expect(card3.getByRole("button",{name:'Did you notice?'})).toBeVisible({timeout:7000});
})