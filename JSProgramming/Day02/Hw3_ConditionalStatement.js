/** 
 Create two functions : launchBrowser, runTests where, 
    a) launchBrowser need to take input as browserName (string) and do not return any 
        - use if-else (chrome or otherwise) 
        - Print the value 
    b) runTests need to take input as testType (string) and do not return any  
        - use switch case (smoke, sanity, regression, default (smoke)) 
        - Print the values 
Call that function from the javascript 
*/

function launchBrowser(browserName)
{
if(browserName==="Chrome")
{
    console.log("Suppored browser is : "+browserName);
}
else
console.log("Unsupported browser : "+browserName);
}

function runTests(testType)
{
    switch (testType) {
        case "Smoke":
            console.log("Test type is : "+testType);
            break;
        case "Sanity":
            console.log("Test type is : "+testType);
            break;
        case "Regression":
            console.log("Test type is : "+testType);
            break;    
        default:
            console.log("Test type is : Smoke");
            break;
    }

}

launchBrowser("Edge");
runTests("Test");

console.log("***********");

launchBrowser("Chrome");
runTests("Regression");
