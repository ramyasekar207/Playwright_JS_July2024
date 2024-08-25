import { expect, test } from "@playwright/test";
import { getAccessToken } from "../authHelper";

let accessToken:any;
let instanceURL : any;
let opp_ID : any;

test(`01: export the access token from common menthod`,async ({}) => {
    const authToken = await getAccessToken();
    accessToken = authToken.accessToken;
    instanceURL = authToken.instance_url; 
})

test(`02 Salesforce:Create an opportunity`, async ({request}) => {
    const oppUrl = `${instanceURL}/services/data/v58.0/sobjects/Opportunity`;
    console.log(oppUrl);
    const resp = await request.post(oppUrl,{
        headers:{
            "Content-Type" : "application/json",
            "Authorization" : `Bearer ${accessToken}`
        },
        data:{
            "name" : "Opportunity: authHelper function",
            "stageName" : "Prospecting",
            "closeDate" : "2024-12-31"
        }
    })

    console.log(`Opportunity Status Code: ${resp.status()}`);
    console.log(`Opportunity Status Text: ${resp.statusText()}`);
    
    const respBody = await resp.json();
    console.log(respBody);

    opp_ID = respBody.id;
    expect(respBody.success).toEqual(true);
   })

test(`03 Salesforce:update an opportunity`, async ({request}) => {
const oppUrl = `${instanceURL}/services/data/v58.0/sobjects/Opportunity/${opp_ID}`;
console.log(oppUrl);
const resp = await request.patch(oppUrl,{
    headers:{
        "Content-Type" : "application/json",
        "Authorization" : `Bearer ${accessToken}`
    },
    data:{
        "Type": "New Customer",
        "StageName": "Value Proposition"
    }
})

console.log(`Opportunity Status Code: ${resp.status()}`);
console.log(`Opportunity Status Text: ${resp.statusText()}`);

})

test(`04 Salesforce:Get the updated opportunity`, async ({request}) => {
    const oppUrl = `${instanceURL}/services/data/v58.0/sobjects/Opportunity/${opp_ID}`;
    console.log(oppUrl);
    const resp = await request.get(oppUrl,{
        headers:{
            "Content-Type" : "application/json",
            "Authorization" : `Bearer ${accessToken}`
        }
    })
    
    console.log(`Opportunity Status Code: ${resp.status()}`);
    console.log(`Opportunity Status Text: ${resp.statusText()}`);
    
    })

