import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import * as homePage from '../page_objects/home_page';
import * as quemSomosPage from '../page_objects/quemSomos_page';
import * as carrinhoPage from '../page_objects/carrinho_page';
import * as minhaContaPage from '../page_objects/minhaConta_page';
import * as faleConoscoPage from '../page_objects/faleConosco_page';

/**
 * As linhas comentadas são exemplos de utilização sem a aplicação do Page Objects
 */
Given(/^que eu vá até a página da Inspira QA$/, () => {
  //cy.visit('https://www.inspiraqa.com.br')
  homePage.visita();
});

When(/^eu acessar o link Quem Somos$/, () => {
  //cy.contains('a', 'Quem Somos').click({ force: true })
  homePage.acessaQuemSomos();
});

Then(/^eu devo ver a tela com as informações sobre a página$/, () => {
  // cy.contains('h1', 'Quem Somos')
  //   .should('be.visible')
  quemSomosPage.validaPagina();
});

When(/^eu acessar o link do Carrinho$/, () => {
  //cy.contains('span', 'Carrinho vazio').click({ force: true })
  homePage.acessaCarrinhoVazio();
});

Then(/^eu devo ver a tela com a mensagem de carrinho vazio$/, () => {
  // cy.contains('h1', 'Não existem produtos no carrinho')
  //   .should('be.visible')
  carrinhoPage.verificaMensagemCarrinhoVazio();
});

When(/^eu acessar o link Minha Conta$/, () => {
  //cy.contains('a', 'Minha Conta').click({ force: true })
  homePage.acessaMinhaConta();
});

Then(/^eu devo ver a tela solicitando a identificação$/, () => {
  //cy.contains('h1', 'Identificação').should('be.visible')
  //cy.contains('small', 'Faça o seu login ou crie uma conta').should('be.visible')
  minhaContaPage.verificaTitulo();
  minhaContaPage.verificaSolicitacaoLoginCadastro();
});

When(/^eu acessar o link Fale Conosco$/, () => {
  //cy.contains('a', 'Fale Conosco').click({ force: true })
  homePage.acessaFaleConosco();
});

Then(/^eu devo ver modal solicitando o preenchimento do formulário$/, () => {
  //cy.contains('span', 'Fale Conosco').should('be.visible')
  //cy.contains('*', 'Preencha o formulário abaixo.').should('be.visible')
  faleConoscoPage.verificaTitulo();
  faleConoscoPage.verificaSolicitaçãoPreenchimento();
});