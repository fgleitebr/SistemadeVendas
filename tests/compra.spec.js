import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage'; 

test.use({ testIdAttribute: 'data-test' }) 

test.describe('Compra', () => {
  test.beforeEach(async ({page}) => {
    await page.goto('/'); //endereço do site configurado no config.js
    await page.getByTestId('username').fill(process.env.SAUCE_USER);
    await page.getByTestId('password').fill(process.env.SAUCE_PASSWORD);
    await page.waitForTimeout(1000); 
    await page.getByTestId('login-button').click();
    });

test('comprar uma mochila do começo ao fim', async ({page}) => { 
    await page.waitForTimeout(1000); 
    await page.getByTestId('add-to-cart-sauce-labs-backpack').click();
    await page.waitForTimeout(1000); 
    await expect(page.getByTestId('shopping-cart-badge')).toHaveText('1');
    await page.waitForTimeout(1000); 
    await page.getByTestId('shopping-cart-link').click();
    await page.waitForTimeout(1000); 
    await page.getByTestId('checkout').click();
    await page.waitForTimeout(1000); 
    await page.getByTestId('firstName').fill('F');
    await page.waitForTimeout(1000); 
    await page.getByTestId('lastName').fill('G');
    await page.waitForTimeout(1000); 
    await page.getByTestId('postalCode').fill('22222-222');
    await page.waitForTimeout(1000); 
    await page.getByTestId('continue').click();
    await page.waitForTimeout(1000); 
    await page.getByTestId('finish').click();
    await expect(page.getByTestId('complete-header')).toHaveText('Thank you for your order!');
    await page.pause();


    //await expect(page).toHaveURL(/inventory/);
    //await expect(page.getByText('Products')).toBeVisible();
    //await expect(page.getByText('Sauce Labs Backpack')).toContainText('Backpack');
    //await expect(page.getByRole('button', { name: 'Add to cart'})).toHaveCount(6);
  });
});