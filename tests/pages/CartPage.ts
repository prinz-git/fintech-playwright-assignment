import { Page } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  private cartItem = '.cart_item';
  private price = '.inventory_item_price';

  async isItemVisible(): Promise<boolean> {
    return await this.page.locator(this.cartItem).isVisible();
  }

  async getPrice(): Promise<string> {
    return await this.page.locator(this.price).innerText();
  }
}
