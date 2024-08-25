import { expect,test } from "@playwright/test";

let changeRequest_url = "https://dev225779.service-now.com/api/now/table/change_request";
let sysID :any;
let number:any;
test(`01:ServiceNow - Create a ChangeRequest `,async ({page,request}) => {
    const resp = await request.post(changeRequest_url,{
        headers :{
            "Authorization":"Basic YWRtaW46ZGxjdjc9WVhNWDMk",
            "Content-Type" : "application/json"
        },
        //Postman Body
        data:{
            "short_description":"Created change Request via Playwright API"
        },
    })

    //To get the response status 
    console.log(`Status Code : ${resp.status()}`);

    //To get the response status code
     console.log(`Status Text : ${resp.statusText()}`);
    
    //To get the Json response
    const respBody = await resp.json();
    console.log(respBody);
    
   
    sysID = respBody.result.sys_id;
    number = respBody.result.number;

    expect(resp.status()).toEqual(201);
    console.log(sysID);
    
})

test(`02:ServiceNow - update the created ChangeRequest `,async ({page,request}) => {
    const resp = await request.patch(`${changeRequest_url}/${sysID}`,{
        headers :{
            "Authorization":"Basic YWRtaW46ZGxjdjc9WVhNWDMk",
            "Content-Type" : "application/json"
        },
        //Postman Body
        data:{
            "short_description":"updated change Request via Playwright API"
        },
    })

    //To get the response status 
    console.log(`Status Code : ${resp.status()}`);

    //To get the response status code
     console.log(`Status Text : ${resp.statusText()}`);
           
})

test(`03:ServiceNow - get the updated ChangeRequest and assert the description `,async ({page,request}) => {
    const resp = await request.get(`${changeRequest_url}/${sysID}`,{
        headers :{
            "Authorization":"Basic YWRtaW46ZGxjdjc9WVhNWDMk",
            "Content-Type" : "application/json"
        },
    })

    //To get the response status 
    console.log(`Status Code : ${resp.status()}`);

    //To get the response status code
     console.log(`Status Text : ${resp.statusText()}`);
    
    //To get the Json response
    const respBody = await resp.json();
    console.log(respBody);
       
    let desc = respBody.result.short_description;
    expect(desc).toEqual("updated change Request via Playwright API");
    
})

test(`04:ServiceNow - Delete the created ChangeRequest`,async ({page,request}) => {
    const resp = await request.delete(`${changeRequest_url}/${sysID}`,{
        headers :{
            "Authorization":"Basic YWRtaW46ZGxjdjc9WVhNWDMk",
            "Content-Type" : "application/json"
        },
    })

    //To get the response status 
    console.log(`Status Code : ${resp.status()}`);

    //To get the response status code
     console.log(`Status Text : ${resp.statusText()}`);
       
})

