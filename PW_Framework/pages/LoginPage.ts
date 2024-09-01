import { Page,BrowserContext } from "@playwright/test";
import data from "../data/data.json"

export class LoginPage {
    
    readonly page : Page; //We canot change the page value if we declare it as 'readonly'
    readonly context :BrowserContext;

    constructor(page:Page, context:BrowserContext){
        
        this.page = page;
        this.context = context;
    }

    async goToHomePage()
    {
        await this.page.goto("https://login.salesforce.com/",{timeout:8000});
        await this.page.fill('#username','ramya@testleaf.com');
        await this.page.fill('#password','Password@1');
        await this.page.click("#Login");
        await this.page.waitForTimeout(8000)

    }

   
}