import { test, expect } from '@playwright/test';

// Garante que o getByTestId busque pelo atributo "data-test" do SauceDemo
test.use({ testIdAttribute: 'data-test' });

const listadeusuarios = [

'standard_user',
'problem_user',
'performance_glitch_user',
'error_user',
'visual_user',
];

test.describe('Login', () => {
  test.beforeEach(async ({page}) => {
    await page.goto('/'); //endereço do site configurado no config.js
  });

for (const usuario of listadeusuarios) {
   test(`login funciona para ${usuario}`, async ({page}) => {  //buscando o valor guardado em lista de usuarios
    await page.getByTestId('username').fill(usuario); //buscando o valor guardado em lista de usuarios
    await page.waitForTimeout(2000); 
    await page.getByTestId('password').fill('secret_sauce');
    await page.waitForTimeout(2000); 
    await page.getByTestId('login-button').click();
    await page.waitForTimeout(2000); 
    await expect(page).toHaveURL(/inventory/);
    await expect(page.getByText('Products')).toBeVisible();
    await expect(page.getByText('Sauce Labs Backpack')).toContainText('Backpack');
    await expect(page.getByRole('button', { name: 'Add to cart'})).toHaveCount(6);
    console.log(usuario);

});
}
});