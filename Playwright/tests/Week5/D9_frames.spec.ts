import { test } from "@playwright/test";

test(`01 Frame : Click inside the frame`, async ({page}) => {
    // await page.goto("https://www.leafground.com/frame.xhtml");

    await page.goto("https://www.oneindia.com/")
    
    //Number of frames in a page
    let frames = page.frames();

    console.log(`Frames count : ${frames.length}`);
    
    for(let frame of frames)
    {
        let title = await frame.title();
        console.log(`Frame Title: ${title}`);     
    }
    await page.waitForTimeout(5000);
    
})

test(`02 Frame : Leafground : Click inside the frame`, async ({page}) => {
    await page.goto("https://www.leafground.com/frame.xhtml");
    
    //Number of frames in a page
    let frames = page.frames();

    console.log(`Frames count : ${frames.length}`);
    
    for(let frame of frames)
    {
        let title = await frame.title();
        console.log(`Frame Title: ${title}`);     
    }
    await page.waitForTimeout(5000);
    
})

test(`03 Frame : Frames using frame object`, async ({page}) => {
    await page.goto("https://www.leafground.com/frame.xhtml");

    //Interact with the first iFrame using URL
    let frame = page.frame({url:"https://www.leafground.com/default.xhtml"})
    frame?.click("button#Click");
    
    //Using Index
    let frames = page.frames();
    await frames[4].click("button#Click")
})

test.only(`04 Frame : Frame using FrameLocator`, async ({page}) => {
    await page.goto("https://www.leafground.com/frame.xhtml");

    //Using FrameLocator
    page.frameLocator("iframe").first().locator("button#Click").click();
    
    //Using nested frames using FrameLocator
    let card = page.locator(".card").filter({hasText:"Inside Nested Frame"});
    await card.frameLocator("iframe").frameLocator("iframe").locator("button#Click").click();

})