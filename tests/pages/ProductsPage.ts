import { Page } from '@playwright/test';

export class ProductsPage {
  constructor(private page: Page) {}

  private addToCartButton = 'button[data-test^="add-to-cart"]';
  private cartIcon = '.shopping_cart_link';

  async addFirstProductToCart() {
    await this.page.locator(this.addToCartButton).first().click();
  }

  async goToCart() {
    await this.page.click(this.cartIcon);
  }
}
