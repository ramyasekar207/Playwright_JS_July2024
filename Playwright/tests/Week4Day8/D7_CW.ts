import { Browser, BrowserContext,chromium,Page } from "playwright";

async function performAction(url:string,action:'screenshot'|'title')
:Promise<string|void> {
    const browser:Browser = await chromium.launch({headless:false});
    const context : BrowserContext = await browser.newContext();
    const page : Page = await context.newPage();
    await page.goto(url);
    if(action==='screenshot'){
        const ss = 'screenshot.png';
        await page.screenshot({path:ss});
        await browser.close();
        return `Screenshot save at ${ss}`;
    }
    else if(action==='title')
    {
        const title = await page.title();
        await browser.close();
        return  `Title of the page is : ${title}`;
    }
    else{
        await browser.close();
    }
    
}

async function runTest() {
    
    const screenshotResult = await performAction("https://google.co.in",'screenshot');
    console.log(screenshotResult);
    const titleResult = await performAction("https://google.co.in",'title');
    console.log(titleResult);

}

runTest();