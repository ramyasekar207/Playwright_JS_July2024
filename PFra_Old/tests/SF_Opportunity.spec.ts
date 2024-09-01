import { test, expect } from "@playwright/test";
import acc_details from "../data/SF_Login.json"
import { LogintoSalesForce,navigateToItem } from "../src/modules/BasicSetup";

let Account_ID : any;

test.only(`01 : Create Opportunity`,async ({page}) => {
    page = await navigateToItem("Sales","Opportunities");
    await page.locator("//a[@title='New']").click({timeout:5000});

    await page.locator("[field-label='Opportunity Name'] input").fill(acc_details.Create_Opportunity.name);
    
    await page.locator("//label[text()='Stage']/..//lightning-base-combobox//button").click();
    await page.locator("//lightning-base-combobox-item[@data-value='Prospecting']").click();

    // await page.locator("//*[text()='Select a date for Close Date']/..").click();
    // await page.locator("//lightning-base-combobox-item[@data-value='Prospecting']").click();
    
    await page.locator(".record-body-container button[name='SaveEdit']").click();  
    let breadcrumb = await page.locator("records-entity-label").innerText();
    // expect(breadcrumb).toContain("Account");
    // let title = await page.locator("h1 lightning-formatted-text[slot='primaryField']").innerText();
    // expect(title).toContain(acc_details.create_Account.acc_Name);  
    // let url = page.url().split("/");
    // let arr = url.splice(-2,1);
    // Account_ID = arr[0];  
})

test(`02 : Edit the Accounts`,async ({page,request}) => {
    
    page = await LogintoSalesForce();
    await page.goto(`${acc_details.home_url}Account/${Account_ID}/view`);

    await page.locator(".slds-button-group-list lightning-button-menu.slds-dropdown-trigger_click").click();
    await page.locator("//div[@class='slds-dropdown__item']//span[text()='Edit']/..").click();
    await page.locator("//label[text()='Type']/..//lightning-base-combobox//button").click();
    await page.locator("//lightning-base-combobox-item[@data-value='Technology Partner']").click();
    
    await page.locator("//label[text()='Industry']/..//lightning-base-combobox//button").click();
    await page.locator("//lightning-base-combobox-item[@data-value='Healthcare']").click();
    
    await page.locator("//label[text()='Ownership']/..//lightning-base-combobox//button").click();
    await page.locator("//lightning-base-combobox-item[@data-value='Public']").click();
    
    await page.locator("//*[@field-label='Billing Address']//textarea[@name='street']").fill("Billing address");
    await page.locator("//*[@field-label='Shipping Address']//textarea[@name='street']").fill("Shipping address");
    
    await page.locator("//label[text()='Customer Priority']/..//lightning-base-combobox//button").click();
    await page.locator("//lightning-base-combobox-item[@data-value='Low']").click();
    
    await page.locator("//label[text()='SLA']/..//lightning-base-combobox//button").click();
    await page.locator("//lightning-base-combobox-item[@data-value='Silver']").click();
    await page.locator("//label[text()='Active']/..//lightning-base-combobox//button").click();
    await page.locator("//lightning-base-combobox-item[@data-value='No']").click();
    
    let phoneNum = Math.floor(Math.random() * 9000000000) + 1000000000;
    await page.fill("records-record-layout-item[field-label='Phone'] div[type = 'text'] input", phoneNum.toString());
    
    await page.locator("//label[text()='Upsell Opportunity']/..//lightning-base-combobox//button").click();
    await page.locator("//lightning-base-combobox-item[@data-value='No']").first().click();
    
    
    await page.locator(".record-body-container button[name='SaveEdit']").click();  
    await expect(page.locator('.toastMessage')).toBeVisible();

    let RandNum = await page.locator(".secondaryFields lightning-formatted-phone a").innerText();
    expect(RandNum).toEqual(phoneNum.toString());
     
})

test(`03 : Delete the created Account`,async ({page,request}) => {
    
    page = await LogintoSalesForce();
    let ID = Account_ID;
    await page.goto(`${acc_details.home_url}Account/${Account_ID}/view`);

    await page.locator(".slds-button-group-list lightning-button-menu.slds-dropdown-trigger_click").click();
    await page.locator("//div[@class='slds-dropdown__item']//span[text()='Delete']/..").click();

    await page.locator(".forceModalActionContainer [title='Delete']").click()
    
    await expect(page.locator('.toastMessage')).toBeVisible();

    await page.goto(`${acc_details.home_url}Account/${ID}/view`);
    let text = await page.locator(".oneRecordHomeFlexipage2Wrapper flexipage-error p").first().innerText();
    expect(text).toEqual("Looks like there's a problem.");
         
})