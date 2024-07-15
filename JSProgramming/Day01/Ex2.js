/* Assignment Requirements:  
1. Declare a const name as browserVersion (global) 
2. Assign value as Chrome 
3. Create a function by name getBrowserVersion 
4. Create if condition inside function to check if browser is chrome, then 
5. Declare a local variable (browserVersion) and print that variable inside function (outside block) 
6. Call that function from the javascript 
 
Hints to Solve:  - Use 'var' first as block variable and then convert that as 'let' - Confirm how it works */

// const browserVersion = "Chrome";

// console.log("Outside Block: "+browserVersion);


// function getBrowserVersion()
// {
//     // var browserVersion ;
//     console.log("start of function: "+ browserVersion);
//     if(browserVersion=="Chrome"){ 
    
//         let browserVersion = "V125";
//         console.log("If block: " +browserVersion);
//         }
    
//     console.log("end of function: "+ browserVersion);
// }
// console.log("end of function: "+ browserVersion);
// getBrowserVersion();

/* */


function add(a,b){
let c;
c = a+b;
return c;
}

const a = add(1,2);
const b = add(7,8)
console.log(a);
console.log(b);

