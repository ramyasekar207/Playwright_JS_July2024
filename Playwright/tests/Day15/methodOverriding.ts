class HomePage {
    public loadUrl():void
    {
        console.log("Loading the method from parent class - Page");
        
    }
}

class LoginPage extends HomePage{
    public loadUrl():void
    {
        console.log("Loading the method from Child class - LoginPage");
        
    }
}

const basePage = new HomePage();
basePage.loadUrl();
const loginPage = new LoginPage();
loginPage.loadUrl();