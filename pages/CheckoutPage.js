export class CheckoutPage {
    constructor(page) {
        this.page = page;
        this.botaoCheckout = page.getByTestId('checkout');
        this.nome = page.getByTestId('firstName');
        this.sobrenome = page.getByTestId('lastName');
        this.cep = page.getByTestId('postalCode');
        this.botaoContinuar = page.getByTestId('continue');
        this.botaoFinalizar = page.getByTestId('finish');
        this.mensagemFinal = page.getByTestId('complete-header');
    }

    async preencherDados(prodnome, sobrenome, cep) {
        await this.nome.fill('F');
        await this.sobrenome.fill('G');
        await this.cep.fill('22222-222');
        await this.botaoContinuar.click();
        
    }

}