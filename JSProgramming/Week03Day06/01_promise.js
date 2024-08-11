/**
 * Promise concepts
 

let promise  = new Promise((resolve,reject) =>{

    let success =  false;
    if(success){
        resolve("Completed Successfuly");
    }
    else{
        reject("Operation Failed")
    }
}) ;

/*Consuming the promise
//2 Handlers => Catch and then
Then will be used when the promise is success 
promise.then(result => console.log(result)).catch(error =>console.error(error));

/** 
 * catch will print the error whe the prmoise is rejected
 */


function fetchUserData(userId)
{
    return new Promise((resolve,reject) => {
        setTimeout(() => {
         if(userId === 22){
            resolve({id:21, name:"Ramya", email : "ramya@gmail.com"})
         }   
         else{
            reject(new Error("No User has been listed"))
         }
        }, 5000);
    })
}

fetchUserData(21).then(userDetails => {
    console.log("User Found: ",userDetails.name)
})

.catch(errorMsg => {
    console.error(Error());})

