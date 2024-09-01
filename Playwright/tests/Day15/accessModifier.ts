
class Browser1{
    private browserType:any;
    constructor(browserType){
        this.browserType = browserType;
    }

    private logPrivateSession():void{
        console.log(`Browser Session within Class : ${this.browserType}`);
        
    }

    logPublicSession():void
    {
        this.logPrivateSession(); //Private method is accessible within the class.
    }
}

const session1 = new Browser1("EDGE");
session1.logPublicSession() ; // cannot access the private method here


//Protected access modifier:
class ProtectedParentClass{
    protected browserType : any;
    constructor(browserType:any){
        this.browserType = browserType;
    }

    protected logProtectedSession():void{
        console.log("This is from ParentClass");
        console.log(`Browser Session within Class : ${this.browserType}`);
        
    }

    logPublicSession():void
    {
        this.logProtectedSession(); //Private method is accessible within the class.
    }
}

class SubClass extends ProtectedParentClass{

    protected logProtectedSession(): void {
        console.log("This is from SubClass");
        
    }

    public logMethodfromSubClass(){
        this.logProtectedSession();    
        //If we havent declare the protected method here then it automatically take it from the parent class
        //If we declare the protected method here in subclass then it will override the subclass's method
    }
}

const log = new SubClass("Chrome from parent class");
log.logMethodfromSubClass(); 
