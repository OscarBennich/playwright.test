import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await page.getByRole('link', { name: 'Test generator' }).first().click();
  await page.getByRole('heading', { name: 'Recording a testDirect link to Recording a test' }).click();
  await page.getByRole('heading', { name: 'Recording a testDirect link to Recording a test' }).click({
    button: 'right'
  });
  
  await expect(page.getByRole('heading', { name: 'Recording a testDirect link to Recording a test' })).toBeVisible();
});