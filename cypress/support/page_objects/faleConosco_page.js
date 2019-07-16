/// <reference types="Cypress"/>

const TITULO_FALE_CONOSCO = "//span[contains(text(), 'Fale Conosco')]";
const PREENCHA_FORMULARIO = ('*', 'Preencha o formulário abaixo.')

export function verificaTitulo() {
    cy.xpath(TITULO_FALE_CONOSCO).should('be.visible')
}

export function verificaSolicitaçãoPreenchimento() {
    cy.contains(PREENCHA_FORMULARIO).should('be.visible')
}