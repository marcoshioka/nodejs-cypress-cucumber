import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
Given(/^que eu vá até a página da Inspira QA$/, () => {
  cy.visit('https://www.inspiraqa.com.br')
});

When(/^eu acessar o link Quem Somos$/, () => {
  cy.contains('a', 'Quem Somos').click({ force: true })

});

Then(/^eu devo ver a tela com as informações sobre a página$/, () => {
  cy.contains('h1', 'Quem Somos')
    .should('be.visible')
});

When(/^eu acessar o link do Carrinho$/, () => {
  cy.contains('span', 'Carrinho vazio').click({ force: true })
});

Then(/^eu devo ver a tela com a mensagem de carrinho vazio$/, () => {
  cy.contains('h1', 'Não existem produtos no carrinho')
    .should('be.visible')
});

When(/^eu acessar o link Minha Conta$/, () => {
  cy.contains('a', 'Minha Conta').click({ force: true })
});

Then(/^eu devo ver a tela solicitando a identificação$/, () => {
  cy.contains('h1', 'Identificação').should('be.visible')
  cy.contains('small', 'Faça o seu login ou crie uma conta').should('be.visible')
});

When(/^eu acessar o link Fale Conosco$/, () => {
  cy.contains('a', 'Fale Conosco').click({ force: true })
});

Then(/^eu devo ver modal solicitando o preenchimento do formulário$/, () => {
  cy.contains('span', 'Fale Conosco').should('be.visible')
  cy.contains('*', 'Preencha o formulário abaixo.').should('be.visible')
});