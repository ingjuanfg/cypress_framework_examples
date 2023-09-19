/// <reference types="cypress"/>


//Usar en Only en los test, me permite ejecutar unicamente los que contienen esta palabra y no todos los test.

describe('Login en Saucedemo usando Cypress', () => {
  let username;
  let password;

  beforeEach(function(){
      cy.request({
        method: "GET",
        url: "http://localhost:3000/saucedemo",
        headers: {
            accept: "application/json"
        }
    }).then(response => {
        let datos;
        datos = JSON.parse(JSON.stringify(response.body))
        username = datos[0].username; 
        password = datos[0].password
    })
  })

  it('Login Exitoso Saucedemo', () => {
    cy.visit('https://www.saucedemo.com/v1/index.html')
    cy.get("#user-name").type(username)
    cy.get("#password").type(password)
    cy.get("#login-button").click()
    cy.get(".product_label").should("contain.text", "Products");
  })


})