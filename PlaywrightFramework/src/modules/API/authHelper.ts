import { chromium  } from "@playwright/test";

let accessToken : any;
let instance_url : any;

async function getAccessToken() {
    //Without fixtures
    const browser = await chromium.launch();
    const browserContext = await browser.newContext();
    const apiRequestContext = browserContext.request;

    //User credentials
    const token_url = "https://login.salesforce.com/services/oauth2/token";
    const grant_type = "password";
    const clientID = "3MVG9GCMQoQ6rpzR7JjgpxmkkfPRvkKhkyBLkrYj.pVem44KXf1sm3NoAUMEiXkJeFVcUfWwLVw.ZkirPjnm0" ;
    const clientSecret = "AE1A89CCF1DBAA97B5271DC18FBD38B73100934D477613E09F8DF8990BDAC09F";
    const SF_UserName = "ramya@testleaf.com";
    const SF_Password = "Password@1";

    const resp = await apiRequestContext.post(token_url,{
        headers:{
            "Content-Type" : "application/x-www-form-urlencoded",
            "Connection": "keep-alive"
        },
        form:{
            "grant_type" : grant_type,
            "client_id" :clientID,
            "client_secret":clientSecret,
            "username":SF_UserName,
            "password":SF_Password
        }
    })

    const respBody = await resp.json();
    return {
        accessToken : respBody.access_token,
        instance_url : respBody.instance_url
        
    }
}

export{getAccessToken}