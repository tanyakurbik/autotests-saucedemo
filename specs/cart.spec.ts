import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';

let loginPage: LoginPage;
let inventoryPage: InventoryPage;
let cartPage: CartPage;

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  inventoryPage = new InventoryPage(page);
  cartPage = new CartPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
});

test('user adds item to cart and sees it in cart', async ({ page }) => {
  await inventoryPage.expectAddToCartButtonIsVisible();
  await inventoryPage.clickAddToCartButton();
  await inventoryPage.expectItemInCart('1');
  await inventoryPage.expectRemoveButtonVisible();
  await inventoryPage.goToCart();

  await cartPage.expectItemIsVisible();
});

test('user adds and removes item from cart', async ({ page }) => {
    await inventoryPage.expectAddToCartButtonIsVisible();
    await inventoryPage.clickAddToCartButton();
    await inventoryPage.expectItemInCart('1');
    await inventoryPage.goToCart();
  
    await cartPage.expectItemIsVisible();
    await cartPage.expectItemName('Sauce Labs Backpack');
    
    await cartPage.removeItemFromCart();
    await cartPage.expectCartBadgeNotVisible();
    
    await cartPage.clickContinueShopping();
  
    await inventoryPage.expectAddToCartButtonIsVisible()
  });