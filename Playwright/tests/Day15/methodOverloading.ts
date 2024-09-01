import { time } from "console";

class ElementActions {
    
public click(element:string):void; // Declare the method
    
public click(element:string, forceClick:boolean):void; // Declare the method

public click(element:string, forceClick:boolean, timeout:number):void; // Declare the method

public click(element:string,forceClick?:boolean,timeout?:number):void 
//Implementing the method body
//? = Optional parameter
{
    if(forceClick){
        console.log(`Forcibly cliking the element: ${element}`);
        //Example : this.page.click(element, {forceClick : true})
    }
    else if(timeout)
    {
        console.log(`Timeout the element: ${element}`);
    }
    else{
        console.log(`Clicking the element normally : ${element}`);
        //Eg. this.page.click(element)
    }
}
     
}

const actions = new ElementActions();
actions.click("#login"); //Normal click
actions.click("#login",true); //Force click
actions.click("#login",true, 3000); //Timeout click