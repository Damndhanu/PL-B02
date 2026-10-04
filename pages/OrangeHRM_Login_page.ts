import { Page  , Locator } from "@playwright/test";
import { LoginLocators } from "../locators/OrangeHRM_Login_Locators";

export class OrangeHRM_Login_page{

    private page: Page;
    private username: Locator;
private password: Locator;
private loginbutton: Locator;
// private Navigate:Locator;

   constructor(page :Page)
   {
    this.page=page;
this.username = page.locator(LoginLocators.username);
this.password =page.locator(LoginLocators.password);
this.loginbutton =page.locator(LoginLocators.loginButton);

// this.navigate= page.locator()
   }

   async navigate()
   {
await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
   
   }
    
async enterusername(username: string)
{
    await this.username.fill(username);
     await this.username.retrieve();
}

async enterPassword(password : string)
{
    await this.password.fill(password);
}

async clickLogin()
{
    await this.loginbutton.click();
}

}