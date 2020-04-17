/// <reference types="Cypress"/>

const addContext = require('mochawesome/addContext');
const URL_INSPIRA = 'www.inspiraqa.com.br';
const LINK_QUEM_SOMOS = "//a[contains(@title, 'Quem Somos')]";
const LINK_CARRINHO_VAZIO = ('span', 'Carrinho vazio');
const LINK_MINHA_CONTA = "//a[contains(text(), 'Minha Conta')]";
const LINK_FALE_CONOSCO = "//a[contains(text(), 'Fale Conosco')]"

export function visita() {
    cy.visit(URL_INSPIRA);
    cy.task('log', 'Acessando site')
}

export function acessaQuemSomos() {
    cy.xpath(LINK_QUEM_SOMOS).click({ force: true })
    cy.task('log', 'Acessando Quem Somos')
}

export function acessaCarrinhoVazio() {
    cy.contains(LINK_CARRINHO_VAZIO).click({ force: true })
    cy.task('log', 'Acessando carrinho')
}

export function acessaMinhaConta() {
    cy.xpath(LINK_MINHA_CONTA).click({ force: true })
    cy.task('log', 'Acessando minha conta')
}

export function acessaFaleConosco() {
    cy.xpath(LINK_FALE_CONOSCO).click({ force: true })
    cy.task('log', 'Acessando Fale Conosco')
}