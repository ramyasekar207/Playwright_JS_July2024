import { expect, test } from "@playwright/test";

test(`01_Auto waits : Wait for Visibility`,async ({page}) => {
    
    page.goto("https://leafground.com/waits.xhtml");

    let card1 =  page.locator(".card").filter({hasText:'Wait for Visibility'});
    await card1.getByRole("button",{name:'Click'}).click();

    let button = await expect(card1.getByRole("button",{name:'I am here'})).toBeVisible({timeout:10000});
})

test(`02_Auto waits : Wait for Invisibility`, async({page}) => {
    
    page.goto("https://leafground.com/waits.xhtml");

    let card2 =  page.locator(".card").filter({hasText:'Wait for Invisibility'});
    await card2.getByRole("button",{name:'Click'}).click();

    let button = await expect(card2.getByRole("button",{name:'I am about to hide'})).toBeHidden({timeout:5000});

})

test(`03_Auto waits : Wait for Clickability`, async({page}) => {
    
    page.goto("https://leafground.com/waits.xhtml");

    let card3 =  page.locator(".card").filter({hasText:'Wait for Clickability'});
    await card3.getByRole("button",{name:'Click First Button'}).click();

    let button = await expect(card3.locator(".ui-growl-item").last()).toBeHidden({timeout:8000})

})

test(`04_Auto waits : Wait for Text Change`, async({page}) => {
    
    page.goto("https://leafground.com/waits.xhtml");

    let card3 =  page.locator(".card").filter({hasText:'Wait for Text Change'});
    await card3.getByRole("button",{name:'Click'}).click();

    let button = await expect(card3.getByRole("button",{name: 'Did you notice?'})).toBeVisible({timeout:5000})

})