import { Locator, expect, test } from "@playwright/test";

test(`01_Button : Title change on button click`,async ({page}) => {
    
    page.goto("https://leafground.com/button.xhtml");

    await page.locator(".card").filter({hasText:'Click and Confirm title.'})
                .getByRole("button",{name:'Click'}).click();

    await page.waitForLoadState('load',{timeout:5000})

    let title2 = await page.title();

    expect(title2).toEqual("Dashboard");

})

test(`02_Button: Confirm the button is disabled`, async({page}) => {
    
    page.goto("https://leafground.com/button.xhtml");

    let card2 =  page.locator(".card").filter({hasText:'Confirm if the button is disabled.'});
    await expect(card2.getByRole("button",{name:'Disabled'})).toBeDisabled();

})

test(`03_Button: Get the Position of the button `, async({page}) => {
    
    page.goto("https://leafground.com/button.xhtml");

    // page.waitForTimeout(5000);

    let card2 =  await page.locator(".card>button").nth(2).innerText();

    expect(card2).toEqual("Submit");

})

test(`04_Button: Click the Image button and click on any hidden button`, async({page}) => {
    
    page.goto("https://leafground.com/button.xhtml");

    // page.waitForTimeout(5000);

    let card2 =  page.locator(".card").filter({hasText:'Click Image Button and Click on any hidden button'})
                .getByRole("button",{name:'Image'});
        
        card2.click();
        card2.click();

    let primary_buton = page.locator("//*[text()='Primary']");

    await expect(primary_buton).toBeVisible({timeout:3000})

    await primary_buton.click();

})

test.only(`05_Button: Rounded Buttons`, async({page}) => {
    
    page.goto("https://leafground.com/button.xhtml");

    page.waitForTimeout(3000);

    // let elements =  await page.locator("//*[contains(@class,'rounded-button')]/span").count();

    let elements = page.locator(".card").filter({hasText:'How many rounded buttons are there?'}).getByRole("button");

    let coun =  await elements.count();
    console.log(`Elements count : ${coun}`);
    
    for (let index = 0; index < coun ; index++) {
       console.log(elements[index]);
    }
    // .allTextContents();


    
      
                  
    
        
    

})
