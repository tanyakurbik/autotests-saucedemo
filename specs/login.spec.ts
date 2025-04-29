import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

test('user can login successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await inventoryPage.expectPageIsVisible();
});

test('user enters wrong password and sees an error message', async ({ page }) => {
    const loginPage = new LoginPage(page);
  
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce123');
  
    await loginPage.expectErrorMessage('Epic sadface: Username and password do not match any user in this service');
    await loginPage.expectErrorButtonVisible();
  });