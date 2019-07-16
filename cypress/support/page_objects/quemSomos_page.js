/// <reference types="Cypress"/>

const TITULO_PAGINA = "//h1[contains(text(), 'Quem Somos')]";


export function validaPagina() {
    cy.xpath(TITULO_PAGINA).should('be.visible')
}