/*Type conversion ---> Any data to String
==> We can use two methods to 
convert any data into String
a= String(a) (or)
a= a.toString();
*/

//Number
var a = 77;
console.log(a, typeof a);
a=String(a) /* */
console.log(a, typeof a);

//Boolean
var a = true;
console.log(a, typeof a);
a=a.toString();
console.log(a, typeof a);

//Date
var a = new Date();
console.log(a, typeof a);
a=String(a);
console.log(a, typeof a);

//Array
var a = [1, "Test", 2, "Array"];
console.log(a, typeof a);
a= String(a);
console.log(a, typeof a);

//Object -- It will not work
var a ={Name:"Ramya", RollNo : 1};
console.log(a, typeof a);
a=String(a)
console.log(a, typeof a);



/* Type Conversion ----> String to Number
#1. We can directly store it in double quotes
#2. a = Number(a)
#3. a = parseInt(a)
*/
var a = "125";
console.log(a, typeof a);
a=Number(a)
console.log(a, typeof a);

// Boolean value into number conversion
var a = true;
console.log(a, typeof a);
a=Number(a);
console.log(a, typeof a);
a= false;
console.log(a, typeof a);
a=Number(a);
console.log(a, typeof a);

console.clear();
//Array
var a = [1,"test", 2, "One"];
console.log(a, typeof a);
a= Number(a);
console.log(a, typeof a);

var a = "125";
console.log(a, typeof a);
a=parseInt(a);
/* It is applicable only for Numbers
It will not work for object/String to Number conversion  */
console.log(a, typeof a);
