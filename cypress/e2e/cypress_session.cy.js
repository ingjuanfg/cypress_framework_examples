/// <reference types="cypress"/>

describe('Ejemplo Basico - Cypress', () => {

    beforeEach("Cypress Session para Saucedemo", ()=>{
        cy.session("Login", () => {
        //Autenticacion
        cy.visit('https://www.saucedemo.com/v1/index.html')
        cy.get("#user-name").type("standard_user").tab().
        type("secret_sauce").tab().
        type("{enter}")
    })
})

    //Este ejemplo es la linea base para luego tomarlo y hacer los ajustes necesarios
    //utilizando Page Object Model y Cypress
    
      it('Compra Producto Uno en Saucedemo', () => {
        cy.visit('https://www.saucedemo.com/v1/inventory.html')
        //Seleccion del producto
        cy.get("#item_4_title_link").click()
        cy.get(".btn_primary").click()
    
        //Abrir el carrito y hacer el checkout
        cy.get(".shopping_cart_link").click()
        cy.get(".btn_action").click()
        cy.get("#first-name").type("Juan")
        cy.get("#last-name").type("Fernandez")
        cy.get("#postal-code").type("0500022")
        cy.get(".btn_primary").click()
    
        //Confirmar la compra
        cy.get(".btn_action").click()
    
        //Asersion
        cy.get('.complete-header').should('contain.text','THANK YOU FOR YOUR ORDER')
      })

      it('Compra Producto Dos en Saucedemo', () => {
        cy.visit('https://www.saucedemo.com/v1/inventory.html')

        //Seleccion del producto
        cy.get("#item_4_title_link").click()
        cy.get(".btn_primary").click()
    
        //Abrir el carrito y hacer el checkout
        cy.get(".shopping_cart_link").click()
        cy.get(".btn_action").click()
        cy.get("#first-name").type("Juan")
        cy.get("#last-name").type("Fernandez")
        cy.get("#postal-code").type("0500022")
        cy.get(".btn_primary").click()
    
        //Confirmar la compra
        cy.get(".btn_action").click()
    
        //Asersion
        cy.get('.complete-header').should('contain.text','THANK YOU FOR YOUR ORDER')
      })

      it('Compra Producto Tres en Saucedemo', () => {
        cy.visit('https://www.saucedemo.com/v1/inventory.html')
        //Seleccion del producto
        cy.get("#item_4_title_link").click()
        cy.get(".btn_primary").click()
    
        //Abrir el carrito y hacer el checkout
        cy.get(".shopping_cart_link").click()
        cy.get(".btn_action").click()
        cy.get("#first-name").type("Juan")
        cy.get("#last-name").type("Fernandez")
        cy.get("#postal-code").type("0500022")
        cy.get(".btn_primary").click()
    
        //Confirmar la compra
        cy.get(".btn_action").click()
    
        //Asersion
        cy.get('.complete-header').should('contain.text','THANK YOU FOR YOUR ORDER')
      })
      
    })

    require('cypress-plugin-tab')