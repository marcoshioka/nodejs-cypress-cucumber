/// <reference types="Cypress"/>

// describe("Teste de cálculo", function(){

//     function somaInteiros(param1, param2){
//         let result = param1 + param2
//         return result
//     }

//     it ("Soma de inteiros", function(){
//         expect(somaInteiros(2,5)).to.eql(7)
//     })

//     it ("Soma de inteiros (FAIL)", function(){
//         expect(somaInteiros(2,5)).to.eql(6)
//     })




//})

describe("Pesquisa Meu Pacotinho de Amor", function () {

    it("Pesquisar por KylY ", function () {
        cy.visit('https://www.meupacotinhodeamor.com.br')
        cy.get('#auto-complete')
            .type('kyly')
            .type('{enter}')
        cy.contains('Conjunto Rock')
    })

})
