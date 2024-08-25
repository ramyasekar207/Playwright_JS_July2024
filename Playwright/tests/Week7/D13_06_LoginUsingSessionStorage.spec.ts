/**
 * Reuse sessionStorage in this Testcase.
 */

import { chromium, expect, test } from "@playwright/test";
test.use({storageState:"creds/sf_login_storage.json"})


test.only(`Test to generate login session State`, async ({page}) => {
            await page.goto("https://rbs2-dev-ed.develop.lightning.force.com/lightning/setup/SetupOneHome/home");
        //     await page.locator("#username").fill("ramya@testleaf.com");
        //     await page.locator("#password").fill("Password@1");
        //     await page.waitForTimeout(5000);
        //     await page.locator("#Login").click();
        //     await page.waitForTimeout(5000);
        //     //Get the login details(cookies)
        //     await page.context().storageState({path:"creds/sf_login_storage.json"})
        console.log(await page.title());
    })



