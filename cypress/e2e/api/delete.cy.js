/// <reference types="cypress"/>

describe('REST API con Cypress', () => {

    //Recuerda validar los ID en la API antes de ejecutar para verificar que tienes data

    it('Consulta Delete - Eliminar', () => {
        cy.request({
            method: "DELETE",
            url: "http://localhost:3000/posts/1"
        }).then(response => {    
            expect(response.status).to.eql(200)
        })
    })

    it('Consulta Delete - Eliminar', () => {
        for(let i=2; i<=14; i++){
        cy.request({
            method: "DELETE",
            url: "http://localhost:3000/posts/"+i
        }).then(response => {    
            expect(response.status).to.eql(200)
        })
     }
    })


  })