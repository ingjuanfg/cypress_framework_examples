/// <reference types="cypress"/>

describe('Ejemplo Basico - Cypress', () => {

//Este ejemplo se van a utlizar algunas instrucciones para usar el teclado y optimizar la automatización.

//Instalar plugin tab con este comando
// npm install -D cypress-plugin-tab

  it('Compra Producto en Saucedemo', () => {
    //Autenticacion
    cy.visit('https://www.saucedemo.com/v1/index.html')

    //Solo se mapea el objeto de user name y luego se mueve con Tab y Enter para autenticarse
    cy.get("#user-name").type("standard_user").tab().
    type("secret_sauce").tab().
    type("{enter}")

    //Seleccion del producto
    cy.get("#item_4_title_link").click()
    cy.get(".btn_primary").click()

    //Abrir el carrito y hacer el checkout
    cy.get(".shopping_cart_link").click()
    cy.get(".btn_action").click()


    //Solo se mapea objeto de nombre y luego se mueve con Tab hasta completar el registro
    cy.get("#first-name").type("Juan").tab().
    type("Fernandez").tab().
    type("0500022").tab().
    type("{enter}")

    //Confirmar la compra
    cy.get(".btn_action").click()

    //Asersion
    cy.get('.complete-header').should('contain.text','THANK YOU FOR YOUR ORDER')
  })
  
})

require('cypress-plugin-tab')