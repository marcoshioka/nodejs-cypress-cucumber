/// <reference types="Cypress"/>

const URL_INSPIRA = 'www.inspiraqa.com.br';
const LINK_QUEM_SOMOS = "//a[contains(@title, 'Quem Somos')]";
const LINK_CARRINHO_VAZIO = ('span', 'Carrinho vazio');
const LINK_MINHA_CONTA = "//a[contains(text(), 'Minha Conta')]";
const LINK_FALE_CONOSCO = "//a[contains(text(), 'Fale Conosco')]"

export function visita() {
    cy.visit(URL_INSPIRA);
}

export function acessaQuemSomos() {
    cy.xpath(LINK_QUEM_SOMOS).click({ force: true })
}

export function acessaCarrinhoVazio() {
    cy.contains(LINK_CARRINHO_VAZIO).click({ force: true })
}

export function acessaMinhaConta() {
    cy.xpath(LINK_MINHA_CONTA).click({ force: true })
}

export function acessaFaleConosco() {
    cy.xpath(LINK_FALE_CONOSCO).click({ force: true })
}