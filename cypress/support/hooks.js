/// <reference types="Cypress"/>


export function verificaSnapshot() {
    cy.matchImageSnapshot()
    cy.task('log', 'Teste regressivo de imagem/layout ok')
}
