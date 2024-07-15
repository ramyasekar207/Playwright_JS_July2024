//Strict equality or Identity Operator

/* Equality : It will not consider the data type 
the value matters*/
var a = 10;
var b = 10;
console.log(a==b, typeof a, typeof b)
var a = 10;
var b = '10';
console.log(a==b, typeof a, typeof b)

/* Identity Operator : It will consider 
both the datdtype and the value should match */
var a = 10;
var b = 10;
console.log(a===b, typeof a, typeof b)
var a = 10;
var b = '10';
console.log(a===b, typeof a, typeof b)