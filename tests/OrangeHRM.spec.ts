import {test , expect } from "@playwright/test"
import {OrangeHRM_Login_page} from '../pages/OrangeHRM_Login_page'
import OrangeHRM_testdata from '../test-data/OrangeHRM_testdata.json' with { type: 'json'};

test('OrangeHRM-E2E'  ,async({page})=>{

//navigation


//login

const L = new OrangeHRM_Login_page(page);

await L.navigate()

await L.enterusername(OrangeHRM_testdata.login.username);

await L.enterPassword(OrangeHRM_testdata.login.password);
 await L.clickLogin();
})
