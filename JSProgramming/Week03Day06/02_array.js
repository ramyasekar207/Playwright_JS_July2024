/**
 * Array Concept
 */

/** 
 * push() - add one or more element to the end of the existing array 
 *        - return the new length of the array
 * 

let users = ["Ramya","Dinesh","Diya"]
users.push("Test1");
console.log(users); */


/**
 * unshift() => oadd or more element to the beginnig of the array
 

users.unshift("TestFirst");
console.log(users);
*/

/**
 * pop() => Remove the last element from the array
 
users.pop();
console.log(users);
*/

/**
 * shift() -- Remove the first element from the array
 
users.shift();
console.log(users);
*/

/**
 * Slice


users = users.slice(1,3);
console.log(users); */

/**
 * Splice => we can replace the value with the given value
 * ==> Changes the content of an array by removing/Replacing the 
 * element


let month = ['Jan','Feb','Mar','Apr'];
month.splice(1,0,'July',"Aug","Sep");
console.log(month); 
 */

/**
 * To get the length of an array  

let tools = ["Selenium", "Playwright", "Cypress"]
tools[4] = "WebDriverIO"
tools[6] = "AcceIQ"

console.log(tools[3]); // o/p => Undefined bcas no value has been initialised
console.log(tools.length); //8 => it will include the empty value as well
console.log(tools); 
*/


/**
 * Join

let user = [1,2,3,4]
console.log(user.join('-'));

 */

/**
 * concat : Merge two arrays into a new array
 
let array1 = [1,2,3];
let array2 = [7,8,9];
console.log(array1.concat(array2));
console.log(array1);
console.log(array2);
*/

/**
 * Sort in Array

let sort_array = [1,6,3,6,11]; // o/p ==> [1,11,3,6,6] Lexicographical sorting 
let name_Array = ['r','a','a'];
console.log(sort_array.sort());
console.log(name_Array.sort()); 
*/

/**
 * reverse ==> Reverse is used to reverse the given string
console.log(num.reverse());
*/

/**
 * Spread syntax : Adding an array to an another array 
 * '...' will indicate where to add the array values
let arr1 = ['a','b','c'];
let arr2 = [...arr1,'e','f','g']
let arr3 = ['e',...arr1,'f','g']
console.log(arr2);
*/

/** Sorting in Heteronious array
 * 
 

let n = ['a','b',11,'c',true,false,0,1,4,"State","Tamilnadu"]
console.log(n.sort());

// Sort numbers
let arr = [45,6,23,4,5,2];
arr.sort((a,b)=>a-b); //Desending order
arr.sort((a,b)=>a+b); //Asending order
console.log(arr);
*/

/**
 * For Each Iteration

let numbers = [1,2,10,5]
numbers.forEach((num)=>console.log(num));
 */
let numbers;
/**
 * Map concept : map will do Convert from original array to new array
 
numbers = [1,2,10,5];
let squares = numbers.map(num=>num*2);
console.log(squares);
*/

let products = [
    {name:"Prod1", price:10},
    {name:"Prod2", price:30},
    {name:"Prod3", price:60}
]

let newProd = products.map(prod=>({
   name : prod.name,
   price : prod.price*10
}));
console.log(newProd);