/**
1. Create a function named `isOddOrEven` that takes a number as a parameter   
2. Declare and initialize the variable   
3.  Use a conditional statement to check if the number is divisible by 2  
4. Call the function and print the result 
 */

function isOddOrEven(a)
{
if(a%2==0)
{
    console.log("The Given number: '"+a+"' is Even");
}
else{
console.log("The Given number: '"+a+"' is Odd");}
}

isOddOrEven(10);
isOddOrEven(5);
isOddOrEven(3.5);
isOddOrEven(0);
isOddOrEven(-5);
