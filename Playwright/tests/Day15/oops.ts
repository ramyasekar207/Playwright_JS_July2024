class BrowserSession {
    //Properties - uninitialized
    browserType:any;
    context: any;
    page:any;

    launchBrowser()
    {

    }

    navigateToUrl(url)
    {

    }

    captureScreenshot(fileName){

    }

}

//Creating an object
const session = new BrowserSession();
session.browserType = "chrome"; //Manually setting the property
session.launchBrowser();

//With Construtor
class Browser {
    browserVersion:any;
    browserType:any;
    constructor(browserVersion, browserType) {
        this.browserVersion = browserVersion;
        this.browserType = browserType;
    }

    openBrowser(){

    }
}
const browser = new Browser(127, "Chrome");