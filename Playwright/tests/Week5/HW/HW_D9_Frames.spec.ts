import { expect, test } from "@playwright/test";

test(`01 Frames: Leafground: Click me insdide Frame`, async({page})=>{
   await page.goto("https://leafground.com/frame.xhtml");
   let card1 = page.locator(".card").filter({hasText:'(Inside frame)'});
   await card1.frameLocator("iframe").locator('#Click').click();
   let afterClick = await card1.frameLocator("iframe").locator('#Click').innerText();
   expect(afterClick).toEqual('Hurray! You Clicked Me.');
    
})

test(`02 Frames: Get the local cont of Frames`, async({page})=>{
    await page.goto("https://leafground.com/frame.xhtml");
    let count = page.frames().length;
    console.log(`Total iframe count in this page : ${count-1}`);

})

test.only(`03 Frames: Nested Frames`, async({page}) => {
    await page.goto("https://leafground.com/frame.xhtml");
    let nestedBlock = page.locator(".card").filter({hasText:'(Inside Nested frame)'});

    await nestedBlock.frameLocator("iframe").frameLocator("#frame2").locator("#Click").click();

    let afterClick = await nestedBlock.frameLocator("iframe").frameLocator("#frame2").locator("#Click").innerText();
    expect(afterClick).toEqual('Hurray! You Clicked Me.');
})