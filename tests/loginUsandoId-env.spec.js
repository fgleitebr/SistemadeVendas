import { test, expect } from '@playwright/test';

test.describe('Login', () => {
  test.beforeEach(async ({page}) => {
    await page.goto('/'); //endereço do site configurado no config.js
  });

test.use({ testIdAttribute: 'data-test' }) 

  test('usuário e senha', async ({page}) => { 
    await page.getByTestId('username').fill(process.env.SAUCE_USER);
    await page.waitForTimeout(2000); 
    await page.getByTestId('password').fill(process.env.SAUCE_PASSWORD);
    await page.waitForTimeout(2000); 
    await page.getByTestId('login-button').click();
    await page.waitForTimeout(2000); 
    await expect(page).toHaveURL(/inventory/);
    await expect(page.getByText('Products')).toBeVisible();
    await expect(page.getByText('Sauce Labs Backpack')).toContainText('Backpack');
    await expect(page.getByRole('button', { name: 'Add to cart'})).toHaveCount(6);
  });

  test('usuário bloqueado', async ({page}) => { 
    await page.getByTestId('username').fill('locked_out_user');
    await page.waitForTimeout(2000); 
    await page.getByTestId('password').fill(process.env.SAUCE_PASSWORD);
    await page.waitForTimeout(2000); 
    await page.getByTestId('login-button').click();
    await page.waitForTimeout(2000); 
    await expect(page.getByText('Locked out')).toBeVisible();

    await page.pause();
  });

});