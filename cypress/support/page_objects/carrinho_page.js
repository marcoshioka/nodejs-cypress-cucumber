/// <reference types="Cypress"/>

const MENSAGEM_CARRINHO_VAZIO = "//h1[contains(text(), 'Não existem produtos no carrinho')]";

export function verificaMensagemCarrinhoVazio() {
    cy.xpath(MENSAGEM_CARRINHO_VAZIO).should('be.visible')
    cy.task('log', 'Mensagem de carrinho vazio validada')
}