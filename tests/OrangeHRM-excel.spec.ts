import {test , expect } from "@playwright/test"
import {OrangeHRM_Login_page} from '../pages/OrangeHRM_Login_page'
import {readExcelData} from '../utils/excelReader'

const LoginData = readExcelData('../test-data/LoginData.xlsx', 'SC_001');


for(let  data of LoginData)  
    {

test('OrangeHRM-Login Using Excel data'  ,async({page})=>{

const L = new OrangeHRM_Login_page(page);

await L.navigate()

await L.enterusername(data.username);

await L.enterPassword(data.password);
 await L.clickLogin();

})





}