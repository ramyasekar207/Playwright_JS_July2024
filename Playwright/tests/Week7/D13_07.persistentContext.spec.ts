import { chromium, test } from "@playwright/test";
import LT_Details from "../../data/LeafTaps_login.json";
test.use({storageState:"creds/leaftaps_Login_PC.json"})

test(`LeafTaps : Store the login details using SessionStorage`, async ({}) => {

    const userData = "./myUserDataDir"
    const context = await chromium.launchPersistentContext(userData,{
        headless:false,
        permissions:[
        'camera','notifications', 'geolocation'         
        ],
        // httpCredentials:{
        //     username : "admin",
        //     password : "testleaf"
        // }
    
    })
    const page = await context.newPage();

    await page.goto(LT_Details.LT_URL);

    //Enter Username
    await page.getByLabel("Username").fill(LT_Details.LT_USER_NAME);

    // // Enter Password
    // await page.getByText("Password").fill("crmsfa")
    
    //Using CSS
    // await page.fill(".inputLogin",'crmsfa');

    //Using Xpath 
    
    await page.fill("//input[@id='password']",LT_Details.LT_PASSWORD);

    //Submit 
    page.click(".decorativeSubmit");
    await page.waitForTimeout(5000);

    //General Text - Syntax
    await page.locator("text=CRM/SFA").click();

    await page.context().storageState({path:"creds/leaftaps_Login_PC.json"})

    console.log(page.url());
    
    
})
test.only(`01_LeafTaps : PersistentContext : Store data context`, async ({}) => {
    const userData = "./myUserDataDir"
    const context = await chromium.launchPersistentContext(userData,{
        headless:false,
        permissions:[
        'camera','notifications', 'geolocation'         
        ],
        // httpCredentials:{
        //     username : "admin",
        //     password : "testleaf"
        // }
    
    })
    const page = await context.newPage();

    // page.goto("http://leaftaps.com/crmsfa/control/main?externalLoginKey=EL609024970994");
    page.goto("http://leaftaps.com/crmsfa/control/main?externalLoginKey=EL334910441095");
    //GetByRole - Syntax
    await page.getByRole("link", {name:'Leads'}).click();

    //Create Lead
    await page.getByRole("link",{name:"Create Lead"}).click();

})


test(`02_LeafGround : PersistentContext : Store data context`, async ({}) => {
    const userData = "./myUserDataDir"
    const context = await chromium.launchPersistentContext(userData,{
        headless:false,
        permissions:[
        'camera','notifications', 'geolocation'         
        ],
        //executablePath:"",//Local chrome path 
        httpCredentials:{
            username : "admin",
            password : "testleaf"
        }
    
    })
    const page = await context.newPage();

    await page.goto("https://www.leafground.com/auth.xhtml");

await page.getByRole("button",{name: "Basic Auth"}).click();
await page.waitForTimeout(5000);
})