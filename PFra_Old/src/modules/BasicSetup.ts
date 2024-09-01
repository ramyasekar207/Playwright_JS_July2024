import { chromium, expect } from "@playwright/test";
import SF_User from "../../data/SF_Login.json"
let browser :any;
let browserContext : any;
let page :any;

async function browserSetup() {
    browser = await chromium.launch({headless:false});
    browserContext = await browser.newContext();
    page = await browserContext.newPage();
    return page;
}
export {browserSetup}

async function LogintoSalesForce() {
    page = await browserSetup()
    await page.goto(SF_User.userLogin.url);
    await page.getByLabel("Username").fill(SF_User.userLogin.username);
    await page.locator("#password").fill(SF_User.userLogin.password);
    await page.click("#Login");
    await page.waitForTimeout(8000)
    return page;
}
export {LogintoSalesForce}

async function appLauncher(appName:string) {
page = await LogintoSalesForce();
/**Click AppLauncher**/
await page.click(".appLauncher button");
await page.getByText("View All").click();
await page.getByPlaceholder("Search apps or items...").fill(appName,{timeout:8000});
let app = await page.locator("one-app-launcher-app-tile").getByRole('link', { name: 'Sales', exact: true });
await page.waitForSelector(`[data-name='${appName}']`);
await app.click();
// await page.waitForLoadState('domcontentloaded');
await page.waitForTimeout(5000);
let title = await page.locator(".appName>span").innerText();
expect(title).toEqual(appName);
return page;
}
export {appLauncher}


async function navigateToItem(appName:string, itemName:string ) {
    page = await appLauncher(appName);
    await page.locator(`[title='${itemName}']`).click();
    let breadcrumb = await page.locator(".slds-breadcrumb span").innerText();
    // expect(breadcrumb).toContain("Accounts");
    return page;
}
export {navigateToItem}


