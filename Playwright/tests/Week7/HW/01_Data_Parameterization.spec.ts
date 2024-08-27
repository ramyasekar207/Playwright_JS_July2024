import { test } from "@playwright/test";
import {LogintoLeafTaps,createLead} from "./LF_Lead"


test(`Data Parameterization`,async ({page}) => {
    
   page = await LogintoLeafTaps();

    // let LeadID = (await createLead()).Lead_ID;
    // console.log(LeadID);
    
    //CreateLead
    await page.getByRole("link", {name:'Leads'}).click();
    await page.getByRole("link",{name:"Create Lead"}).click();
    const companyName = page.locator("#createLeadForm_companyName");
    await companyName.fill("RBS");
    await page.locator("#createLeadForm_firstName").fill("Ramya S");
    await page.locator("#createLeadForm_lastName").fill("Sekar");
    await page.locator("#createLeadForm_generalProfTitle").fill("Mrs.")
    await page.locator("#createLeadForm_description").fill("Playwright Excercise");

    //Select Dropdown
    await page.selectOption("#createLeadForm_dataSourceId",{value:'LEAD_DIRECTMAIL'});
    await page.selectOption("#createLeadForm_marketingCampaignId",{value:'DEMO_MKTG_CAMP'})

    let count_CampDropdown = await page.locator('#createLeadForm_marketingCampaignId>option').count();
    console.log(`count_CampDropdown: ${count_CampDropdown}`);

    await page.selectOption("#createLeadForm_industryEnumId",{value:'IND_GEN_SERVICES'})
    await page.selectOption("#createLeadForm_currencyUomId",{value:'INR'})
    
    await page.selectOption("#createLeadForm_generalCountryGeoId",{value:'IND'})
    await page.selectOption("#createLeadForm_generalStateProvinceGeoId",{value:'IN-TN'})
    
    //Submit - Create LEad
    await page.click("[name='submitButton']")

    //Get the status of the created Lead
    let status = await page.locator("#viewLead_statusId_sp").innerText();
    console.log(`Status : ${status}`);  
})