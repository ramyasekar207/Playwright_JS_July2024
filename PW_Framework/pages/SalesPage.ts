import { expect } from "@playwright/test";
import { HomePage } from "./HomePage";

export class SalesPage extends HomePage  {
    
    async verifySalesPageTitle()
    {
        const title = await this.page.locator("[title='Sales']").innerText()
        expect(title).toEqual("Sales");
    }
    async goToLeads()
    {
        await this.page.locator(`[title='Leads']`).click();    

    }

    async createNewLead()
    {
        await this.page.locator(`[title='Leads']`).click();    
        await this.page.locator("[name='New']").click({timeout:5000});

        //Enter Salutation
        await this.page.locator("//button[@name='salutation']").click();
        await this.page.locator("//span[text()='Mrs.']").click();

        //Enter First & Last Name
        let fName = "Ramya S";
        let lName = "Dinesh";
        await this.page.locator('[name=firstName]').fill(fName,{timeout:5000});
        await this.page.locator('[name=lastName]').fill(lName,{timeout:5000});

        //Company
        await this.page.locator('[name=Company]').fill("RBS");

        //Save the Details
        await this.page.locator('[name=SaveEdit]').click();

        console.log(`After Lead creation : ${await this.page.title()}`);

        //Assert verify the page title

        expect(await this.page.title()).toEqual(`New Lead | Salesforce`);

    }

   
}