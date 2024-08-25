import { expect, test } from "@playwright/test";
// let Sys_ID ="5194822e93405610415d7e018bba1036";
test(`ServiceNow : Text formt to JSON Format`, async({request})=>{

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
    
    //To get the Text response
    const respBody = await resp.text();
    console.log(`Text format response : ${respBody}`);

    console.log(`*******************************`);
    const parsedJSN = JSON.parse(respBody);
    console.log(parsedJSN);
    
   
    //End of the performance time
    const endTime = performance.now();

    const respTime = endTime - startTime;
    console.log(`Response Time : ${respTime}`);

    expect(respTime).toBeLessThan(1400);
    

})