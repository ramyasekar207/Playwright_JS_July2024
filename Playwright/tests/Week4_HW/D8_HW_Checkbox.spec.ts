import { Locator, expect, test } from "@playwright/test";

test(`01_Checkbox : Click on basic checkbox`,async ({page}) => {
    
    page.goto("https://leafground.com/checkbox.xhtml");

    await page.locator("//*[text()='Basic Checkbox']/..//div[contains(@class,'ui-chkbox-box')]").click();

    await expect(page.locator("//*[text()='Basic Checkbox']/..//div[contains(@class,'ui-state-active')]")).toBeEnabled()

})

test(`02_Checkbox : Click on Notification checkbox`,async ({page}) => {
    
    page.goto("https://leafground.com/checkbox.xhtml");

    await page.locator("//*[text()='Notification']/..//div[contains(@class,'ui-chkbox-box')]").click();

    await expect(page.locator("//*[@role='alert']//child::span[@class='ui-growl-title']")).toBeVisible({timeout:3000});   

})

test(`03_Checkbox : Click on your favorite language`,async ({page}) => {
    
    page.goto("https://leafground.com/checkbox.xhtml");

    // let count = await page.locator("//table[contains(@class,'ui-selectmanycheckbox')]//td/label").all();

    let fav_Course = ['Java','Python','Javascript'];
    for (let index = 0; index < fav_Course.length; index++) {
        await page.locator(`//table[contains(@class,'ui-selectmanycheckbox')]//td/label[text()='${fav_Course[index]}']/../div/div[contains(@class,'ui-chkbox-box')]`).click();
        
    }
    
})

test(`04_Checkbox : Tri-State Checkbox.`,async ({page}) => {
    
    page.goto("https://leafground.com/checkbox.xhtml");

    await page.locator("//*[text()='Tri State Checkbox']/..//div[contains(@class,'ui-chkbox-box')]").click();

    await expect(page.locator("//*[text()='Tri State Checkbox']/..//div[contains(@class,'ui-chkbox-box')]/span[contains(@class,'ui-icon-check')]")).toBeVisible();

    //Validate the error message
    let text1 = 
    expect(await page.locator("//*[@class='ui-growl-message']/p").innerText()).toEqual("State = 1")
    
    await page.locator("//*[text()='Tri State Checkbox']/..//div[contains(@class,'ui-chkbox-box')]").click();

    await expect(page.locator("//*[text()='Tri State Checkbox']/..//div[contains(@class,'ui-chkbox-box')]/span[contains(@class,'ui-icon-closethick')]")).toBeVisible();

    //Validate the error message
    expect(await page.locator("//*[@class='ui-growl-message']/p").innerText()).toEqual("State = 2")
    
    
})

test(`05_Checkbox : Toggle search.`,async ({page}) => {
    
    page.goto("https://leafground.com/checkbox.xhtml");

    await page.locator("//*[text()='Toggle Switch']/..//div[@class='ui-toggleswitch-slider']").click();

    await expect(page.locator("//*[text()='Toggle Switch']/..//div[contains(@class,'ui-toggleswitch-checked')]")).toBeVisible();

    
})

test(`06_Checkbox : Disabled checkbox.`,async ({page}) => {
    
    page.goto("https://leafground.com/checkbox.xhtml");

    await expect(page.locator("//*[text()='Verify if check box is disabled']/..//input[@aria-checked='false']")).toBeDisabled();
    // .toBeEditable({editable:false});

    
})

test.only(`07_Checkbox : Multiple optin selection.`,async ({page}) => {
    
    page.goto("https://leafground.com/checkbox.xhtml");

    await page.locator(".ui-selectcheckboxmenu-trigger").click();
    
    const label = await page.locator(".ui-selectcheckboxmenu-item label").allTextContents();

    for (let index = 0; index < label.length; index++) {
        if(label[index]==='London' || label[index]==='Rome'){
        await page.locator(".ui-selectcheckboxmenu-item .ui-chkbox-box").nth(index).click();
    }     
    
    
    }

    await page.locator(".ui-selectcheckboxmenu-close").click(); 
})