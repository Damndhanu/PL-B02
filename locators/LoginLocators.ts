
import { Page } from '@playwright/test';


//  export const LoginLocators = {
//     Email: '#Email',
//     Password: '#Password',
//     loginButton: 'input[value="Log in"]',
//  };


export const loginLocators = (page:Page)=>({

   Email:page.getByLabel('Email:'),
   password:page.getByLabel('Password:'),
   LoginButton:page.getByRole('button' , { name:'Log in'})

     
})