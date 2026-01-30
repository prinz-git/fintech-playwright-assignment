import { test, expect } from '@playwright/test';
import path from 'path';

test('Transfer Success', async ({ page }) => {
  await page.route('**/api/transfer', route =>
    route.fulfill({ status: 200, body: JSON.stringify({ status: 'success', transactionId: '12345' }) })
  );
  await page.goto(`file://${path.resolve('test-ui/transfer.html')}`);
  await page.click('#transferBtn');
  await expect(page.locator('#result')).toHaveText('Success: 12345');
});

test('Transfer Failure', async ({ page }) => {
  await page.route('**/api/transfer', route =>
    route.fulfill({ status: 400, body: JSON.stringify({ error: 'Insufficient funds' }) })
  );
  await page.goto(`file://${path.resolve('test-ui/transfer.html')}`);
  await page.click('#transferBtn');
  await expect(page.locator('#result')).toHaveText('Error: Insufficient funds');
});
