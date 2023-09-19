/// <reference types="cypress"/>

describe('REST API con Cypress', () => {

    it('Consulta PUT - Actualizar', () => {
        cy.request({
            method: "PUT",
            url: "http://localhost:3000/posts/1",
            body: {
                "id": 1,
                "title": "Completo Cypress 18-09-23",
                "author": "Camilo Perez"
            }
        }).then(response => {    
            expect(response.status).to.eql(200)
        })
    })

  })