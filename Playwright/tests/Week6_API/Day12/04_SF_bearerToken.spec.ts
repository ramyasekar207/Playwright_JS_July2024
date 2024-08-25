import { expect, test } from "@playwright/test";
let accessToken : any;
let instance_url : any;
let opportunity_Id : any;
test(`Salesforce : Generate Access Token : Bearer`, async({request})=>{
    
    const token_url = "https://login.salesforce.com/services/oauth2/token";
    const grant_type = "password";
    const clientID = "3MVG9GCMQoQ6rpzR7JjgpxmkkfPRvkKhkyBLkrYj.pVem44KXf1sm3NoAUMEiXkJeFVcUfWwLVw.ZkirPjnm0" ;
    const clientSecret = "AE1A89CCF1DBAA97B5271DC18FBD38B73100934D477613E09F8DF8990BDAC09F";
    const SF_UserName = "ramya@testleaf.com";
    const SF_Password = "Password@1";
    
    //Endpoint URL
    const resp = await request.post(token_url,{
        //Postman Header > Authorization
        headers :{
            "Content-Type" : "application/x-www-form-urlencoded",
            "Connection": "keep-alive"
        },
        /*Postman Body => as it is defined in 'x-www-form-urlencoded' section we are 
        declaring everything under 'form' instead 'data' */
        form:{
            "grant_type" : grant_type,
            "client_id" :clientID,
            "client_secret":clientSecret,
            "username":SF_UserName,
            "password":SF_Password
        },
    })
 
    //To generate the Token
    const respBody = await resp.json();
    console.log(respBody);

    //Get the accessToken
   accessToken = respBody.access_token;
   instance_url = respBody.instance_url;
   console.log(accessToken);
   console.log(instance_url);
   
})

test(`01 Salesforce:Create an opportunity`, async ({request}) => {
    const oppUrl = `${instance_url}/services/data/v58.0/sobjects/Opportunity`;
    console.log(oppUrl);
    const resp = await request.post(oppUrl,{
        headers:{
            "Content-Type" : "application/json",
            "Authorization" : `Bearer ${accessToken}`
        },
        data:{
            "name" : "01_Opportunity_Playwright_API",
            "stageName" : "Prospecting",
            "closeDate" : "2024-12-31"
        }
    })

    console.log(`Opportunity Status Code: ${resp.status()}`);
    console.log(`Opportunity Status Text: ${resp.statusText()}`);
    
    const respBody = await resp.json();
    console.log(respBody);

    opportunity_Id = respBody.id;
    expect(respBody.success).toEqual(true);
   })