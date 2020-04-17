/// <reference types="Cypress"/>

const addContext = require('mochawesome/addContext')


export function verificaSnapshot() {
    cy.matchImageSnapshot()
    cy.task('log', 'Teste regressivo de imagem/layout ok')
}

export function geraLog(mensagem) {
    let date_ob = new Date();
    let date = date_ob.getDate();
    let month = date_ob.getMonth() + 1;
    let year = date_ob.getFullYear();
    let hours = date_ob.getHours();
    let minutes = date_ob.getMinutes();
    let seconds = date_ob.getSeconds();
    let timeStamp = (date + '/' + month + '/' + year + '-' + hours + ':' + minutes + ':' + seconds + 'hs')
    

    Cypress.on('test:after:run', (test) => {
        addContext({ test }, timeStamp + ' - Automação: ' + mensagem)
    })
    cy.task('log', mensagem)
}