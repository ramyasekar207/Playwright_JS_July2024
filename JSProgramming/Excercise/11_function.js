//Legacy function calling
//#1.
function welcome(name)
{
var value = name? name:"NewBeee";
console.log("Welcome "+value+ " !!");
}

welcome("Ramya");
welcome();
welcome(null);

//#2. 
var obj = { Name : "Ramya S Dinesh",
    Age : 35,
    Course : "Playwright",
    DOJ : "13/jul/2024"}

welcome(obj.Name);

//Arrow function
//#1. 
var wel = (obj) =>{
    var value = obj.Name ? obj.Name : "NEWBEE";
    return value; 
}

console.log(wel(obj));
