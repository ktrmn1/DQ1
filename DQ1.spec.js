import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/login';
test('test', async ({ page }) => {
  const Login = new LoginPage(page);
  await Login.gotoLoginPage()
  await Login.login('pone@mail.ru', 'q1234567890')
  
});