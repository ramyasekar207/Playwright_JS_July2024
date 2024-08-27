import { expect,test } from "@playwright/test";
import { getAccessToken } from "../src/modules/API/authHelper";
import acc_details from "../data/SF_Login.json"

let Account_ID : any;
let url : any;
let token :any;

test(`Generate access Token`,async () => {
    const tok = await getAccessToken();
    url = tok.instance_url;
    token = tok.accessToken;

})

test(`01: Create Account`,async ({request}) => {
    const resp = await request.post(`${url}/services/data/v58.0/sobjects/Account`,{
        headers:{
        "Authorization" : `Bearer ${token}`,
        "Content-Type": "application/json"
        },
        data:
        {
            "Name" : acc_details.create_Account.acc_Name,
            "Ownership" : "public"
        }
    });
    expect(resp.status()).toEqual(201)
    const respBody = await resp.json();
    expect(respBody.success).toEqual(true);
    Account_ID = respBody.id;
    
})

// test(`02: update the opportunity ` ,async ({request}) => {
//     const resp = await request.patch(`${url}/services/data/v58.0/sobjects/Opportunity/${Opp_ID}`,{
//     headers:
//     {
//         "Content-Type" : "application/json",
//         "Authorization" : `Bearer ${token}`
//     },
//     data:
//     {
//         "Type" : "New Customer",
//         "StageName": "Prospecting"
//     }
//     })

// })

// test(`03: Fetch the created opportunity and assert the updated values ` ,async ({request}) => {
//     const resp = await request.get(`${url}/services/data/v58.0/sobjects/Opportunity/${Opp_ID}`,{
//     headers:
//     {
//         "Content-Type" : "application/json",
//         "Authorization" : `Bearer ${token}`
//     },
//     })
//     const respBody = await resp.json();
//     console.log(respBody);
//     let type = respBody.Type;
//     let stageName = respBody.StageName;
//     expect(type).toEqual('New Customer');
//     expect(stageName).toEqual('Prospecting');
    
// })

// test(`04: Delete the recent opportunity ` ,async ({request}) => {
//     const resp = await request.delete(`${url}/services/data/v58.0/sobjects/Opportunity/${Opp_ID}`,{
//     headers:
//     {
//         "Content-Type" : "application/json",
//         "Authorization" : `Bearer ${token}`
//     }
//     })

//     // const respBody = await resp.json();
//     console.log(`Delete record status : ${resp.status}`);

  
// })