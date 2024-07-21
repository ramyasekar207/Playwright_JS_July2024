/*
*String Literal :  typeof is String

let name = `Ramya`;
console.log(typeof name);

//String Object : tyopeof is Object
let pass = new String("RRR")
console.log(typeof pass);
*/


/**
 * How to include "'" in the String >> add backward slash will achieve it
or we can directly put it in double quotes

let fname = 'It\'s String';
console.log(fname);
let fname2 = "Hello this is \"Ramya \"";
console.log(fname2);
*/


/**
*Template Literal - dynamic values ${} : introduced in ES6

let testcase1 = 200;
let testcase2 = 100;
let output = `Testcase are : ${testcase1} and ${testcase2}`;
console.log(output);
 */

/**
 * String methods
 * How to get the count of characters in the String
 
let courseName = "Playwright";
console.log(`The Length of given name is : ${courseName.length}`);
*/

/**
 * Find the first character of the given string
 
let courseName = "Playwright";
console.log(courseName.charAt(0));
console.log(courseName.charAt(7));
*/


/**
 * Find the second from last character of the given string
 
let courseName = "Playwright";
console.log(`Second charcetr from last ${courseName} : '${courseName.charAt(courseName.length-2)}'`);

*/

let courseName = "Playwrigaht";
/**
 * Index of the character
 * First letter index will take into picture
 * No match : it will print the -1
 

let courseName = "Playwrigaht";
console.log(courseName.indexOf('z'));
*/

/**
 * includes ==> true or false
 * sequence of text we can check whether it is persent in the variable
 
console.log(`courseName : ${courseName.includes("test")}`);
console.log(`courseName : ${courseName.includes("Play")}`);
*/

/**
 * Lowercase and Uppercase
 

console.log(`${courseName.toUpperCase()}`);
console.log(`${courseName.toLocaleUpperCase()}`);
*/

/**
 * Slice - Extracts the part of the String and it reurn it as a new String
 * Negative indexes will accept
 
let nname = "Welcome to Autmation testing."
// console.log(`${nname.slice(0,12)}`);
// console.log(`${nname.slice(-2)}`);
*/

/**
 * SubString - if we enter negative here it will consider it as 0 and enter the full string value
 * if we have the start index is greater than end inder it will swap the index values
 */
// console.log(`${nname.substring(7)}`);
// console.log(`${nname.substring(-3)}`);
// console.log(`${nname.substring(20,2)}`);


/**
 * Split split the value after the given value
 
console.log(nname.split(" "));
*/

let name = "Ramya S";

/** Method 1 : Reverse
function reverse(name)
{
    name.split("");
    console.log(name);
    let reversed = " ";
    for (let index = name.length-1; index >=0; index--) {
        
         reversed = reversed + name[index];
        
    }
    console.log(reversed);
}
reverse(name);
*/

/** Method 2 : Reverse
 * 
 * */
reverse_charat(name);
function reverse_charat(name)
{
    let reversed = " ";
    for (let index = name.length-1; index >=0; index--) {
        
         reversed += name.charAt(index);
        
    }
    console.log(reversed);
}



/**Direct reversal 
let reverse = name.split("").reverse().join('');
console.log(reverse); */

// let namee ="" ;
// namee = namee+ "TTT";
// console.log(namee);