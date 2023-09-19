/// <reference types="cypress"/>


describe('REST API con Cypress', () => {
    let datos;
    it('Consulta GET', () => {
        datos = cy.request("http://localhost:3000/posts")
        datos.its("status").should("equal", 200)
    })


    it('Consulta GET - Uno', () => {
        datos = cy.request("http://localhost:3000/posts")
        .should((response)=>{
            expect(response.status).to.eq(200)
        })
    })

    it('Consulta GET - Dos', () => {
        cy.request({
            method: "GET",
            url: "http://localhost:3000/posts",
            headers: {
                accept: "application/json"
            }
        }).then(response => {
            let datos;
            datos = JSON.parse(JSON.stringify(response.body))

            cy.log(datos)

            expect(datos[0]).has.property("title", "Curso de Cypress7")
            expect(datos[0]).has.property("author", "Juan Fernandez")
        })
    })


    it('Consulta GET - Tres', () => {
        cy.request({
            method: "GET",
            url: "http://localhost:3000/saucedemo",
            headers: {
                accept: "application/json"
            }
        }).then(response => {
            let datos;
            datos = JSON.parse(JSON.stringify(response.body))
    
            cy.log(datos)
    
            expect(datos[0]).has.property("username", "standard_user")
            expect(datos[0]).has.property("password", "secret_sauce")
        })
    })
  })