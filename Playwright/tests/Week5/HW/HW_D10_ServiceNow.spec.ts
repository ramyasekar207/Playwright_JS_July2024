import { chromium, expect, test } from "@playwright/test";
import exp from "constants";

test(`01_D10:ServiceNow Login page`, async ({context,page}) =>{

    await page.goto("https://account.servicenow.com/sign-in");
    await page.fill("input[id=email]","ramya.07july@gmail.com");
    /******Shadow Dom *****/
    await page.locator('.sign-in-form #submit_form').click();

    await page.waitForTimeout(3000);
    
    await page.locator('wc-input #password').first().fill('Password@1');

    await page.locator('#submit_form').getByRole('button', { name: 'Sign In' }).click();

    })

    test.only(`01_D10:ServiceNow admin page Login using admin instance`, async ({page}) =>{

        await page.goto("https://dev225779.service-now.com/");
        await page.fill("#user_name","admin",{timeout:3000});
        await page.locator('#user_password').fill('dlcv7=YXMX3$');
        await page.locator('#sysverb_login').click();
        // await page.waitForTimeout(15000);

        //Select All option
        /*******Shadow DOM concept*******/
        await page.locator("sn-polaris-header div[aria-label='All']").click({timeout:15000});
        await page.locator("#filter").fill("Service Catalog");
        await page.locator("sn-polaris-header").locator("sn-collapsible-list").getByRole("link",{name:'Service Catalog'}).first().click({timeout:5000});
        

        let frame = page.frameLocator("iframe");
        /***Frame Handler */
        await frame.getByRole("link",{name:'Mobiles', exact: true }).click({timeout:3000});
        
        //Click 'Apple iPhone 13' link
        await frame.getByRole("link",{name:'Apple iPhone 13', exact: true }).click({timeout:3000});

        //Radio box selection        
        let value1 = 'yes';
        await frame.locator(`.row.sc-row input[value='${value1}']+label`).click();
        let color = 'blue';
        await frame.locator(`.row.sc-row input[value='${color}']+label`).click();

        //enter Text value
        
        frame.locator(".cat_item_option.sc-content-pad.form-control").fill("iphone 13 pro Max");
       
        //Select 500MB from dropdown
        const dd = frame.locator(".col-xs-6>select");
        await dd.selectOption('500MB');

        //Dropdown count
        const count = frame.locator(".col-xs-6>select>option").count();
        console.log(`Dropdown count : ${await count}`);
        
        //Select 256 GB
        let text = frame.locator(".row.sc-row input[value='256']+label");
        expect(await text.innerText()).toContain('256 GB');

        await text.click();

        //Order Now
        frame.getByText('Order Now').click();
        
       
        await page.waitForTimeout(10000);

        let value = await frame.locator(".notification-success span").nth(1).innerText();

        expect(value).toEqual('Thank you, your request has been submitted');
       })