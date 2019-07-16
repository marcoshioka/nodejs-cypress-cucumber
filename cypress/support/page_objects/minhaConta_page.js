/// <reference types="Cypress"/>

const TITULO_MINHA_CONTA = "//h1[contains(text(), 'Identificação')]";
const MENSAGEM_LOGIN_CADASTRO = "//small[contains(text(), 'Faça o seu login ou crie uma conta')]" 

export function verificaTitulo() {
    cy.xpath(TITULO_MINHA_CONTA).should('be.visible')
}

export function verificaSolicitacaoLoginCadastro() {
    cy.xpath(MENSAGEM_LOGIN_CADASTRO).should('be.visible')
}
