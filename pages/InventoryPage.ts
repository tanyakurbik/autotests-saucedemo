import { Page, Locator, expect } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly inventoryContainer: Locator;
  readonly addToCartButton: Locator;
  readonly removeButton: Locator;
  readonly cartBadge: Locator;
  readonly cartButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inventoryContainer = page.locator('[data-test="inventory-container"]');
    this.addToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.removeButton = page.locator('[data-test="remove-sauce-labs-backpack"]');
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
    this.cartButton = page.locator('[data-test="shopping-cart-link"]');
  }

  async expectPageIsVisible() {
    await expect(this.inventoryContainer).toBeVisible();
  }

  async expectAddToCartButtonIsVisible() {
    await expect(this.addToCartButton).toBeVisible();
    await expect(this.addToCartButton).toHaveText('Add to cart');
  }

  async clickAddToCartButton() {
    await expect(this.addToCartButton).toHaveText('Add to cart');
    await this.addToCartButton.click();
  }

  async expectItemInCart(count: string) {
    await expect(this.cartBadge).toHaveText(count);
  }

  async expectRemoveButtonVisible() {
    await expect(this.removeButton).toHaveText('Remove');
  }

  async goToCart() {
    await this.cartButton.click();
  }
}