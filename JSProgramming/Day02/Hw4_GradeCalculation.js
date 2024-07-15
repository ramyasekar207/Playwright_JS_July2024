/**
 1. Create a function that takes a student's score as a parameter. 
2. Declare and initialize the variable. 
3. Use `switch` statement inside the function. 
4. Return the corresponding grade. 
5. Call the function and print the result. 
 */

function studentScore(score)
{
switch(true)
{
    case (score>90 && score<=100):
        return "Grade A with %: "+score;
    case (score>75 && score <=90):
        return "Grade B with %: "+score;
    case (score>=35 && score <=75):
        return "Grade C with %: "+score;
    case (score<35 && score >=0):
        return "Grade D with %: "+score;
    default:
        return "Please provide a Valide score: "+score;

}
}

console.log(studentScore(100));
console.log(studentScore(90));
console.log(studentScore(76));
console.log(studentScore(75));
console.log(studentScore(35));
console.log(studentScore(34));
console.log(studentScore(0));
console.log(studentScore(-1));
console.log(studentScore(-101));
// console.log(studentScore());