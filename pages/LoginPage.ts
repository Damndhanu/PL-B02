import { Page } from '@playwright/test';
import {loginLocators} from '../locators/LoginLocators';


export class LoginPage {
 
   private page:Page;
   private locators;
    constructor( page:Page){ 
        this.page=page;
        this.locators = loginLocators(page);
    }

    async navigateToLoginPage(){

        await this.page.goto('/login');
    }

    async login()
    {
        await this.locators.Email.fill('dhanushrpr@gmail.com');
        await this.locators.password.fill('Dhanu@123');
       await this.locators.LoginButton.click();
    }
    

    //  async Search()
    //  {
    //     await this.page.fill(LoginLocators.searchBox,'Books');
    //     await this.page.click(LoginLocators.searchButton);
    //  }

}