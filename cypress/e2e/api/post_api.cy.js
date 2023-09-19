/// <reference types="cypress"/>

describe('REST API con Cypress', () => {

    it('Consulta POST - Posts de API', () => {
        cy.request({
            method: "POST",
            url: "http://localhost:3000/posts",
            body: {
                "id": 1,
                "title": "Otro Curso Cypress",
                "author": "Pepe Perez"
            }
        }).then(response => {    
            expect(response.status).to.eql(201)
        })
    })

    it('Consulta POST - Saucedemo de API', () => {
        cy.request({
            method: "POST",
            url: "http://localhost:3000/saucedemo",
            body: {
                "id": 4,
                "username": "locked_user",
                "password": "secret_sauce"
            }
        }).then(response => {    
            expect(response.status).to.eql(201)
        })
    })


    it('Consulta POST - Insertar N cantidad de valores en API', () => {
        for(let i=2; i<=20; i++){
            cy.request({
                method: "POST",
                url: "http://localhost:3000/posts",
                
                body: {
                    "id": i,
                    "title": "Curso de Cypress "+ i,
                    "author": "Juan Fernandez"
                }
            }).then(response => {    
                expect(response.status).to.eql(201)
            })
    }
    })

  })