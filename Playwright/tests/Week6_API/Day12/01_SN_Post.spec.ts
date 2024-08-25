import { test } from "@playwright/test";
let Sys_ID :any;
test(`ServiceNow : API Post process`, async({request})=>{
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
    Sys_ID = respBody.result.sys_id;
    console.log(`Sys_ID : ${Sys_ID}`);
    console.log(`Incident Number : ${respBody.result.number}`);

    //Nested Array
    console.log(`Nested Array : ${respBody.result.sys_domain.value}`);

})

test(`02: ServiceNow Get resposne`,async ({request}) => {
    const getResp = await request.get(`https://dev225779.service-now.com/api/now/table/incident/${Sys_ID}`,{
        headers:{
            "Authorization":"Basic YWRtaW46ZGxjdjc9WVhNWDMk",
            "Content-Type" : "application/json"
        }
    });

    console.log(getResp.status());
    const respBody = await getResp.json();
    console.log(respBody);
    
})