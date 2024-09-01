import { test } from "@playwright/test";

test('Test to Login page', {tag:['@smoke','@regression']},async ({page}) => {
        
    console.log("Tag testcase");
    
})
test.describe.configure({mode:'parallel',retries:1});//Describe the mode and retires here
test.describe('Regression suite',()=>{
test(`Test parallel 1`,async ({page}) => {
    
});
test(`Test parallel 2`,async ({page}) => {
    
})

test.describe('Smoke suite',()=>{
    test.describe.configure({mode:'serial'});
    test(`Test parallel 1`,async ({page}) => {
        
    });
    test(`Test parallel 2`,async ({page}) => {
        
    })

})
});
test.use({storageState: "<path>"})

test.fail('Fail test', async () => {
    test.slow();
    test.setTimeout(2400000); //Four mins time to execute the test
    test.step(`Step to run the failed testcases`,async () => {
        
    })
})
