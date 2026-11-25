import { test, expect } from '@playwright/test';

test.describe('Login', () => {
  test.beforeEach(async ({page}) => {
    await page.goto('/'); //endereço do site configurado no config.js
  });

  test('usuário e senha', async ({page}) => { 
    await page.locator('#user-name').fill('standard_user');
    await page.waitForTimeout(2000); 
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.waitForTimeout(2000); 
    await page.getByRole('button', {name: 'login'}).click();
    await page.waitForTimeout(2000); 
    await expect(page).toHaveURL(/inventory/);
    await expect(page.getByText('Products')).toBeVisible();
    await expect(page.getByText('Sauce Labs Backpack')).toContainText('Backpack');
    await expect(page.getByRole('button', { name: 'Add to cart'})).toHaveCount(6);
  });

  test('usuário bloqueado', async ({page}) => { 
    await page.locator('#user-name').fill('locked_out_user');
    await page.waitForTimeout(2000); 
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.waitForTimeout(2000); 
    await page.getByRole('button', {name: 'login'}).click();
    await page.waitForTimeout(2000); 
    await expect(page.getByText('Locked out')).toBeVisible();

    await page.pause();
  });

});