import { expect, Locator, test  } from "@playwright/test";

test(`Assertions check`, async ({page}) => {

    await page.goto("https://www.leafground.com/input.xhtml");

    let typeName = page.getByPlaceholder("Babu Manickam");

    //To check the text box is enabled
    await expect(typeName).toBeEnabled();
    // await expect(typeName).toBeDisabled();
    
    await typeName.fill("Ramya");

    let disabledTextbox = page.getByPlaceholder("Disabled");
    await expect(disabledTextbox).toBeDisabled();

    await disabledTextbox.fill("Ramya");
    await page.waitForTimeout(3000);
})

test.only(`Assertion using Hard Asset`, async ({page}) => {
    
    await page.goto("https://www.leafground.com/input.xhtml");

    let append = page.locator("//input[@value='Chennai']");
    await expect(append).toBeEnabled({timeout:3000});
    // await append.fill("Germany"); // It is clear the value in the texboc and enter the value
    // await append.type("Germany") // It will append the value

     //Hard assertion
     let disabledTex = page.getByPlaceholder("Disabled");
     await expect(disabledTex).toBeEnabled({enabled:false});

    let clearbox = page.locator("//input[@value='Can you clear me, please?']");
    await expect(clearbox).toBeEnabled();
    // await clearbox.clear();//By default it will clear the value before entering the value
    await clearbox.fill("Hello, text box has been cleared")



})