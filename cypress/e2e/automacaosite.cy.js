/// <reference types="cypress" />

describe('Automação para fazer um pedido no AiqFome', () => {
  it('passes', () => {
    cy.visit("https://aiqfome.com")
    cy.scrollTo('top');
    cy.wait(1000);
    cy.get('#buttonSelecionarCidade').click();
    cy.get('#cidades18 > :nth-child(32) > .blue-text').click();
    cy.get('#burger-imagem').click();
    cy.scrollTo('top');
    cy.wait(1000);
    cy.get('#campanha19loja104939').click();
    cy.get('#nome-itens-953735 > :nth-child(3) > :nth-child(1) > div.col-12').scrollIntoView();
    cy.wait(1000)
    cy.get('#nome-itens-953735 > :nth-child(3) > :nth-child(1) > div.col-12').click();
    cy.wait(1000);
    cy.get('#addi_btn').click();
    cy.wait(1000);
    cy.get('#ticket-btn').click();
    cy.wait(1000);
    cy.scrollTo('bottom');
    cy.wait(2500);
    cy.get('#ticket-add-btn').click();
    cy.wait(1000);
    cy.get('#login').type("");
    cy.wait(2000);
    cy.get('#senha').type("");
    cy.get('#btn-login').click();
    cy.get('#ticket-btn').click();
    cy.scrollTo('bottom');
    cy.wait(2500);
    cy.get('#ticket-add-btn').click();
    cy.scrollTo('top');
    cy.wait(1500);
    cy.get('#checkout-content > .padding-right > :nth-child(1)').click();
    cy.wait(1500);
    cy.get('#checkout-enderecos > .input-radio-interface > :nth-child(1)').click();
    cy.wait(1500);
    cy.scrollTo('bottom');
    cy.wait(1500);
    cy.get('#checkout-forma-pagamento > .input-radio-interface > :nth-child(2) > .semibold > .grey-text').click();
  })
})