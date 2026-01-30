import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';

test('SauceDemo E2E', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);

  await page.goto('https://www.saucedemo.com/');

  await loginPage.login('standard_user', 'secret_sauce');

  await productsPage.addFirstProductToCart();
  await productsPage.goToCart();

  expect(await cartPage.isItemVisible()).toBeTruthy();

  const price = await cartPage.getPrice();
  expect(price).toMatch(/^\$\d+\.\d{2}$/);
});
