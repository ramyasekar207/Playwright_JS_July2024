//Creating an abstract method
abstract class ProjectSpecificMethod {
    protected page:any ;
      constrcutor (page)
      {
        this.page = page;
      }
      abstract navigateTo(url:string):void; // we cannot have a implementaion body when we use 'abstract' keyword
      abstract login(username:string, password:string):void;
      public logSession():void{
        console.log("This is a concrete method");
        
      }
      }
      
//Creating a class and extending the abstract method
class ShoppingPage extends ProjectSpecificMethod{
//    protected page:any;
      navigateTo(url: string): void {
        // this.page.goto(url);
        console.log("Navigate to login page ");
        
    }
    login(username: string, password: string): void {
        this.page.fill("", username)
        this.page.fill("", password)
        console.log("Enter user credentials ");
    }

}
const shop_Page = new ShoppingPage();
shop_Page.navigateTo("URL");



//Inetrface :
interface LoginPage_I{
enterUser():string ;
enterPassword():string;
}

class ProductPage implements LoginPage_I{
    enterUser(): string {
        return `username`
    }
    enterPassword(): string {
         return `password`
    }
        
    
}

const prod = new ProductPage();
prod.enterPassword();
