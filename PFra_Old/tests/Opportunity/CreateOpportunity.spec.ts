import { test } from "@playwright/test";
import { LogintoSalesForce } from "../../src/modules/BasicSetup";

test(`Create Opportunity`,async ({page}) => {
    page = await LogintoSalesForce();
    await page.title();
    console.log(`Title : ${await page.title()}`);
    
})