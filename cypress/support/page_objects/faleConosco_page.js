/// <reference types="Cypress"/>

const TITULO_FALE_CONOSCO = "//span[contains(text(), 'Fale Conosco')]";
const PREENCHA_FORMULARIO = ('*', 'Preencha o formulário abaixo.')
const NOME = ("//input[@id='id_nome']")

export function verificaTitulo() {
    cy.xpath(TITULO_FALE_CONOSCO).should('be.visible')
    cy.task('log', 'Título validado')
}

export function verificaSolicitaçãoPreenchimento() {
    cy.contains(PREENCHA_FORMULARIO).should('be.visible')
    cy.xpath(NOME).should('be.visible')
    cy.task('log', 'Solicitação de preenchimento do formulário')
}