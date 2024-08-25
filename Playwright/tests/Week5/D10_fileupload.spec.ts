import {expect, test} from "@playwright/test";
import path from "path";

test(`01 File Upload: Single/Multiple upload`, async({ page}) => {
   //First Page
    await page.goto("https://www.leafground.com/file.xhtml");

    await page.locator(".card").filter({has:page.getByText("Basic Upload")})
            .locator("input[type='file']").
            // setInputFiles([path.join(__dirname,"index.html")]);
            setInputFiles([path.join(__dirname,"index.html")]);
    
    
 })

 test.only(`02 File Upload: FileChooser`, async({ page}) => {
    //First Page
    await page.goto(" https://the-internet.herokuapp.com/upload");
    const filePromise = page.waitForEvent("filechooser");
    await page.click("#drag-drop-upload");
    const fileChooser = await filePromise;
    await fileChooser.setFiles([path.join(__dirname,"index.html")]);
  })

  test.only(`02 File download`, async({ page}) => {
    //First Page
    await page.goto(" https://the-internet.herokuapp.com/upload"); //Change the URL
    const filePromise = page.waitForEvent("download");
    await page.getByRole('button',{name:'Download'}).click()
    const filedownloader = await filePromise;
    await filedownloader.saveAs(path.join("downloads/"+filedownloader.suggestedFilename()))
    const downloadurl = filedownloader.url();
    
    
  })
