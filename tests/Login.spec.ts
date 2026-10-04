import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';


test('Login Test', async ({ pagloginPage }) => {

  const L = new LoginPage(page);  

await L.navigateToLoginPage();
  await L.login();

})



