import { Page, Locator, expect } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly inventoryItem: Locator;
  readonly cartBadge: Locator;
  readonly inventoryItemName: Locator;
  readonly removeButton: Locator;
  readonly continueShoppingButton: Locator;


  constructor(page: Page) {
    this.page = page;
    this.inventoryItem = page.locator('[data-test="inventory-item"]');
    this.inventoryItemName = page.locator('[data-test="inventory-item-name"]');
    this.removeButton = page.locator('[data-test="remove-sauce-labs-backpack"]');
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
    this.continueShoppingButton = page.locator('[data-test="continue-shopping"]');
  }

  async expectItemIsVisible() {
    await expect(this.inventoryItem).toBeVisible();
  }

  async expectItemName(expectedName: string) {
    await expect(this.inventoryItemName).toHaveText(expectedName);
  }

  async removeItemFromCart() {
    await expect(this.removeButton).toHaveText('Remove');
    await this.removeButton.click();
  }

  async expectCartBadgeNotVisible() {
    await expect(this.cartBadge).not.toBeVisible();
  }

  async clickContinueShopping() {
    await this.continueShoppingButton.click();
  }
}