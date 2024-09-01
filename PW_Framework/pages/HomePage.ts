import { Page,BrowserContext, expect } from "@playwright/test";
import data from "../data/data.json"
import { LoginPage } from "./LoginPage";

export class HomePage extends LoginPage  {
    
    async verifyHomePageTitle()
    {
        const title = await this.page.title();
        expect(title).toEqual("Home | Salesforce");
    }
    async goToAppLauncher(appName:string)
    {
        await this.page.click(".appLauncher button");
        await this.page.getByText("View All").click();
        await this.page.getByPlaceholder("Search apps or items...").fill(appName,{timeout:8000});
        let app = await this.page.locator("one-app-launcher-app-tile").getByRole('link', { name: `${appName}`, exact: true });
        await this.page.waitForSelector(`[data-name='${appName}']`);
        await app.click();
        // await page.waitForLoadState('domcontentloaded');
        await this.page.waitForTimeout(5000);
        let title = await this.page.locator(".appName>span").innerText();
        expect(title).toEqual(appName);

    }

   
}