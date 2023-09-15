/// <reference types="cypress"/>


//Usar en Only en los test, me permite ejecutar unicamente los que contienen esta palabra y no todos los test.

describe('Login en Saucedemo usando Cypress', () => {
  it.only('Login Exitoso Saucedemo', () => {
    cy.visit('https://www.saucedemo.com/v1/index.html')
    cy.get("#user-name").type("standard_user")
    cy.get("#password").type("secret_sauce")
    cy.get("#login-button").click()
    cy.get(".product_label").should("contain.text", "Products");
  })
  
  it('Login User con Problemas Saucedemo', () => {
    cy.visit('https://www.saucedemo.com/v1/index.html')
    cy.get("#user-name").type("problem_user")
    cy.get("#password").type("secret_sauce")
    cy.get("#login-button").click()
    cy.get(".product_label").should("contain.text", "Products");
  })

  it.only('Login Usuario Bloqueado Saucedemo', () => {
    cy.visit('https://www.saucedemo.com/v1/index.html')
    cy.get("#user-name").type("locked_out_user")
    cy.get("#password").type("secret_sauce")
    cy.get("#login-button").click()
    cy.get(".error-button").should('be.visible');
  })

  it('Login Problema Performance Saucedemo', () => {
    cy.visit('https://www.saucedemo.com/v1/index.html')
    cy.get("#user-name").type("performance_glitch_user")
    cy.get("#password").type("secret_sauce")
    cy.get("#login-button").click()
    cy.get(".product_label").should("contain.text", "Products");
  })
})