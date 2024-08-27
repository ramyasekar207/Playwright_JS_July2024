import { chromium, Locator, test  } from "@playwright/test";
import LT_User from "../../../data/LeafTaps/LT_login.json";
let browser :any;
let browserContext : any;
let page :any;


async function LogintoLeafTaps() {
    browser = await chromium.launch();
    browserContext = await browser.newContext();
    page = await browserContext.newPage();
    await page.goto(LT_User.LT_URL);
    await page.getByLabel("Username").fill(LT_User.LT_USER_NAME);
    await page.getByText("Password").fill(LT_User.LT_PASSWORD);
    //Submit 
    page.click(".decorativeSubmit");
    await page.waitForTimeout(5000);

    //General Text - Syntax
    await page.locator("text=CRM/SFA").click();
    return page;
    
}
export{LogintoLeafTaps}

async function createLead() {
    //GetByRole - Syntax
    await page.getByRole("link", {name:'Leads'}).click();

    //Create Lead
    await page.getByRole("link",{name:"Create Lead"}).click();

    //Enter Lead Details
    const companyName = page.locator("#createLeadForm_companyName");
    await companyName.fill("RBS");

    //Enter FirstName
    // await page.locator("[name='firstName']").fill("Ramya S");
    await page.locator("#createLeadForm_firstName").fill("Ramya S");

    //Enter LastName 
    await page.locator("#createLeadForm_lastName").fill("Sekar");

    //Enter Prof Title
    await page.locator("#createLeadForm_generalProfTitle").fill("Mrs.")


    //Description
    await page.locator("#createLeadForm_description").fill("Playwright Excercise");

    //Submit - Create LEad
    await page.click("[name='submitButton']")

    //Get the status of the created Lead
    let status = await page.locator("#viewLead_statusId_sp").innerText();
    console.log(`Status : ${status}`);  

    let ID = await page.locator("#viewLead_companyName_sp").innerText();
    let LeadID = ID.split("(");
    let arr =LeadID[1].split(")");
    
    return {
        Lead_ID : arr[0]
    }
    
}


export{createLead}