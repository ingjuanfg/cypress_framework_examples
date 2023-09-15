/// <reference types="cypress"/>

describe('Ejemplo Lectura Archivos - Cypress', () => {

  it.only('Autenticacion con 4 Usuarios', () => {
    cy.fixture("saucedemo_credenciales").then(testdata => {
      testdata.forEach(data =>{
        const json_username = data.username;
        const json_password = data.password;
        cy.visit('https://www.saucedemo.com/v1/index.html')
          cy.get("#user-name").type(json_username)
          cy.get("#password").type(json_password)
          cy.get("#login-button").click()
      })
    })
  })
})

require('cypress-plugin-tab')