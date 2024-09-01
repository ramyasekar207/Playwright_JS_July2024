import {test  } from "@playwright/test";
import { SalesPage } from "../pages/SalesPage";

test(`Verify the login functionality`, async ({page, context}) => {
    const obj = new SalesPage(page, context);
    await obj.goToHomePage();
    
    await obj.verifyHomePageTitle();
    await obj.goToAppLauncher('Sales');
    
    await obj.verifySalesPageTitle();
    await obj.goToLeads();
    await obj.createNewLead();

})