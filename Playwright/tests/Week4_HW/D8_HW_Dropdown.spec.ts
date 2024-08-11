import { Locator, expect, test } from "@playwright/test";

test(`01_Dropdown : Select favorit course`,async ({page}) => {
    
    page.goto("https://leafground.com/select.xhtml");

    await page.selectOption(".ui-selectonemenu",{label:'Playwright'});

})

test(`02_Dropdown :Get the count and print of all the values`,async ({page}) => {
    
    page.goto("https://leafground.com/select.xhtml");

    await page.selectOption(".ui-selectonemenu",{label:'Playwright'});

    let list_elements = page.locator(".ui-selectonemenu>option");
    let count = await list_elements.count();
    console.log(`Total count :${count}`);
    console.log(`The dropdown values are :`);
    for (let index = 0; index < count; index++) {
        let value = await list_elements.nth(index).innerText();
        console.log(`${value}`);    
    }

    
})

test(`03_Dropdown : Choose your preferred Country`,async ({page}) => {
    
    page.goto("https://leafground.com/select.xhtml");

    let dd = await page.locator("[role='combobox']").first().click();

    let list_elements =  page.locator(".ui-selectonemenu-item");
    let count = await list_elements.count();

    for (let index = 0; index < count; index++) {
        let values =await list_elements.nth(index).innerText();
        console.log(`${values}`);
        if(values==="India")
        {
            await list_elements.nth(index).click();
        }
        
    }
expect(await page.locator("label.ui-selectonemenu-label").first().innerText()).toEqual("India");
    
})

test.only(`04_Dropdown : Choose any three courses from the dropdown`,async ({page}) => {
    
    page.goto("https://leafground.com/select.xhtml");

    let arr = ["Java", "Selenium", "Playwright"];

    for (let index = 0; index < arr.length; index++) {
        let dd = page.locator(".ui-autocomplete-multiple-container>li input");
        await dd.fill(arr[index]);
        await page.keyboard.press('Enter');
        
 }
    
})