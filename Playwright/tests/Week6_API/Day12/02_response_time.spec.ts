import { expect, test } from "@playwright/test";
// let Sys_ID ="5194822e93405610415d7e018bba1036";
test(`ServiceNow : Calculate the response time`, async({request})=>{

    //To calculate the start time
    const startTime = performance.now();

    //Endpoint URL
    const resp = await request.post("https://dev225779.service-now.com/api/now/table/incident",{
        //Postman Header > Authorization
        headers :{
            "Authorization":"Basic YWRtaW46ZGxjdjc9WVhNWDMk",
            "Content-Type" : "application/json"
        },
        //Postman Body
        data:{
            "short_description":"Created incident via Playwright API"
        },
    })
 
    //To get the response status 
    console.log(`Status Code : ${resp.status()}`);

     //To get the response status code
     console.log(`Status Text : ${resp.statusText()}`);

     //201 - New record created
     //200- Ok status
    
    //To get the Json response
    const respBody = await resp.json();
    console.log(respBody);

    //To get the value inside the response body
    //to get sys_id
    console.log(`Sys_ID : ${respBody.result.sys_id}`);
    console.log(`Incident Number : ${respBody.result.number}`);

    //Nested Array
    console.log(`Nested Array : ${respBody.result.sys_domain.value}`);

    //End of the performance time
    const endTime = performance.now();

    const respTime = endTime - startTime;
    console.log(`Response Time : ${respTime}`);

    expect(respTime).toBeLessThan(1400);
    

})