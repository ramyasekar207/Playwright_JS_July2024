import {expect, test} from "@playwright/test"
test(`01 Window Handles`, async({context, page}) => {
   //First Page
    await page.goto("https://www.amazon.in/");
    
    //Second page declaration and defining a new page
    //Window handling
    const page2 = await context.newPage();
    await page2.goto("https://www.leafground.com/alert.xhtml");

    //To get the count of opened pages inside the context
    const allPages = context.pages();
    console.log(allPages.length);

    //To get the title of each page
    for (const page of allPages) {
        console.log(`${await page.title()}`);
        
    }

    //How to focs on a particular page among all
    await allPages[0].bringToFront();
    await page.waitForTimeout(3000);
 })

 test(`02 Window Handles : Sequential Approach`, async({context, page}) => {

    await page.goto("https://www.leafground.com/window.xhtml");
    
    //Create a promise
    const windPromise = context.waitForEvent("page");//Promis pending status

    //Locte the element
    await page.getByText("Open",{exact:true}).click();

    //Promise is acomplished only after the click operation
    const window = await windPromise; //Promise is resolved

    await expect(window).toHaveURL("https://www.leafground.com/dashboard.xhtml");

    await window.fill("#email","R@gmail.com")
    window.close();

    //Back to previous window and perform action
    await page.bringToFront();
    await page.click("//span[text()='Open Multiple']/..");

    await page.waitForTimeout(3000)
  })

test(`03 Window Handles : Parallel/Concurrent Approach`, async({context, page}) => {

await page.goto("https://www.leafground.com/window.xhtml");

//Concurrent Way:
const [page2] = await Promise.all([
    context.waitForEvent("page"),
    page.getByText("Open",{exact:true}).click()
])

await expect(page2).toHaveURL("https://www.leafground.com/dashboard.xhtml");

await page2.fill("#email","R@gmail.com")
page2.close();

//Back to previous window and perform action
await page.bringToFront();
await page.click("//span[text()='Open Multiple']/..");

await page.waitForTimeout(3000)
})

test.only(`04 Window Handles : Handling multiple page`, async({context, page}) => {

    await page.goto("https://www.leafground.com/window.xhtml");
    
    //Concurrent Way:
    const [multiplePage] = await Promise.all([
        context.waitForEvent("page"),
        page.click("//span[text()='Open Multiple']/..")
    ])
    
    const pages = multiplePage.context().pages();
    console.log(pages.length);
    
    //For each
    pages.forEach(async tabs => {
        const url = tabs.url();
        console.log(`URL : ${url}`);
        const title = await tabs.title();
        console.log(`Title : ${title}`);
        
    })

    let webPage:any;
    //Index
    for (let index = 0; index < pages.length; index++) {
        const pageTitle = await pages[index].title();
        console.log(`PageTitle : ${pageTitle}`);

        if(pageTitle === 'Web Table'){
            webPage = pages[index]
            }
            
            }
            await webPage.bringToFront();
            await webPage.fill("input[placeholder='Search']", "Amy Elsner");
            
            
            await webPage.waitForTimeout(3000);
        
        
   
    
    })