import { test, expect } from '@playwright/test';
import path from 'path';
import { createServer } from 'http';
import { readFileSync } from 'fs';
import * as url from 'url';

let server: ReturnType<typeof createServer>;

const PORT = 3000;

test.beforeAll(async () => {
  const filePath = path.resolve('test-ui/transfer.html');
  server = createServer((req, res) => {
    if (req.url === '/transfer.html') {
      const html = readFileSync(filePath, 'utf-8');
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(html);
    } else {
      res.writeHead(404);
      res.end();
    }
  });

  await new Promise<void>((resolve) => {
    server.listen(PORT, resolve);
  });
});

test.afterAll(() => {
  server.close();
});

test('Transfer Success', async ({ page }) => {
  await page.route('**/api/transfer', async route => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ status: 'success', transactionId: '12345' })
    });
  });

  await page.goto(`http://localhost:${PORT}/transfer.html`);
  await page.click('#transferBtn');

  await expect(page.locator('#result')).toHaveText('Success: 12345');
});

test('Transfer Failure', async ({ page }) => {
  await page.route('**/api/transfer', async route => {
    await route.fulfill({
      status: 400,
      contentType: 'application/json',
      body: JSON.stringify({ error: 'Insufficient funds' })
    });
  });

  await page.goto(`http://localhost:${PORT}/transfer.html`);
  await page.click('#transferBtn');

  await expect(page.locator('#result')).toHaveText('Error: Insufficient funds');
});
