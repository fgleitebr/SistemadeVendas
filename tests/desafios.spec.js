import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage'; 

test.use({ testIdAttribute: 'data-test' }) 

test.describe('Desafios', () => {
  test.beforeEach(async ({page}) => {
    await page.goto('/'); //endereço do site configurado no config.js
    
    });

test('senha errada', async ({page}) => { 
    await page.getByTestId('username').fill(process.env.SAUCE_USER);
    await page.getByTestId('password').fill('senhaerrada');
    await page.waitForTimeout(1000); 
    await page.getByTestId('login-button').click();
    await expect (page.getByTestId('error')).toContainText('Username and password do not match any user in this service');
    await page.pause();

});

test('usuario e senha vazios', async ({page}) => { 
    await page.getByTestId('username').fill('');
    await page.getByTestId('password').fill('');
    await page.waitForTimeout(1000); 
    await page.getByTestId('login-button').click();
    await expect (page.getByTestId('error')).toContainText('Username is required');
    await page.pause();

});

test('remover do carrinho', async ({page}) => { 
    await page.getByTestId('username').fill(process.env.SAUCE_USER);
    await page.getByTestId('password').fill(process.env.SAUCE_PASSWORD);
    await page.waitForTimeout(1000); 
    await page.getByTestId('login-button').click();
    await page.getByTestId('add-to-cart-sauce-labs-backpack').click();
    await page.waitForTimeout(1000); 
    await expect(page.getByTestId('shopping-cart-badge')).toHaveCount(1);
    await page.waitForTimeout(1000); 
    await page.getByTestId('shopping-cart-link').click();
    await page.waitForTimeout(1000); 
    await page.getByTestId('remove-sauce-labs-backpack').click();
    await expect(page.getByTestId('shopping-cart-badge')).toHaveCount(0);
    await page.pause();

});

test('ordenar produtos e ao final dar logout', async ({page}) => { 
    await page.getByTestId('username').fill(process.env.SAUCE_USER);
    await page.getByTestId('password').fill(process.env.SAUCE_PASSWORD);
    await page.waitForTimeout(1000); 
    await page.getByTestId('login-button').click();
    await page.waitForTimeout(1000); 
    await page.getByTestId('product-sort-container').selectOption('hilo');
    await page.waitForTimeout(1000); 
    await page.getByTestId('product-sort-container').selectOption('lohi');
    await page.waitForTimeout(1000); 
    await page.getByTestId('product-sort-container').selectOption('az');
    await page.waitForTimeout(1000); 
    await page.getByTestId('product-sort-container').selectOption('za');
    await page.waitForTimeout(1000); 
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.getByTestId('logout-sidebar-link').click();

});

test('adicionar dois produtos no carrinho, depois retirar e depois dar logoff', async ({page}) => { 
    await page.getByTestId('username').fill(process.env.SAUCE_USER);
    await page.getByTestId('password').fill(process.env.SAUCE_PASSWORD);
    await page.waitForTimeout(1000); 
    await page.getByTestId('login-button').click();
    await page.waitForTimeout(1000); 
    await page.getByTestId('add-to-cart-sauce-labs-backpack').click();
    await page.waitForTimeout(1000); 
    await page.getByTestId('add-to-cart-sauce-labs-bolt-t-shirt').click();
    await page.waitForTimeout(1000); 
    await expect(page.getByTestId('shopping-cart-badge')).toHaveText('2');
    await page.waitForTimeout(1000); 
    await page.getByTestId('shopping-cart-link').click();
    await page.waitForTimeout(1000); 
    await page.getByTestId('remove-sauce-labs-backpack').click();
    await page.waitForTimeout(1000); 
    await page.getByTestId('remove-sauce-labs-bolt-t-shirt').click();
    await page.waitForTimeout(1000); 
    await expect(page.getByTestId('shopping-cart-badge')).toHaveCount(0);
    await page.waitForTimeout(1000); 
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.waitForTimeout(1000); 
    await page.getByTestId('logout-sidebar-link').click();

});
    //await page.waitForTimeout(1000); 
    //await page.getByTestId('add-to-cart-sauce-labs-backpack').click();
    //await page.waitForTimeout(1000); 
    //await expect(page.getByTestId('shopping-cart-badge')).toHaveText('1');
    //await page.waitForTimeout(1000); 
    //await page.getByTestId('shopping-cart-link').click();
    //await page.waitForTimeout(1000); 
    //await page.getByTestId('checkout').click();
    //await page.waitForTimeout(1000); 
    //await page.getByTestId('firstName').fill('F');
    //await page.waitForTimeout(1000); 
    //await page.getByTestId('lastName').fill('G');
    //await page.waitForTimeout(1000); 
    //await page.getByTestId('postalCode').fill('22222-222');
    //await page.waitForTimeout(1000); 
    //await page.getByTestId('continue').click();
    //await page.waitForTimeout(1000); 
    //await page.getByTestId('finish').click();
    //await expect(page.getByTestId('complete-header')).toHaveText('Thank you for your order!');
    //await page.pause();


    //await expect(page).toHaveURL(/inventory/);
    //await expect(page.getByText('Products')).toBeVisible();
    //await expect(page.getByText('Sauce Labs Backpack')).toContainText('Backpack');
    //await expect(page.getByRole('button', { name: 'Add to cart'})).toHaveCount(6);
  
});