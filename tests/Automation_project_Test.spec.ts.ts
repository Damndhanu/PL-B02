import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';


test('SC_001 , description : ', async ({ page }) => {

  const L = new LoginPage(page);  

await L.navigateToLoginPage();
  await L.login();
  await L.add()

})
