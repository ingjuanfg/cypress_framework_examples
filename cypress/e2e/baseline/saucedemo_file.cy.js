/// <reference types="cypress"/>

describe('Ejemplo Lectura Archivos - Cypress', () => {

  before(function(){
    cy.fixture('credenciales').as("credencial")
  })


  it.only('Autenticacion 1', () => {
    cy.visit('https://www.saucedemo.com/v1/index.html')
    cy.get("@credencial").then((data)=>{
      cy.get("#user-name").type(data.username)
      cy.get("#password").type(data.password)
      cy.get("#login-button").click()
    })
  })

  it('Autenticacion 2', () => {
    cy.visit('https://www.saucedemo.com/v1/index.html')
    cy.get("#user-name").type("standard_user").tab().
    type("secret_sauce{enter}")
  })


  it('Autenticacion 3 utilizando comando personalizado', () => {
    cy.visit('https://www.saucedemo.com/v1/index.html')
    cy.ingresar_datos("#user-name", "standard_user")
    cy.ingresar_datos("#password","secret_sauce")
    cy.get("#login-button").click()
  })
  

})

require('cypress-plugin-tab')