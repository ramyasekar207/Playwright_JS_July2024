/* Single Condition /Tenary Operator */
var age = 15;
var ageCheck = (age>=18) ? "Adult" : "Not an adult";
console.log(ageCheck);


/* It is used to handle the null/undefined value easily */

function welcome(name)
{
    var value = name? name:"NewBiee"
console.log("Welcome "+value+" !!");
}

welcome("Krishna");
welcome();
welcome(null);
welcome(12);

//get the name from Object file
var emp = {Name:"Ramya",
    Age:35,
    Course:"Playwright"};
welcome(emp.Name);
welcome(emp.Course);


/* Multiple conditioning or conditional chain */
/* Scenario ##
avg >= 90 >> A Grade
avg >= 80 >> B Grade
else >> C Grade
*/

var avg = 9;
const check = (avg>=90)  ? "Excellent" : 
              (avg>=65 && avg <90) ? "Great Job" : 
              (avg>=35 && avg<65 ) ? "Good" : "Need Improvement" ;
console.log("Grade : "+check);