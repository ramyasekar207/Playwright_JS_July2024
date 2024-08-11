import { Locator, test  } from "@playwright/test";

test(`Salesforce : Create Lead with Select Dropdown`, async ({page}) => {

    await page.goto("http://leaftaps.com/opentaps/control/main");

    //Enter Username
    await page.getByLabel("Username").fill("demosalesmanager");

    //Enter Password
    // await page.getByText("Password").fill("crmsfa")
    
    //Using CSS
    // await page.fill(".inputLogin",'crmsfa');

    //Using Xpath 
    
    await page.fill("//input[@id='password']",'crmsfa');

    //Submit 
    page.click(".decorativeSubmit");
    await page.waitForTimeout(5000);

    //General Text - Syntax
    await page.locator("text=CRM/SFA").click();

    //GetByRole - Syntax
    await page.getByRole("link", {name:'Leads'}).click();

    //Create Lead
    await page.getByRole("link",{name:"Create Lead"}).click();

    //Enter Lead Details
    const companyName = page.locator("#createLeadForm_companyName");
    await companyName.fill("TestLeaf");

    //Enter FirstName
    // await page.locator("[name='firstName']").fill("Ramya S");
    await page.locator("#createLeadForm_firstName").fill("Ramya S");

    //Enter LastName 
    await page.locator("#createLeadForm_lastName").fill("Seclearkar");

    //Enter Prof Title
    await page.locator("#createLeadForm_generalProfTitle").fill("Mrs.")


    //Description
    await page.locator("#createLeadForm_description").fill("Playwright Excercise");

    //Select Option
    await page.selectOption("#createLeadForm_dataSourceId",{value:"LEAD_DIRECTMAIL"});

    //Get Count of the dropdown value
    const dd = page.locator('#createLeadForm_dataSourceId>option');
    const dd_count = await dd.count();
    console.log(`Total no of count : ${dd_count}`);
    for (let index = 0; index < dd_count; index++) {
        console.log(await dd.nth(index).innerText()); 
    }

    //Select Currency Dropdown
    await page.selectOption("#createLeadForm_currencyUomId",{index:13});

    //Select Country
    await page.selectOption("#createLeadForm_generalCountryGeoId",{label:"India"})
    
    //Submit - Create LEad
    await page.click("[name='submitButton']")

    //Get the status of the created Lead
    let status = await page.locator("#viewLead_statusId_sp").innerText();
    console.log(`Status : ${status}`);   
    
})

