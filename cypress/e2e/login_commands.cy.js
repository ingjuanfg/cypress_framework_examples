/// <reference types="cypress"/>


//Login en Saucedemo usando un COMMAND creado, el command esta en la carpeta Support, archovo commands.js

describe('Ejemplo con Commands', () => {

  //Ver comentario en el command para ver como funciona el command cy.escribirEnCampo.
  it('Login usando Command creado', () => {
    cy.visit('https://www.saucedemo.com/v1/index.html')

    //Llamado al command
    cy.escribirEnCampo("#user-name", "standard_user")
    cy.escribirEnCampo("#password", "secret_sauce")
    
    cy.get("#login-button").click()
    cy.get(".product_label").should("contain.text", "Products");
  })
})