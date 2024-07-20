/**
 * Task 1: Function Declaration
 */

function userProfile(userName) {
    console.log("Hello, "+userName+"!!");
}
userProfile("TestLeaf");

/**
 * Task 2: Arrow Function 
 */

let double = (num) => {
    return num*2;
}
console.log(double(10));

/**
 * Task 3: Anonymous Function 
 */
console.log("******Task3****");
setTimeout(() => {
    console.log("This message is delayed by 2 seconds");
}, 2000);


/**
 * Task 4: Callback Function 
Create a function named `getUserData` that takes a callback function as a parameter. Inside 
`getUserData`, simulate fetching data with `setTimeout` and then call the callback function 
with a user object after 3 seconds. 
Call the `getUserData` function and log the user's name and age using the callback function. 
 */
console.log("******Task4****");

function userDetails(c_uname, c_age)
{
    console.log("Inside Callback function");
    console.log("Username : "+c_uname);
    console.log("UserAge : "+c_age); 
}

getUserData(userDetails,"Diya",4 );
function getUserData(callback ,c_uname, c_age ){
setTimeout(()=> {
    console.log("This message is delayed by 3 seconds");
    console.log("Main function");
    callback(c_uname, c_age);
}, 3000);

}

